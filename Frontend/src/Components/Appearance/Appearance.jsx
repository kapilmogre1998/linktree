import React, { useReducer, useState, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import hardCurveBtm from '../../assets/hard-curve-bottom.svg';
import hardCurvetop from '../../assets/hard-curve-top.svg';
import waveCurvetop from '../../assets/wave-curve-top.svg';
import waveCurveBtm from '../../assets/wave-curve-btm.svg';
import Sidebar from '../Common/Sidebar/Sidebar';
import MobilePreview from '../Common/MobilePreview/MobilePreview';
import profilePic from '../../assets/dummy-pic.png';
import { getLinkTreeAPI, createLinkTreeAPI, updateLinkTreeAPI } from '../AddLinks/api';
import { setMobilePreview } from '../../action';
import { MdAddAPhoto } from "react-icons/md";
import { mobilePreviewInitialState, mobilePreviewReducer } from '../../reducer';
import SparkIcon from '../../assets/spark-icon.svg';
import { IoEyeOutline } from "react-icons/io5";
import LinkIcon from '../../assets/link-icon.svg';
import AppearanceIcon from '../../assets/apperance.svg';
import SettingsIcon from '../../assets/setting-icon.svg';
import AnalyticsIcon from '../../assets/analytics.svg';

import './Appearance.scss'
import Loader from '../Common/Loader/Loader';
import MobileHeader from '../Common/MobileHeader/MobileHeader';


const NAV_ITEMS = [
    { id: 1, label: 'Links', icon: <LinkIcon />, route: '/add-link' },
    { id: 2, label: 'Appearance', icon: <AppearanceIcon />, route: '/appearance' },
    { id: 3, label: 'Analytics', icon: <AnalyticsIcon />, route: '/analytics' },
    { id: 4, label: 'Settings', icon: <SettingsIcon />, route: '/settings' }
];

const navIcons = [LinkIcon, AppearanceIcon, AnalyticsIcon, SettingsIcon];


const defaultCards = [
    { label: 'Air Snow', background: 'white', stripe: '#d9d9d9' },
    { label: 'Air Grey', background: '#ebeef1', stripe: 'white' },
    { label: 'Air Smoke', background: '#2a3235', stripe: 'white' },
    { label: 'Air Black', background: 'black', stripe: '#1c1c1c' },
    { label: 'Mineral Blue', background: '#e0f6ff', stripe: '#e0f6ff', borderClr: '#CEE3EA' },
    { label: 'Mineral Green', background: '#dff9ee', stripe: '#dff9ee', borderClr: '#CEE3EA' },
    { label: 'Mineral Orange', background: '#FEEEE2', stripe: '#FEEEE2', borderClr: '#CEE3EA' },
    { label: 'Mineral Yellow', background: '#FFF8E0', stripe: '#FFF8E0', borderClr: '#CEE3EA' },
];

const Appearance = () => {
    const [state, dispatch] = useReducer(mobilePreviewReducer, mobilePreviewInitialState);
    const { mobilePreviewData } = state;
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');
    const [selectFont, setSelectFont] = useState('Sans-serif');
    const [fontColor, setFontColor] = useState('#888888');
    const [buttonColor, setButtonColor] = useState('#FFFFFF');
    const [mobileScreenPreview, setMobileScreenPreview] = useState(false);
    const [isLoader, setIsLoader] = useState(false);

    // const [buttonFontColor, setButtonFontColor] = useState('#888888');
    // const [activeLayout, setActiveLayout] = useState(0);
    // const [option, setButtonType] = useState({ type: 'Fill', index: 2 });
    const [theme, setTheme] = useState('Air_Snow');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
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


    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleFontColorChange = (e) => {
        setFontColor(e.target.value);
    };

    const Card = ({ color, label, background, stripe, borderClr = '' }) => (
        <div className="card-container">
            <div className={`card ${data.theme.name.split('_').join(' ') == label ? 'active' : ''}`} style={{ backgroundColor: background }} onClick={() => setData(prev => ({ ...prev, theme: { ...prev.theme, name: label.split(' ').join('_'), background: background } }))} >
                <div className="stripes" style={{ backgroundColor: 'transparent' }}>
                    <div className="stripe" style={{ background: stripe, border: borderClr ? `1px solid ${borderClr}` : 'none' }} ></div>
                    <div className="stripe" style={{ background: stripe, border: borderClr ? `1px solid ${borderClr}` : 'none' }} ></div>
                    <div className="stripe" style={{ background: stripe, border: borderClr ? `1px solid ${borderClr}` : 'none' }} ></div>
                </div>
            </div>
            <span className="label">{label}</span>
        </div>
    );

    const layouts = [
        {
            type: 'Stack',
            icon: 'https://dashboard.codeparrot.ai/api/image/Z8CLKsjn7nbGWzkG/group-11.png',
        },
        {
            type: 'Grid',
            icon: 'https://dashboard.codeparrot.ai/api/image/Z8CLKsjn7nbGWzkG/group-11-2.png',
        },
        {
            type: 'Carousel',
            icon: 'https://dashboard.codeparrot.ai/api/image/Z8CLKsjn7nbGWzkG/group-11-3.png',
        }
    ];


    const updateData = async (payload, id) => {
        try {
            setIsLoader(true)
            const res = await updateLinkTreeAPI(payload, id);
            if (res.data.sts == 1) {
                console.log('Data saved successfully');
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg);
            }
        } finally {
            setIsLoader(false)
        }
    }


    const submitData = async (payload) => {
        try {
            setIsLoader(true)
            const res = await createLinkTreeAPI(payload);
            if (res.data.sts == 1) {
                console.log('Data saved successfully');
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg);
            }
        } finally {
            setIsLoader(false)
        }
    }

    const fetchData = async (userId) => {
        try {
            setIsLoader(true)
            const res = await getLinkTreeAPI(userId);
            if (res?.data?.sts == 1 && res.data?.data) {
                console.log(res)
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
        } finally {
            setIsLoader(false)
        }
    }

    const handleSave = () => {
        const userId = JSON.parse(localStorage.getItem('user_data'))?.id;
        const updateId = mobilePreviewData?.id;

        if (updateId) {
            updateData({ ...data, userId }, updateId);
        } else {
            submitData({ ...data, userId });
        }
    }

    useLayoutEffect(() => {
        if (!token) {
            window.location.href = '/login';
        }
    }, [])

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user_data'))?.id;
        if (userId) {
            fetchData(userId);
        }
    }, [])


    return (
        <>
            {!mobileScreenPreview ?
                <div className='appearance-container' >
                    <Sidebar activeIndex='2' {...{ data }} />
                    <div className='header-content-container' >
                        <header className="header">
                            <div className="header-content">
                                <h1 className="greeting"><span className='text-bold' >Hi</span>, Jenny Wilson!</h1>
                                <p className="notification">Congratulations. You got a great response today.</p>
                            </div>
                        </header>

                        <MobileHeader data={data} />

                        <div className='mobile-preivew-content-container' >
                            <MobilePreview data={data} />
                            <div className='appearance-content' >
                                <div className='appearance-content-sections' >
                                    <div className='text-design-option' >
                                        <h3>Layout</h3>
                                        <div className="layout-options">
                                            <div className="layout-options__container">
                                                <div className="layout-stack">
                                                    <div className={`layout-option__icon-wrapper ${data.layout === 'Stack' ? 'active' : ''}`} onClick={() => setData({ ...data, layout: 'Stack' })}>
                                                        <div style={{ display: 'flex', gap: '0.25rem', flexDirection: 'column' }}>
                                                            {Array.from({ length: 3 }).map((item, index) => (
                                                                <div key={index} style={{ background: 'black', height: '8px', width: '40px', borderRadius: '2px' }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>Stack</div>
                                                </div>

                                                <div className="layout-stack">
                                                    <div className={`layout-option__icon-wrapper ${data.layout === 'Grid' ? 'active' : ''}`} onClick={() => setData({ ...data, layout: 'Grid' })}>
                                                        <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '20px 20px', gridTemplateRows: '20px 20px' }}>
                                                            {Array.from({ length: 4 }).map((item, index) => (
                                                                <div key={index} style={{ background: 'black', borderRadius: '2px' }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>Grid</div>
                                                </div>

                                                <div className="layout-stack">
                                                    <div className={`layout-option__icon-wrapper ${data.layout === 'Carousel' ? 'active' : ''}`} onClick={() => setData({ ...data, layout: 'Carousel' })}>
                                                        <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '30px 15px', gridTemplateRows: '40px' }}>
                                                            {Array.from({ length: 4 }).map((item, index) => (
                                                                <div key={index} style={{ background: 'black', borderRadius: '2px' }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>Carousel</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-design-option' >
                                        <h3>Buttons</h3>
                                        <div className="layout-container">
                                            <div className="button-section">
                                                <div className="fill-buttons-container">
                                                    <div className="fill-label">Fill</div>
                                                    <div className="buttons-row">
                                                        {[{ className: 'primary', index: 0 }, { className: 'secondary', index: 1 }, { className: 'teritary', index: 2 },].map(({ className, index }) => (
                                                            <button
                                                                key={index}
                                                                className={`fill-button ${className} ${data?.buttons?.option === 'Fill' && data?.buttons?.index === index ? 'clr-opacity-8' : ''}`}
                                                                onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'Fill', index, type: className } }))}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="outline-buttons-container">
                                                    <h3 className="outline-title">Outline</h3>
                                                    <div className="buttons-row">
                                                        {[{ className: 'primary', index: 0 }, { className: 'secondary', index: 1 }, { className: 'teritary', index: 2 },].map(({ className, index }) => (
                                                            <button
                                                                key={index}
                                                                className={`outline-button  ${className} ${data?.buttons?.option === 'Outline' && data?.buttons?.index === index ? 'clr-opacity-8' : ''}`}
                                                                onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'Outline', index, type: className } }))}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="hard-shadow-container">
                                                    <h2 className="hard-shadow-title">Hard shadow</h2>
                                                    <div className="hard-shadow-buttons">
                                                        {[{ className: 'primary', index: 0 }, { className: 'secondary', index: 1 }, { className: 'teritary', index: 2 },].map(({ className, index }) => (
                                                            <button
                                                                key={index}
                                                                className={`hard-shadow-btn  ${className} ${data?.buttons?.option === 'HardShadow' && data?.buttons?.index === index ? 'clr-opacity-8' : ''}`}
                                                                onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'HardShadow', index, type: className } }))}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="soft-shadow-container">
                                                    <h2 className="soft-shadow-title">Soft shadow</h2>
                                                    <div className="soft-shadow-buttons">
                                                        {[{ className: 'primary', index: 0 }, { className: 'secondary', index: 1 }, { className: 'teritary', index: 2 },].map(({ className, index }) => (
                                                            <button
                                                                key={index}
                                                                className={`soft-shadow-button  ${className} ${data?.buttons?.option === 'SoftShadow' && data?.buttons?.index === index ? 'clr-opacity-8' : ''}`}
                                                                onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'SoftShadow', index, type: className } }))}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="special-buttons">
                                                    <div className="special-title">Special</div>
                                                    <div className="button-container">
                                                        <div className="button-row">
                                                            <div className="special-button wave-top" onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'Special', index: 1, type: 'primary' } }))}>
                                                                <img src={hardCurvetop} className='hard-curve-top' alt="hard-curve" />
                                                                <img src={hardCurveBtm} className='hard-curve-btm' alt="hard-curve" />
                                                            </div>
                                                            <div className="special-button wave-middle" onClick={() => setData(prev => ({ ...prev, buttons: { ...prev.buttons, option: 'Special', index: 2, type: 'secondary' } }))} >
                                                                <img src={waveCurvetop} className='wave-curve-top' alt="wave-curve" />
                                                                <img src={waveCurveBtm} className='wave-curve-btm' alt="wave-curve" />
                                                            </div>
                                                            <div className="special-button rectangle-1">
                                                                <button className='special-button rectangle-2' ></button>
                                                            </div>
                                                        </div>
                                                        <div className="button-row">
                                                            <button className="special-button solid"></button>
                                                            <div className="special-button box-corner">
                                                                <button className="corner-button top-left"></button>
                                                                <button className="corner-button top-right"></button>
                                                                <button className="corner-button bottom-left"></button>
                                                                <button className="corner-button bottom-right"></button>
                                                            </div>
                                                            <button className="special-button dotted"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="button-color-container">
                                                <div className="button-color-title">Button color</div>
                                                <div className="button-color-frame">
                                                    <div className="color-preview" style={{ backgroundColor: data?.buttons?.color }} />
                                                    <div className="color-input-container">
                                                        <div className="color-label">Button color</div>
                                                        <input className='input-color' type="text" value={data?.buttons?.color} onChange={(e) => setData(prev => ({ ...prev, buttons: { ...prev.buttons, color: e.target.value } }))} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="button-font-color-container">
                                                <div className="title">Button font color</div>
                                                <div className="content">
                                                    <div className="color-preview" style={{ backgroundColor: data?.buttons?.fontColor }} />
                                                    <div className="color-selector">
                                                        <div className="label">Button font color</div>
                                                        <input className='input-color' type="text" value={data?.buttons?.fontColor} onChange={(e) => setData(prev => ({ ...prev, buttons: { ...prev.buttons, fontColor: e.target.value } }))} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-design-option' >
                                        <h3>Fonts</h3>
                                        <div className="font-color-selector">
                                            <div className="section">
                                                <h2 className="section-title">Font</h2>
                                                <div className="option-selector">
                                                    <select className='select' value={data?.fonts?.fontType} onChange={(e) => setData(prev => ({ ...prev, fonts: { ...prev.fonts, fontType: e.target.value } }))}>
                                                        {[{ label: 'Sans-serif', value: 'Sans-serif' }, { label: 'Serif', value: 'Serif' }, { label: 'System-ui', value: 'System-ui' }].map((option, index) => (
                                                            <option key={index} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="section">
                                                <h2 className="section-title">Color</h2>
                                                <div className="color-selector">
                                                    <div
                                                        className="color-preview"
                                                        style={{ backgroundColor: data?.fonts?.color }}
                                                    ></div>
                                                    <div className="color-value">
                                                        <div className="color-input">
                                                            <div className="color-label">Color</div>
                                                            <input className='input-color' type="text" style={{ width: '100%' }} value={data?.fonts?.color} onChange={(e) => setData(prev => ({ ...prev, fonts: { ...prev.fonts, color: e.target.value } }))} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-design-option' >
                                        <h3>Themes</h3>
                                        <div className="color-grid">
                                            <div className="grid-row">
                                                {defaultCards.map((card, index) => (
                                                    <Card key={index} {...card} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='save-btn-container' >
                            <button className="save-button" onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    </div>
                    <div className='mobile-nav-bar-container' >
                        {
                            NAV_ITEMS.map(({ label, route, id }) => (<div className={`mobile-nav-icon ${label == 'Appearance' ? 'active' : ''}`} onClick={() => navigate(route)} >
                                <img src={navIcons[id - 1]} alt="nav" />
                                <div>{label}</div>
                            </div>))
                        }
                    </div>
                    <div className='preview-icon-container' >
                        <div className='eye-icon' onClick={() => setMobileScreenPreview(true)} >
                            <IoEyeOutline style={{ width: '22px', height: '22px' }} />
                            <div>Preview</div>
                        </div>
                    </div>
                </div> :
                <MobilePreview {...{ data, setMobileScreenPreview }} />
            }
            {isLoader && <Loader />}
        </>
    )
}

export default Appearance
