import React, { act, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";

import './MobilePreview.scss'
import { useNavigate } from 'react-router-dom';

const MobilePreview = (props) => {
    const { data: { profile, bannerBgClr, links, shops, buttons, theme, layout } } = props;
    const [activeTab, setActiveTab] = useState('link')
    const navigate = useNavigate();

    const applyStyles = (selectedOption) => {
        switch (selectedOption) {
            case 'Fill':
                return {
                    background: buttons.color,
                    borderRadius: buttons.type === 'teritary' ? '18px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    flexDirection: layout == 'Grid' ? 'Column' : 'Row'
                };
            case 'Outline':
                return {
                    border: `2px solid ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '18px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    flexDirection: layout == 'Grid' ? 'Column' : 'Row'
                };
            case 'HardShadow':
                return {
                    boxShadow: `4px 4px 4px ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '18px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    padding: '10px',
                    flexDirection: layout == 'Grid' ? 'Column' : 'Row'
                };
            case 'SoftShadow':
                return {
                    boxShadow: `2px 2px 4px ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '18px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    padding: '10px',
                    flexDirection: layout == 'Grid' ? 'Column' : 'Row'
                };
            default:
                return {};
        }
    }

    const buttonStyles = (type) => {
        switch (type) {
            case 'Grid':
                return {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px'
                };
            case 'Stack':
                return {
                    display: 'flex',
                    flexDirection: 'column'
                }
        }
    }

    return (
        <div className="mobile-preview-container" >
            <div className="mobile-frame" style={{ fontFamily: buttons?.fonts?.fontType, background: theme.background}} >
                <div className='mobile-profile-container' >
                    <div className="mobile-profile-section" style={{ background: bannerBgClr }} >
                        <div className="mobile-profile-image">
                            {
                                profile?.pic ?
                                    <img src={profile?.pic} alt="Profile" /> :
                                    <div className='no-preview-img' >
                                        <MdAddAPhoto style={{ width: '50px', height: '50px' }} />
                                    </div>
                            }
                        </div>
                        <div className="mobile-username">{profile?.title}</div>
                    </div>
                    <div className="button-group">
                        <div className="toggle-button">
                            <div className={`btn-container ${activeTab == 'link' ? 'active' : ''}`} onClick={() => setActiveTab('link')} >link</div>
                            <div className={`btn-container ${activeTab == 'shop' ? 'active' : ''}`} onClick={() => setActiveTab('shop')} >Shop</div>
                        </div>
                    </div>
                    <div className="links-section"  style={buttonStyles(layout)}>
                        {
                            activeTab === 'link' ?
                                links.map(({ title, url, icon }, index) => (
                                    <div key={index} className="link-item" style={applyStyles(buttons.option)} >
                                        <div className="link-thumbnail">
                                            <img src={icon} alt="YouTube" />
                                        </div>
                                        <span>{title}</span>
                                    </div>)) :
                                shops.map(({ title, url, icon }, index) => (
                                    <div key={index} className="link-item" style={applyStyles(buttons.option)} >
                                        <div className="link-thumbnail">
                                            <img src={icon} alt="YouTube" />
                                        </div>
                                        <span>{title}</span>
                                    </div>))
                        }
                    </div>
                </div>

                <div className='mobile-preview-footer-container' >
                    <button className="connect-button" onClick={() => navigate('/')} >Get Connected</button>
                    <div className="footer">
                        <div className="spark-logo">
                            <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group.png" alt="Spark Logo" />
                            <span className="spark-text">SPARK</span>
                            <span className="tm">TM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobilePreview
