import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import Sidebar from '../Common/Sidebar/Sidebar';
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { Line } from '@ant-design/plots';
import './Analytics.scss'
import BarChart from './BarChar';
import PieChart from './PieChart';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const Analytics = () => {
    const { userName = '' } = JSON.parse(localStorage.getItem('user_data')) || {};

    const data = [
        { month: 'Jan', value: 0 },
        { month: 'Feb', value: 0 },
        { month: 'Mar', value: 0 },
        { month: 'Apr', value: 0 },
        { month: 'May', value: 0 },
        { month: 'Jun', value: 0 },
        { month: 'Jul', value: 0 }
    ];
    const config = {
        data,
        xField: 'month',
        yField: 'value',
        point: {
            shapeField: 'circle',
            sizeField: 3,
        },
        interaction: {
            tooltip: {
                marker: false,
            },
        },
        style: {
            lineWidth: 2,
            fill: '#000'
        },
        seriesStyle: {

            stroke: '#ff0000', // Line color

            lineWidth: 2, // Line thickness

        }
    };
    return (
        <div className='analytics-container' >
            <Sidebar activeIndex={'3'} />
            <div className='dashboard-container' >
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

                <div style={{ background: 'white', borderRadius: '30px' }} >
                    <Line {...config} />
                </div>
                <div style={{ display: 'flex', borderRadius: '30px', gap: '1rem' }}  >
                    <div style={{ width: '50%', background: 'white', borderRadius: '40px', padding: '20px' }} >
                        <h3>Traffic By Device</h3>
                        <BarChart />
                    </div>
                    <div style={{ width: '50%', background: 'white', borderRadius: '40px', padding: '20px' }} >
                        <h3>Sites</h3>
                        <PieChart />
                    </div>
                </div>
                <div>
                    <div style={{ width: '60%', background: 'white', borderRadius: '40px', padding: '20px' }} >
                        <h3>Traffic By Links</h3>
                        <BarChart />
                    </div>
                </div>
                {/* <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],  // Your data for the series
                        },
                    ]}
                    width={500}
                    height={300}
                    // yAxis={{
                    //     tickFormatter: [0,1,2],  // Format the y-axis labels with the custom function
                    // }}
                /> */}
                {/* <LineChart
                    xAxis={{ data: months }}  // Show months on the x-axis
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],  // Your data for the series
                        },
                    ]}
                    width={500}
                    height={300}
                    yAxis={{
                        tickFormatter: ['0', '1k', '2k', '3k'],  // Format the y-axis labels with the custom function
                    }}
                /> */}
            </div>
        </div>
    )
}

export default Analytics
