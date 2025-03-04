import React from 'react'
import { useNavigate } from 'react-router-dom';
import LinkIcon from '../../../assets/link-icon.svg';
import AppearanceIcon from '../../../assets/apperance.svg';
import SettingsIcon from '../../../assets/setting-icon.svg';
import AnalyticsIcon from '../../../assets/analytics.svg';
import SparkIcon from '../../../assets/spark-icon.svg';
import { MdAddAPhoto } from "react-icons/md";
import { RxShare2 } from "react-icons/rx";

import './Sidebar.scss'

const navItems = [
    { id: 1, label: 'Links', icon: <LinkIcon />, route: '/add-link' },
    { id: 2, label: 'Appearance', icon: <AppearanceIcon />, route: '/appearance' },
    { id: 3, label: 'Analytics', icon: <AnalyticsIcon />, route: '/analytics' },
    { id: 4, label: 'Settings', icon: <SettingsIcon />, route: '/settings' }
];

const navIcons = [LinkIcon, AppearanceIcon, AnalyticsIcon, SettingsIcon];

const Sidebar = ({ activeIndex = 1, data }) => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user_data'))?.username || '';

    return (
        <div className="sidebar-container">
            <div className="sidebar-content" >
                <div className="logo-section">
                    <img src={SparkIcon} alt="Spark Logo" className="logo-img" />
                    <h1 className="logo-text">Spark</h1>
                </div>

                <nav className="nav-section">
                    {navItems.map(({ id, label, icon, route }) => (
                        <div key={id} className={`nav-item ${id == activeIndex ? 'active' : ''}`} onClick={() => navigate(route)} >
                            <img src={navIcons[id - 1]} alt="YouTube" />
                            <span className="nav-label">{label}</span>
                        </div>
                    ))}
                </nav>
            </div>
            <div className="profile-section">
                <div className="profile-info">
                    {
                        data?.profile?.pic ? 
                        <img src={data.profile.pic} alt="Profile" className="sidebar-profile-img" /> :
                        <div className='sidebar-profile-image no-img' ><MdAddAPhoto style={{ width: '24px', height: '24px' }} /></div>
                    }
                    <span className="profile-name">{userName}</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
