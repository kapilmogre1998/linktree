import React, { useEffect, useReducer, useRef, useState } from 'react'
import Sidebar from '../Common/Sidebar/Sidebar';
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { Line } from '@ant-design/plots';
import { MdAddAPhoto } from "react-icons/md";
import './Analytics.scss'
import BarChart from './BarChar';
import PieChart from './PieChart';
import { clickTrackingAPI } from './api';
import TrafficByLinkBarChart from './TrafficBarChar';
import { getLinkTreeAPI } from '../AddLinks/api';
import { setMobilePreview } from '../../action';
import { mobilePreviewInitialState, mobilePreviewReducer } from '../../reducer';
import Loader from '../Common/Loader/Loader';
import LinkIcon from '../../assets/link-icon.svg';
import AppearanceIcon from '../../assets/apperance.svg';
import SettingsIcon from '../../assets/setting-icon.svg';
import AnalyticsIcon from '../../assets/analytics.svg';
import SparkIcon from '../../assets/spark-icon.svg';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import MobileHeader from '../Common/MobileHeader/MobileHeader';

const NAV_ITEMS = [
    { id: 1, label: 'Links', icon: <LinkIcon />, route: '/add-link' },
    { id: 2, label: 'Appearance', icon: <AppearanceIcon />, route: '/appearance' },
    { id: 3, label: 'Analytics', icon: <AnalyticsIcon />, route: '/analytics' },
    { id: 4, label: 'Settings', icon: <SettingsIcon />, route: '/settings' }
];

const navIcons = [LinkIcon, AppearanceIcon, AnalyticsIcon, SettingsIcon];


const Analytics = () => {
    const [state, dispatch] = useReducer(mobilePreviewReducer, mobilePreviewInitialState);
    const { username = '', id = '' } = JSON.parse(localStorage.getItem('user_data')) || {};
    const [isLoader, setIsLoader] = useState(false);
    const navigate = useNavigate()
    const [data, setData] = useState({
        profile: {
            pic: '',
            title: '',
            bio: ''
        },
        links: [],
        shops: [],
        bannerBgClr: "#342b26",
        layout: 'Stack',
        buttons: {
            option: 'Fill',
            color: '#888888',
            fontColor: '#888888',
            index: 2,
            type: 'Teritary'
        },
        fonts: {
            fontType: 'Sans-serif',
            color: '#FFFFFF'
        },
        theme: {
            name: 'Air_Snow',
            background: 'white',
        }
    })
    const [clickData, setClickData] = useState({
        linkCount: 0,
        shopCount: 0,
        ctaCount: 0,
        deviceCount: [],
        sitesCount: [],
        socialMediaCount: []
    })

    const ctaData = [
        { color: '#21AF66', month: 'Jan', value: 0 },
        { color: '#21AF66', month: 'Feb', value: 0 },
        { color: '#21AF66', month: 'Mar', value: clickData?.linkCount + clickData?.shopCount + clickData?.ctaCount },
        { color: '#21AF66', month: 'Apr', value: 0 },
        { color: '#21AF66', month: 'May', value: 0 },
        { color: '#21AF66', month: 'Jun', value: 0 },
        { color: '#21AF66', month: 'Jul', value: 0 }
    ];
    const config = {
        data: ctaData,
        xField: 'month',
        yField: 'value',
        style: { stroke: '#21AF66' },
    };

    const fetchClickCount = async (id) => {
        try {
            setIsLoader(true)
            const res = await clickTrackingAPI(id)
            if (res.data?.sts == 1) {
                const { monthlyStats, deviceCount, sitesCount, socialMediaCount } = res.data?.data;
                setClickData(prev => ({
                    ...prev,
                    linkCount: monthlyStats.linkCount,
                    shopCount: monthlyStats.shopCount,
                    ctaCount: monthlyStats.getConnectCount,
                    deviceCount,
                    sitesCount,
                    socialMediaCount
                }))
            }
            console.log("🚀 ~ fetchClickCount ~ res:", res)
        } catch (error) {
            console.log("🚀 ~ fetchClickCount ~ error:", error)
        } finally {
            setIsLoader(false)
        }
    }

    const fetchData = async (userId) => {
        try {
            setIsLoader(true)
            const res = await getLinkTreeAPI(userId);
            if (res?.data?.sts == 1 && res.data?.data) {
                const modifiedData = {
                    ...res.data.data,
                    id: res.data.data._id
                }

                delete modifiedData._id;
                delete modifiedData.__v;
                delete modifiedData.userId;

                dispatch(setMobilePreview(modifiedData));
                setData(modifiedData);
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg);
            }
        } finally{
            setIsLoader(false)
        }
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user_data'))?.id;
        if (userId) {
            fetchData(userId);
        }
    }, [])

    useEffect(() => {
        if (id) {
            fetchClickCount(id)
        }
    }, [])

    return (
        <div className='analytics-container' >
            <Sidebar activeIndex={'3'} data={data} />
            <div className='dashboard-container' >
                <MobileHeader data={data}/>

                <header className="header">
                    <div className="header-content">
                        <h1 className="greeting"><span className='text-bold' >Hi</span>, {username}!</h1>
                        <p className="notification">Congratulations. You got a great response today.</p>
                    </div>
                </header>

                <div className='calendar-container' >
                    <div className='title' >Overview</div>
                    <div className="date-range-selector" onClick={() => { }}>
                        <div className="date-range-content">
                            <CiCalendar style={{ width: '20px', height: '20px' }} />
                            <span className="date-text">{'Mar 1st to Mar 30th'}</span>
                            <FaAngleDown style={{ width: '14px', height: '14px' }} />
                        </div>
                    </div>
                </div>

                <div className="header-cards">
                    <div className="header-cards-container">
                        <div className="card green">
                            <div className="card-content">
                                <h3>Clicks on Links</h3>
                                <div className="stats">
                                    <div className="number">{clickData?.linkCount}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>Click on Shop</h3>
                                <div className="stats">
                                    <div className="number">{clickData?.shopCount}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card light">
                            <div className="card-content">
                                <h3>CTA</h3>
                                <div className="stats">
                                    <div className="number">{clickData?.ctaCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='line-chart-container' >
                    <Line {...config} />
                </div>
                <div className='traffic-sites-container'  >
                    <div className='traffic-sites' >
                        <h3 style={{ padding: '20px' }} >Traffic By Device</h3>
                        <BarChart deviceCount={clickData.deviceCount} />
                    </div>
                    <div className='traffic-sites' >
                        <h3 style={{ padding: '20px' }} >Sites</h3>
                        <PieChart data={clickData.socialMediaCount} />
                    </div>
                </div>
                <div className='traffic-link-container' >
                    <h3 style={{ padding: '20px' }} >Traffic By Links</h3>
                    <TrafficByLinkBarChart data={clickData?.sitesCount?.slice(0, 6) || []} />
                </div>
            </div>

            <div className='mobile-nav-bar-container' >
                {
                    NAV_ITEMS.map(({ label, route, id }) => (<div key={id} className={`mobile-nav-icon ${label == 'Links' ? 'active' : ''}`} onClick={() => navigate(route)} >
                        <img src={navIcons[id - 1]} alt="nav" />
                        <div>{label}</div>
                    </div>))
                }
            </div>

            {isLoader && <Loader />}
        </div>
    )
}

export default Analytics
