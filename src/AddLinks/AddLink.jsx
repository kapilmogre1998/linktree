import React, { useState } from 'react';
import './AddLink.scss';

const AddLink = () => {
  const [bio, setBio] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#342b26');
  const [colorInput, setColorInput] = useState('#000000');
  const [profileImage, setProfileImage] = useState('https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-10.png');

  const navItems = [
    { id: 1, label: 'Links', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame.png', active: true },
    { id: 2, label: 'Appearance', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/vector.png' },
    { id: 3, label: 'Analytics', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/combined.png' },
    { id: 4, label: 'Settings', icon: 'https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/combined-2.png' }
  ];

  const colorOptions = [
    { color: '#342b26', id: 'color1' },
    { color: '#FFFFFF', id: 'color2' },
    { color: '#000000', id: 'color3' }
  ];

  const handleBioChange = (e) => {
    const text = e.target.value;
    if (text.length <= 80) {
      setBio(text);
    }
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleImagePick = () => {
    console.log('Pick image clicked');
  };

  const handleRemove = () => {
    setProfileImage('https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-10.png');
  };

  return (
    <div className="add-link-container">
      <div className="sidebar">
        <div className="logo-section">
          <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-1.png" alt="Spark Logo" className="logo-img" />
          <h1 className="logo-text">Spark</h1>
        </div>

        <nav className="nav-section">
          {navItems.map(item => (
            <div key={item.id} className={`nav-item ${item.active ? 'active' : ''}`}>
              <img src={item.icon} alt={item.label} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="profile-section">
          <div className="profile-info">
            <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-2.png" alt="Profile" className="profile-img" />
            <span className="profile-name">Jenny Wilson</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <h1 className="greeting">Hi, Jenny Wilson!</h1>
            <p className="notification">Congratulations. You got a great response today.</p>
          </div>
        </header>

        <div className='left-right-container' >
          <div className="mobile-preview">
            <div className="mobile-frame">
              <div className="mobile-profile-section">
                <div className="mobile-profile-image">
                  <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-11.png" alt="Profile" />
                </div>
                <div className="mobile-username">@opopo_08</div>
              </div>
              <div className="button-group">
                <div className="toggle-button">
                  <div className="active-button">link</div>
                  <div className="inactive-button">Shop</div>
                </div>
              </div>
              <div className="links-section">
                <div className="link-item">
                  <div className="link-thumbnail">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/add.png" alt="YouTube" />
                  </div>
                  <span>Latest YouTube Video</span>
                </div>
                <div className="link-item">
                  <div className="link-thumbnail">
                    <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/skill-ic.png" alt="Instagram" />
                  </div>
                  <span>Latest Instagram reel</span>
                </div>
              </div>
              <button className="connect-button">Get Connected</button>
              <div className="footer">
                <div className="spark-logo">
                  <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group.png" alt="Spark Logo" />
                  <span className="spark-text">SPARK</span>
                  <span className="tm">TM</span>
                </div>
              </div>
            </div>
          </div>

          <div className='profile-banner-section' >
            <div className="content-sections">
              <div className="profile-section-container">
                <h2 className="profile-heading">Profile</h2>
                <div className="profile-container">
                  <div className="profile-content">
                    <div className="profile-header">
                      <img src={profileImage} alt="Profile" className="profile-image" />
                      <div className="profile-buttons">
                        <button className="pick-image-button" onClick={handleImagePick}>
                          Pick an image
                        </button>
                        <button className="remove-button" onClick={handleRemove}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="profile-form">
                      <div className="input-group">
                        <label className="input-label">Profile Title</label>
                        <input type="text" className="profile-input" value="@opopo_08" readOnly />
                      </div>
                      <div className="input-group">
                        <label className="input-label">Bio</label>
                        <textarea
                          className="bio-input"
                          value={bio}
                          onChange={handleBioChange}
                          placeholder="Bio"
                        />
                        <span className="bio-counter">{bio.length} / 80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-section">
                <h2 className="banner-title">Banner</h2>
                <div style={{ background: 'white', padding: '20px', borderRadius: '20px' }} >
                  <div className="banner-preview" style={{ backgroundColor }}>
                    <div className="banner-profile-content">
                      <img src={profileImage} alt="Profile" className="banner-profile-image" />
                      <h1 className="banner-username">@opopo_08</h1>
                      <div className="handle-container">
                        <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-3.png" alt="Frame" className="frame-icon" />
                        <span className="handle">/opopo_08</span>
                      </div>
                    </div>
                  </div>
                  <div className="color-customization">
                    <p className="color-label">Custom Background Color</p>
                    <div className="color-options">
                      {colorOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`color-button ${backgroundColor === option.color ? 'active' : ''}`}
                          style={{ backgroundColor: option.color }}
                          onClick={() => handleColorChange(option.color)}
                        />
                      ))}
                    </div>
                    <div className="color-input-container">
                      <div className="color-preview" style={{ backgroundColor: colorInput }} />
                      <div className="color-input-wrapper">
                        <input
                          type="text"
                          value={colorInput}
                          onChange={(e) => {
                            setColorInput(e.target.value);
                            if (e.target.value.match(/^#[0-9A-Fa-f]{6}$/)) {
                              setBackgroundColor(e.target.value);
                            }
                          }}
                          className="color-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='save-btn-container' >
              <button className="save-button" onClick={() => console.log('Save clicked')}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLink;