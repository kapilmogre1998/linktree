import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Sidebar.scss'

const navItems = [
    { id: 1, label: 'Links', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame.png', route: '/add-link' },
    { id: 2, label: 'Appearance', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/vector.png', route: '/appearance' },
    { id: 3, label: 'Analytics', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/combined.png' },
    { id: 4, label: 'Settings', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/combined-2.png' }
];

const Sidebar = ({ activeIndex = 1 }) => {
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            <div className="sidebar-content" >
                <div className="logo-section">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-1.png" alt="Spark Logo" className="logo-img" />
                    <h1 className="logo-text">Spark</h1>
                </div>

                <nav className="nav-section">
                    {navItems.map(item => (
                        <div key={item.id} className={`nav-item ${item.id == activeIndex ? 'active' : ''}`} onClick={() => navigate(item.route)} >
                            <img src={item.icon} alt={item.label} className="nav-icon" />
                            <span className="nav-label">{item.label}</span>
                        </div>
                    ))}
                </nav>
            </div>
            <div className="profile-section">
                <div className="profile-info">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-2.png" alt="Profile" className="profile-img" />
                    <span className="profile-name">Jenny Wilson</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
