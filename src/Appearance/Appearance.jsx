import React, { useState } from 'react'
import hardCurveBtm from '../assets/hard-curve-bottom.svg';
import hardCurvetop from '../assets/hard-curve-top.svg';
import waveCurvetop from '../assets/wave-curve-top.svg';
import waveCurveBtm from '../assets/wave-curve-btm.svg';
import './Appearance.scss'
import Sidebar from '../Common/Sidebar/Sidebar';
import MobilePreview from '../Common/MobilePreview/MobilePreview';

const defaultCards = [
    { color: 'snow', label: 'Air Snow', background: 'white', stripe: '#2A3235' },
    { color: 'grey', label: 'Air Grey', background: '#ebeef1', stripe: 'white' },
    { color: 'smoke', label: 'Air Smoke', background: '#2a3235', stripe: 'white' },
    { color: 'black', label: 'Air Black', background: 'black', stripe: '#1c1c1c' },
    { color: 'blue', label: 'Mineral Blue', background: '#e0f6ff', stripe: '#e0f6ff', borderClr: '#CEE3EA' },
    { color: 'green', label: 'Mineral Green', background: '#dff9ee', stripe: '#dff9ee', borderClr: '#CEE3EA' },
    { color: 'orange', label: 'Mineral Orange', background: '#effff2', stripe: '#effff2', borderClr: '#CEE3EA' },
  ];

const Appearance = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [fontColor, setFontColor] = useState('#888888');
    const [buttonColor, setButtonColor] = useState('#ffffff');
    const [buttonFontColor, setButtonFontColor] = useState('#888888');


    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    const handleFontColorChange = (e) => {
        setFontColor(e.target.value);
    };

    const Card = ({ color, label, background, stripe, borderClr = '' }) => (
        <div className="card-container">
          <div className="card" style={{ backgroundColor: background }}>
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

    return (
        <div className='appearance-container' >
            <Sidebar />
            <div style={{ display: 'flex', marginLeft: '230px', padding: '0px 40px', gap: '0' }} >
                <MobilePreview />
                <div className='appearance-content' >
                    <div className="layout-options">
                        <div className="layout-options__container">
                            <div className='layout-stack' >
                                <div className="layout-option__icon-wrapper">
                                    <div style={{ display: 'flex', gap: '0.25rem', flexDirection: 'column' }} >
                                        <div style={{ background: 'black', height: '8px', width: '40px', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', height: '8px', width: '40px', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', height: '8px', width: '40px', borderRadius: '2px' }} ></div>
                                    </div>
                                </div>
                                <div>Stack</div>
                            </div>
                            <div className='layout-stack' >
                                <div className="layout-option__icon-wrapper">
                                    <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '20px 20px', gridTemplateRows: '20px 20px' }} >
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                    </div>
                                </div>
                                <div>Grid</div>
                            </div>
                            <div className='layout-stack' >
                                <div className="layout-option__icon-wrapper">
                                    <div style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: '30px 15px', gridTemplateRows: '40px' }} >
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                        <div style={{ background: 'black', borderRadius: '2px' }} ></div>
                                    </div>
                                </div>
                                <div>Carousel</div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-container">
                        <div className="button-section">
                            {/* Fill Buttons */}
                            <div className="fill-buttons-container">
                                <div className="fill-label">Fill</div>
                                <div className="buttons-row">
                                    <button className="fill-button primary"></button>
                                    <button className="fill-button secondary"></button>
                                    <button className="fill-button tertiary"></button>
                                </div>
                            </div>

                            {/* Outline Buttons */}
                            <div className="outline-buttons-container">
                                <h3 className="outline-title">Outline</h3>
                                <div className="buttons-row">
                                    <button className="outline-button square"></button>
                                    <button className="outline-button rounded"></button>
                                    <button className="outline-button pill"></button>
                                </div>
                            </div>

                            {/* Hard Shadow Buttons */}
                            <div className="hard-shadow-container">
                                <h2 className="hard-shadow-title">Hard shadow</h2>
                                <div className="hard-shadow-buttons">
                                    <button className="hard-shadow-btn primary"></button>
                                    <button className="hard-shadow-btn secondary"></button>
                                    <button className="hard-shadow-btn tertiary"></button>
                                </div>
                            </div>

                            {/* Soft Shadow Buttons */}
                            <div className="soft-shadow-container">
                                <h2 className="soft-shadow-title">Soft shadow</h2>
                                <div className="soft-shadow-buttons">
                                    <button className="soft-shadow-button primary">Button</button>
                                    <button className="soft-shadow-button secondary">Button</button>
                                    <button className="soft-shadow-button tertiary">Button</button>
                                </div>
                            </div>

                            {/* Special Buttons */}
                            <div className="special-buttons">
                                <div className="special-title">Special</div>
                                <div className="button-container">
                                    <div className="button-row">
                                        <button className="special-button wave-top">
                                            <img src={hardCurvetop} className='hard-curve-top' alt="hard-curve" />
                                            <img src={hardCurveBtm} className='hard-curve-btm' alt="hard-curve" />
                                        </button>
                                        <button className="special-button wave-middle">
                                            <img src={waveCurvetop} className='wave-curve-top' alt="wave-curve" />
                                            <img src={waveCurveBtm} className='wave-curve-btm' alt="wave-curve" />
                                        </button>
                                        <button className="special-button rectangle-1">
                                            <button className='special-button rectangle-2' ></button>
                                        </button>
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

                        {/* Button Color Selector */}
                        <div className="button-color-container">
                            <div className="button-color-title">Button color</div>
                            <div className="button-color-frame">
                                <div className="color-preview" style={{ backgroundColor: buttonColor }} />
                                <div className="color-input-container">
                                    <div className="color-label">Button color</div>
                                    <div className="color-input">
                                        <span>{buttonColor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button Font Color Selector */}
                        <div className="button-font-color-container">
                            <div className="title">Button font color</div>
                            <div className="content">
                                <div className="color-preview" style={{ backgroundColor: buttonFontColor }} />
                                <div className="color-selector">
                                    <div className="label">Button font color</div>
                                    <div className="color-input">
                                        <span>{buttonFontColor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-color-selector">
                        {/* Font Section */}
                        <div className="section">
                            <h2 className="section-title">Font</h2>
                            <div className="font-selector">
                                <div className="font-preview">
                                    <div className="font-sample">
                                        <span>Aa</span>
                                    </div>
                                    {/* selectedFont */}
                                    <div className="font-name">'DM Sans'</div>
                                </div>
                            </div>
                        </div>

                        {/* Color Section */}
                        <div className="section">
                            <h2 className="section-title">Color</h2>
                            <div className="color-selector">
                                <div
                                    className="color-preview"
                                    // selectedColors
                                    style={{ backgroundColor: '#ffffff' }}
                                ></div>
                                <div className="color-value">
                                    <div className="color-input">
                                    <div className="color-label">Color</div>
                                        <span className='color-hex-code' >#ffffff'</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
    )
}

export default Appearance
