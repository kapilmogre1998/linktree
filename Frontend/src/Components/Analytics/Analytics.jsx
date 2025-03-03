import { useState } from 'react';
import './Analytics.scss';
import Sidebar from '../Common/Sidebar/Sidebar';
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const Analytics = () => {
    const userName = JSON.parse(localStorage.getItem('user_data'))?.username || {};
    const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

    const lineChartData = [1000, 800, 900, 1500, 2800, 2200, 2400];

    const barChartData = [
        { label: 'Linux', value: 2000, color: '#92ffc6' },
        { label: 'Mac', value: 5000, color: '#9bebc1' },
        { label: 'iOS', value: 3000, color: '#165534' },
        { label: 'Windows', value: 6000, color: '#3ee58f' },
        { label: 'Android', value: 1000, color: '#a1d4ba' },
        { label: 'Other', value: 4000, color: '#21af66' }
    ];

    const donutChartData = [
        { label: 'Youtube', value: 520, color: '#28a263', percentage: '52.1%' },
        { label: 'Facebook', value: 220, color: '#7FD0A1', percentage: '22.8%' },
        { label: 'Instagram', value: 130, color: '#B3E5C7', percentage: '13.9%' },
        { label: 'Other', value: 110, color: '#D9F2E4', percentage: '11.2%' }
    ];


    // Line chart path generator
    const getLinePath = (data) => {
        const height = 200;
        const width = 989;
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min;

        return data.map((value, index) => {
            const x = (index * (width / (data.length - 1)));
            const y = height - ((value - min) / range * height);
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
    const total = donutChartData.reduce((acc, item) => acc + item.value, 0);
    let currentAngle = 0;
    const donutSegments = donutChartData.map((item) => {
        const percentage = (item.value / total) * 100;
        const path = createDonutSegment(percentage, currentAngle);
        const segment = { path, color: item.color };
        currentAngle += (percentage / 100) * 360;
        return segment;
    });

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
                                    <div className="number">2,318</div>
                                    {/* <div className="trend">
                                        <span>+14%</span>
                                        <div className="trend-arrow up"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>Click on Shop</h3>
                                <div className="stats">
                                    <div className="number">7,265</div>
                                    {/* <div className="trend">
                                        <span>+24%</span>
                                        <div className="trend-arrow up"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>CTA</h3>
                                <div className="stats">
                                    <div className="number">156</div>
                                    {/* <div className="trend">
                                        <span>+42%</span>
                                        <div className="trend-arrow up"></div>
                                    </div> */}
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
                        <div className="chart-area">
                            <svg width="100%" height="100%" viewBox="0 0 989 307" className="line-chart">
                                {/* Horizontal grid lines */}
                                {/* <line x1="0" y1="0" x2="989" y2="0" className="grid-line" /> */}
                                {/* <line x1="0" y1="76.75" x2="989" y2="76.75" className="grid-line" /> */}
                                {/* <line x1="0" y1="153.5" x2="989" y2="153.5" className="grid-line" /> */}
                                {/* <line x1="0" y1="230.25" x2="989" y2="230.25" className="grid-line" /> */}

                                {/* Main chart line */}
                                <path
                                    d={getLinePath(lineChartData)}
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

                    {/* Bottom Charts */}
                    <div className="bottom-charts">
                        {/* Bar Chart */}
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
                                    {/* <div className="horizontal-line"></div> */}
                                    <div className="bars-container">
                                        {barChartData.map((item, index) => (
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
                                                            height: `${(item.value / Math.max(...barChartData.map(d => d.value))) * 216}px`,
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
                                    {donutChartData.map((item) => (
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
                                {barChartData.map((item, index) => (
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
                                                    height: `${(item.value / Math.max(...barChartData.map(d => d.value))) * 216}px`,
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