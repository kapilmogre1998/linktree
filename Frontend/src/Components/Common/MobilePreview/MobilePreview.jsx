import React, { act, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import SignalIcon from '../../../assets/signal.svg'
import AmazonIcon from '../../../assets/amazon.svg'
import FlipkartIcon from '../../../assets/flipkart.svg'
import youtubeIcon from '../../../assets/youtube.svg';
import instagramIcon from '../../../assets/instagram.svg';
import facebookIcon from '../../../assets/facebook.svg';
import twitterIcon from '../../../assets/twitter.svg';
import { IoShareOutline } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import hardCurveBtm from '../../../assets/hard-curve-bottom.svg';
import hardCurvetop from '../../../assets/hard-curve-top.svg';

import './MobilePreview.scss'
import Icons from '../../Icons/Icons';

const MobilePreview = (props) => {
    const { data: { profile, bannerBgClr, links, shops, buttons, theme, layout, fonts }, setMobileScreenPreview, apiCall = false, apiCallback = () => { }, shareProfile = false } = props;
    console.log("🚀 ~ MobilePreview ~ bannerBgClr:", bannerBgClr)
    const [activeTab, setActiveTab] = useState('link')
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user_data'));

    const LINKICON = [instagramIcon, youtubeIcon, twitterIcon, facebookIcon];
    const SHOPICON = [FlipkartIcon, AmazonIcon];

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(`${window.location.origin}/share-profile/${userData?.id}`);
            toast.success('Copied to clipboard!', {
                theme: 'colored'
            });
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const applyStyles = (selectedOption) => {
        switch (selectedOption) {
            case 'Fill':
                return {
                    background: buttons.color,
                    borderRadius: buttons.type === 'teritary' ? '30px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    flexDirection: layout == 'Grid' || layout == 'Carousel' ? 'Column' : 'Row',
                    // flex: '1 0 0'
                };
            case 'Outline':
                return {
                    border: `2px solid ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '30px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    flexDirection: layout == 'Grid' || layout == 'Carousel' ? 'Column' : 'Row',
                    // flex: '1 0 0'
                };
            case 'HardShadow':
                return {
                    // background: buttons.color,
                    boxShadow: `4px 4px 4px ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '30px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    padding: '10px',
                    flexDirection: layout == 'Grid' || layout == 'Carousel' ? 'Column' : 'Row',
                    // flex: '1 0 0'
                };
            case 'SoftShadow':
                return {
                    // background: buttons.color,
                    boxShadow: `2px 2px 4px ${buttons.color}`,
                    borderRadius: buttons.type === 'teritary' ? '30px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    padding: '10px',
                    flexDirection: layout == 'Grid' || layout == 'Carousel' ? 'Column' : 'Row',
                    // flex: '1 0 0'
                };
            case 'Special':
                return {
                    background: buttons.color,
                    borderRadius: buttons.type === 'teritary' ? '30px' : buttons.type == 'secondary' ? '8px' : '0px',
                    color: buttons.fontColor,
                    flexDirection: layout == 'Grid' || layout == 'Carousel' ? 'Column' : 'Row',
                    // flex: '1 0 0'
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
                    gridTemplateRows: '100px',
                    gap: '10px',
                };
            case 'Stack':
                return {
                    display: 'flex',
                    flexDirection: 'column'
                }
            case 'Carousel':
                return {
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'auto',
                    // height: '200px'
                }
        }
    }

    const handleClickOnLink = () => {
        setActiveTab('link');
        if (apiCall) {
            apiCallback({ linkCount: 1 });
        }
    }

    const handleClickOnShop = () => {
        setActiveTab('shop')
        if (apiCall) {
            apiCallback({ shopCount: 1 });
        }
    }

    const handleClickOnGetConnected = () => {
        navigate('/');
        if (apiCall) {
            apiCallback({ getConnectCount: 1 });
        }
    }

    const handleClickOnRedirectionLink = (obj, url) => {
        window.open(url, '_blank');
        if (apiCall) {
            apiCallback({ sitesCount: obj })
        }
    }

    return (
        <div className="mobile-preview-container" >
            <div className="mobile-frame" style={{ fontFamily: buttons?.fonts?.fontType, background: theme.background }} >
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
                        <div className="mobile-username" style={{ color: fonts.color }}  >{profile?.title}</div>
                        <div className='share-icon' >
                            <IoShareOutline onClick={handleCopyLink} />
                        </div>
                    </div>
                    <div className="button-group" >
                        <div className="toggle-button" >
                            <div className={`btn-container ${activeTab == 'link' ? 'active' : ''}`} onClick={handleClickOnLink} style={{ color: fonts.color }} >link</div>
                            <div className={`btn-container ${activeTab == 'shop' ? 'active' : ''}`} onClick={handleClickOnShop} style={{ color: fonts.color }}>Shop</div>
                        </div>
                    </div>
                    <div className="links-section" style={buttonStyles(layout)}>
                        {
                            activeTab === 'link' ?
                                links?.map(({ data: { title, url, icon, index, type }, _id }, id) => (
                                    <div key={id} className={`link-item ${buttons.type == 'teritary' && buttons.option == 'Fill' ? 'border-outline' : ''}`} onClick={() => handleClickOnRedirectionLink({ title, id: _id, type }, url)} style={{ ...applyStyles(buttons.option), width: layout == 'Stack' ? '100%' : '120px', ...(buttons.type == 'teritary' && buttons.option == 'Fill' && { '--border-color': buttons.color }) }} >
                                        <div className="link-thumbnail" style={{ width: layout == 'Carousel' ? '60px' : '42px', height: layout == 'Carousel' ? '60px' : '42px' }} >
                                            <img className='logo' src={LINKICON[icon]} alt="YouTube" />
                                        </div>
                                        {
                                            buttons.type == 'primary' && buttons.option == 'Special' ?
                                                <>
                                                    <Icons className='special-icon top' color={buttons.color} index='11' />
                                                    <Icons className='special-icon bottom' color={buttons.color} index='12' />
                                                </> :
                                            buttons.type == 'secondary' && buttons.option == 'Special' ?
                                                <>
                                                    <Icons className='special-icon top' color={buttons.color} index='21' />
                                                    <Icons className='special-icon bottom' color={buttons.color} index='22' />
                                                </> : null
                                        }
                                        <span style={{ color: buttons.fontColor }} >{title}</span>
                                    </div>)) :
                                shops?.map(({ data: { title, url, icon, type }, _id }, id) => (
                                    <div key={id} className={`link-item ${buttons.type == 'teritary' && buttons.option == 'Fill' ? 'border-outline' : ''}`} onClick={() => handleClickOnRedirectionLink({ title, id: _id, type }, url)} style={{ ...applyStyles(buttons.option), width: layout == 'Stack' ? '100%' : '120px', ...(buttons.type == 'teritary' && buttons.option == 'Fill' && { '--border-color': buttons.color }) }} >
                                        <div className="link-thumbnail">
                                            <img className='logo' src={SHOPICON[icon]} alt="YouTube" />
                                        </div>
                                        <span style={{ color: buttons.fontColor }} >{title}</span>
                                    </div>))
                        }
                    </div>
                </div>

                <div className='mobile-preview-footer-container' >
                    <button className="connect-button" style={{ color: fonts.color }} onClick={handleClickOnGetConnected} >Get Connected</button>
                    <div className="footer">
                        <div className="spark-logo">
                            <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group.png" alt="Spark Logo" />
                            <span className="spark-text" >SPARK</span>
                            <span className="tm">TM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`cross-container ${shareProfile ? 'disable' : ''}`} >
                <div className='cross' onClick={() => setMobileScreenPreview(false)} >x</div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default MobilePreview
