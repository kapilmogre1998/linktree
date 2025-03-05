import { useEffect, useState } from 'react';
import './Analytics1.scss';
import Sidebar from '../Common/Sidebar/Sidebar';
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { getCountAPI } from './api';
import { toast } from 'react-toastify';

const BAR_CHART_DATA = [
    { label: 'Linux', value: 0, color: '#92ffc6' },
    { label: 'Mac', value: 0, color: '#9bebc1' },
    { label: 'iOS', value: 0, color: '#165534' },
    { label: 'Windows', value: 0, color: '#3ee58f' },
    { label: 'Android', value: 0, color: '#a1d4ba' },
    { label: 'Other', value: 0, color: '#21af66' }
];

const DONUT_CHART_DATA = [
    { label: 'Youtube', value: 0, color: '#28a263', percentage: '52.1%' },
    { label: 'Facebook', value: 0, color: '#7FD0A1', percentage: '22.8%' },
    { label: 'Instagram', value: 0, color: '#B3E5C7', percentage: '13.9%' },
    { label: 'Other', value: 0, color: '#D9F2E4', percentage: '11.2%' }
];

const Analytics = () => {
    const userName = JSON.parse(localStorage.getItem('user_data'))?.username || {};
    const [hoveredBarIndex, setHoveredBarIndex] = useState(null);
    const [data, setData] = useState({
        linkCount: 0,
        shopCount: 0,
        ctaCount: 0,
        lineChartData: [0, 0, 0, 0, 0, 0, 0],
        barChartData: BAR_CHART_DATA,
        donutChartData: DONUT_CHART_DATA,
        links: {
            link1: 0,
            link2: 0,
            link3: 0,
            link4: 0,
            link5: 0,
            others: 0
        }
    })

    // Line chart path generator
    const getLinePath = (data) => {
        const height = 200;
        const width = 989;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;
    
        // Handle case where range is 0 (max == min)
        if (range === 0) {
            return data.map((value, index) => {
                const x = (index * (width / (data.length - 1)));
                const y = height - value; // All points will be at the same level
                return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ');
        }
    
        return data.map((value, index) => {
            const x = (index * (width / (data.length - 1)));
            const y = height - ((value - min) / range * height); // Map data to chart height
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };

    // Donut chart segment generator
    const createDonutSegment = (percentage, startAngle) => {
        const angle = (percentage / 100) * 360;
        const x1 = 50 + 40 * Math.cos((Math.PI * (startAngle - 90)) / 180);
        const y1 = 50 + 40 * Math.sin((Math.PI * (startAngle - 90)) / 180);
        const x2 = 50 + 40 * Math.cos((Math.PI * (startAngle + angle - 90)) / 180);
        const y2 = 50 + 40 * Math.sin((Math.PI * (startAngle + angle - 90)) / 180);

        const largeArcFlag = angle > 180 ? 1 : 0;
        return `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    };

    // Calculate donut segments
    const total = data.donutChartData.reduce((acc, item) => acc + item.value, 0);
    let currentAngle = 0;
    const donutSegments = data.donutChartData.map((item) => {
        const percentage = (item.value / total) * 100;
        const path = createDonutSegment(percentage, currentAngle);
        const segment = { path, color: item.color };
        currentAngle += (percentage / 100) * 360;
        return segment;
    });

    const fetchCountTracking = async (userId) => {
        try {
            const res = await getCountAPI(userId);
            if (res?.data?.sts == 1 && res.data?.data) {
                console.log(res)
                // const modifiedData = {
                //     ...res.data.data,
                //     id: res.data.data._id
                // }

                // delete modifiedData._id;
                // delete modifiedData.__v;
                // delete modifiedData.userId;

                // dispatch(setMobilePreview(modifiedData));
                // setData(modifiedData);
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg);
            }
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user_data'))?.id;
        fetchCountTracking(userId)
    }, [])

    return (
        <div className='analytics-container' >
            <Sidebar activeIndex={'3'} />
            <div className="dashboard-container">
                <header className="header">
                    <div className="header-content">
                        <h1 className="greeting"><span className='text-bold' >Hi</span>, {userName}!</h1>
                        <p className="notification">Congratulations. You got a great response today.</p>
                    </div>
                </header>

                <div className='calendar-container' >
                    <div className='title' >Overview</div>
                    <div className="date-range-selector" onClick={() => { }}>
                        <div className="date-range-content">
                            <CiCalendar style={{ width: '20px', height: '20px' }} />
                            <span className="date-text">{'Feb 9th to feb 15th'}</span>
                            <FaAngleDown style={{ width: '14px', height: '14px' }} />
                        </div>
                    </div>
                </div>
                {/* Header Cards */}
                <div className="header-cards">
                    <div className="header-cards-container">
                        <div className="card green">
                            <div className="card-content">
                                <h3>Clicks on Links</h3>
                                <div className="stats">
                                    <div className="number">{data?.linkCount}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>Click on Shop</h3>
                                <div className="stats">
                                    <div className="number">{data?.shopCount}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>CTA</h3>
                                <div className="stats">
                                    <div className="number">{data?.ctaCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Charts Container */}
                <div className="charts-container">
                    {/* Line Chart */}
                    <div className="line-chart-container">
                        <div className="y-axis">
                            <span>3K</span>
                            <span>2K</span>
                            <span>1K</span>
                            <span>0</span>
                        </div>
                        <div className="chart-area-1">
                            {/* Horizontal grid lines */}
                            <line x1="0" y1="0" x2="989" y2="0" className="grid-line" />
                            <line x1="0" y1="76.75" x2="989" y2="76.75" className="grid-line" />
                            <line x1="0" y1="153.5" x2="989" y2="153.5" className="grid-line" />
                            <line x1="0" y1="230.25" x2="989" y2="230.25" className="grid-line" />

                            <svg width="100%" height="100%" viewBox="0 0 989 250" className="line-chart">
                                <path
                                    d={getLinePath(data.lineChartData)}
                                    className="chart-line"
                                    fill="none"
                                />
                            </svg>
                            <div className="x-axis">
                                <span>Jan</span>
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span>Jun</span>
                                <span>Jul</span>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-charts">
                        <div className="bar-chart-container">
                            <h2 className="chart-title">Traffic by Device</h2>
                            <div className="chart-content">
                                <div className="y-axis-labels">
                                    <div className="y-axis-label">3K</div>
                                    <div className="y-axis-label">2K</div>
                                    <div className="y-axis-label">1K</div>
                                    <div className="y-axis-label">0</div>
                                </div>
                                <div className="chart-area">
                                    <div className="bars-container">
                                        {data.barChartData.map((item, index) => (
                                            <div key={index} className="bar-column">
                                                <div
                                                    className="bar-wrapper"
                                                    onMouseEnter={() => setHoveredBarIndex(index)}
                                                    onMouseLeave={() => setHoveredBarIndex(null)}
                                                >
                                                    {hoveredBarIndex === index && (
                                                        <div className="tooltip">
                                                            {item.value.toLocaleString()}
                                                        </div>
                                                    )}
                                                    <div
                                                        className="bar"
                                                        style={{
                                                            height: `${(item.value / Math.max(...data.barChartData.map(d => d.value))) * 216}px`,
                                                            backgroundColor: item.color
                                                        }}
                                                    />
                                                </div>
                                                <div className="x-axis-label">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Donut Chart */}
                        <div className="donut-chart-container">
                            <h2 className="chart-title">Sites</h2>
                            <div className="chart-content">
                                <div className="donut-wrapper">
                                    <svg viewBox="0 0 100 100" className="donut">
                                        {donutSegments.map((segment, index) => (
                                            <path
                                                key={index}
                                                d={segment.path}
                                                fill={segment.color}
                                                className="donut-segment"
                                            />
                                        ))}
                                    </svg>
                                </div>
                                <div className="legend">
                                    {data.donutChartData.map((item) => (
                                        <div key={item.label} className="legend-item">
                                            <div className="tag">
                                                <span
                                                    className="dot"
                                                    style={{ backgroundColor: item.color }}
                                                ></span>
                                                <span className="label">{item.label}</span>
                                            </div>
                                            <span className="value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-chart-container link-count">
                    <h2 className="chart-title">Traffic by links</h2>
                    <div className="chart-content">
                        <div className="y-axis-labels">
                            <div className="y-axis-label">3K</div>
                            <div className="y-axis-label">2K</div>
                            <div className="y-axis-label">1K</div>
                            <div className="y-axis-label">0</div>
                        </div>
                        <div className="chart-area">
                            {/* <div className="horizontal-line"></div> */}
                            <div className="bars-container">
                                {data.barChartData.map((item, index) => (
                                    <div key={index} className="bar-column">
                                        <div
                                            className="bar-wrapper"
                                            onMouseEnter={() => setHoveredBarIndex(index)}
                                            onMouseLeave={() => setHoveredBarIndex(null)}
                                        >
                                            {hoveredBarIndex === index && (
                                                <div className="tooltip">
                                                    {item.value.toLocaleString()}
                                                </div>
                                            )}
                                            <div
                                                className="bar"
                                                style={{
                                                    height: `${(item.value / Math.max(...data.barChartData.map(d => d.value))) * 216}px`,
                                                    backgroundColor: item.color
                                                }}
                                            />
                                        </div>
                                        <div className="x-axis-label">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics;