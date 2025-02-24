import React, { useState } from 'react';
import './AddLink.scss';
import Modal from '../Common/Modal/Modal';
import Sidebar from '../Common/Sidebar/Sidebar';
import MobilePreview from '../Common/MobilePreview/MobilePreview';

const AddLink = () => {
  const [bio, setBio] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#342b26');
  const [colorInput, setColorInput] = useState('#000000');
  const [activeTab, setActiveTab] = useState('link');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-10.png');


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <Sidebar />

      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <h1 className="greeting"><span className='text-bold' >Hi</span>, Jenny Wilson!</h1>
            <p className="notification">Congratulations. You got a great response today.</p>
          </div>
        </header>

        <div className='left-right-container' >
          <MobilePreview />

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
                        {/* <span className="bio-counter">{bio.length} / 80</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-container">
                  <div className="toggle-container">
                    <div
                      className={activeTab === 'link' ? "active-toggle" : "inactive-toggle"}
                      onClick={() => setActiveTab('link')}
                    >
                      <img src="https://dashboard.codeparrot.ai/api/image/Z7ymhiOoSyo_4k6O/iconoir.png" alt="link-icon" className="icon" />
                      <span className={activeTab === 'link' ? "active-text" : "inactive-text"}>Add Link</span>
                    </div>
                    <div
                      className={activeTab === 'shop' ? "active-toggle" : "inactive-toggle"}
                      onClick={() => setActiveTab('shop')}
                    >
                      <img src="https://dashboard.codeparrot.ai/api/image/Z7ymhiOoSyo_4k6O/iconoir-2.png" alt="shop-icon" className="icon" />
                      <span className={activeTab === 'shop' ? "active-text" : "inactive-text"}>Add Shop</span>
                    </div>
                  </div>

                  <button className="add-button" onClick={openModal}>
                    <img src="https://dashboard.codeparrot.ai/api/image/Z7ymhiOoSyo_4k6O/mingcute.png" alt="add-icon" className="add-icon" />
                    <span>Add</span>
                  </button>

                <Modal isOpen={isModalOpen} onClose={closeModal} activeTab={activeTab} />
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