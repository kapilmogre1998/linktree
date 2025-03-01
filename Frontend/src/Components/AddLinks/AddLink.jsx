import React, { useReducer, useState } from 'react';
import Modal from '../Common/Modal/Modal';
import Sidebar from '../Common/Sidebar/Sidebar';
import MobilePreview from '../Common/MobilePreview/MobilePreview';
import ToggleSwitch from '../Common/ToggleSwitch/ToggleSwitch';
import { TbShare2 } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import youtubeIcon from '../../assets/youtube.svg';
import profilePic from '../../assets/dummy-pic.png';
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import { mobilePreviewInitialState, mobilePreviewReducer } from '../../reducer';
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import SignalIcon from '../../assets/signal.svg'
import AmazonIcon from '../../assets/amazon.svg'
import FlipkartIcon from '../../assets/flipkart.svg'


import './AddLink.scss';
import { setMobilePreview } from '../../action';

const AddLink = () => {
  const [state, dispatch] = useReducer(mobilePreviewReducer, mobilePreviewInitialState);
  const { mobilePreviewData } = state;
  const [bio, setBio] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#342b26');
  // const [colorInput, setColorInput] = useState('#000000');
  const [activeTab, setActiveTab] = useState('link');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [profileImage, setProfileImage] = useState('https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group-10.png');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [linkActiveIcon, setLinkActiveIcon] = useState(0);
  const [data, setData] = useState({
    profile: {
      pic: profilePic,
      title: '',
      bio: ''
    },
    links: [],
    shops: [],
    bannerBgClr: "#342b26",
    layout: '',
    buttons: {
      color: '',
      fontColor: '',
      buttonType: ''
    },
    fonts: {
      fontType: '',
      color: '#ffffff'
    },
    theme: ''
  })
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleCopy = (type) => {
    const textToCopy = type === 'title' ? title : url;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log(`Copied ${type} to clipboard`);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const colorOptions = [
    { color: '#342b26', id: 'color1' },
    { color: '#FFFFFF', id: 'color2', border: '1px solid #fffff' },
    { color: '#000000', id: 'color3' }
  ];

  const handleBioChange = (e) => {
    const text = e.target.value;
    if (text.length <= 80) {
      setBio(text);
    }
  };

  const handleColorChange = (color) => {
    setData(prev => ({ ...prev, bannerBgClr: color }));
  };

  const handleImagePick = () => {
    console.log('Pick image clicked');
  };

  const handleRemove = () => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, pic: '' } }));
  };

  const handleTitleChange = (e) => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, title: e.target.value } }));
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // List of allowed MIME types
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (validTypes.includes(file.type)) {
        const fileUrl = URL.createObjectURL(file);
        setData(prev => ({ ...prev, profile: { ...prev.profile, pic: fileUrl }}));
      } else {
        alert('Unsupported file type. Please select a PNG or JPG image.');
      }
    };
  }

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleAddLink = (type, id) => {
    debugger;
    if(type == 'DELETE'){
      setData(prev => ({ ...prev, links: prev.links.filter((link, index) => index !== id)}))
    } else if (title && url) {
      setData(prev => ({ ...prev, links: [...prev.links, { title, url, icon: linkActiveIcon }] }));
      setTitle('');
      setUrl('');
    }
    setIsModalOpen(false)
  }

  return (
    <div className="add-link-container">
      <Sidebar activeIndex='1' />

      <div className="main-content">
        <header className="header">
          <div className="header-content">
            <h1 className="greeting"><span className='text-bold' >Hi</span>, Jenny Wilson!</h1>
            <p className="notification">Congratulations. You got a great response today.</p>
          </div>
        </header>

        <div className='left-right-container' >
          <MobilePreview data={data} />

          <div className='profile-banner-section' >
            <div className="content-sections">
              <div className="profile-section-container">
                <h2 className="profile-heading">Profile</h2>
                <div className="profile-container">
                  <div className="profile-content">
                    <div className="profile-header">
                      {
                        data?.profile?.pic ?
                          <img src={data.profile.pic} alt="Profile" className="profile-image" /> :
                          <div className='profile-image no-img' ><MdAddAPhoto style={{ width: '50px', height: '50px' }} /></div>
                      }
                      <div className="profile-buttons">
                        <div className="file-upload-container">
                          <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />
                          <button
                            className="upload-button"
                            onClick={handleClick}
                          >
                            Pick an image
                          </button>
                        </div>
                        <button className="remove-button" onClick={handleRemove}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="profile-form">
                      <div className="input-group">
                        <label className="input-label">Profile Title</label>
                        <input type="text" placeholder='title' className="profile-input" value={data?.profile?.title} onChange={handleTitleChange} />
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

                <div>
                  {data?.links.length > 0 && <div className="links-container">
                   { data?.links.map(({title, url, count}, index) => (
                      <div className="links-heading">
                        <div className='link-content' >
                          <div className='title' >{title} <LuPencilLine /></div>
                          <div className='url' >{url} <LuPencilLine /></div>
                          <div className='signal-count' ><img src={SignalIcon} alt="" /> {count} Clicks</div>
                        </div>
                        
                        <div className='toggle-delete' >
                          <ToggleSwitch bool={true} />
                          <div><RiDeleteBin6Line  onClick={() => handleAddLink('DELETE', index)} /></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  }
                </div>

                {isModalOpen && <Modal closeModal={closeModal} activeTab={activeTab} contentWidth={'700'}  >
                  <div className="addlink-container">
                    <div className="header-buttons">
                      <button className={`button-container ${activeTab == 'link' ? 'active' : ''}`} onClick={() => setActiveTab('link')} >
                        <img src="https://dashboard.codeparrot.ai/api/image/Z735UWZErsX9xb7b/iconoir.png" alt="Add Link Icon" className="button-icon" />
                        <span>Add Link</span>
                      </button>
                      <button className={`button-container ${activeTab == 'shop' ? 'active' : ''}`} onClick={() => setActiveTab('shop')} >
                        <img src="https://dashboard.codeparrot.ai/api/image/Z735UWZErsX9xb7b/iconoir-2.png" alt="Add Shop Icon" className="button-icon" />
                        <span>Add Shop</span>
                      </button>
                    </div>

                    <div className="content-container">
                      <div className="section-container">
                        <div className="url-section">
                          <h2 className="section-title">Enter URL</h2>

                          <div className="url-input-group">
                            <div className="input-container">
                              <div className="input-wrapper">
                                <input
                                  type="text"
                                  placeholder="Link title"
                                  className="url-input"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </div>
                              <div style={{ marginLeft: '20px' }}>
                                <ToggleSwitch addLink={handleAddLink} />
                              </div>
                            </div>
                            <div className="input-container">
                              <div className="input-wrapper">
                                <input
                                  type="text"
                                  placeholder="Link Url"
                                  className="url-input"
                                  value={url}
                                  onChange={(e) => setUrl(e.target.value)}
                                />
                              </div>
                              <TbShare2 className='delete-share-icon' />
                              <RiDeleteBinLine className='delete-share-icon' />
                              {/* <img
                                src="https://dashboard.codeparrot.ai/api/image/Z735UWZErsX9xb7b/iconoir-3.png"
                                alt="copy"
                                className="copy-icon"
                                onClick={() => handleCopy('url')}
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div className="divider"></div>
                        <div className="applications-section">
                          <h3 className="section-subtitle">Applications</h3>

                          <div className="apps-grid">
                            {
                              activeTab == 'link' ?
                              [{ title: 'Instagram', icon: instagramIcon }, { title: 'Youtube', icon: youtubeIcon }, { title: 'Twitter', icon: twitterIcon }, { title: 'Facebook', icon: facebookIcon }].map((application, index) => (
                                <div className="app-item" onClick={() => setLinkActiveIcon(index)} >
                                  <div className={`app-icon-container ${linkActiveIcon == index ? 'active' : ''}`} >
                                    <img src={application.icon} alt="Instagram" className="app-icon" />
                                  </div>
                                  <span className="app-name">{application.title}</span>
                                </div>
                              )) :  
                              [{ title: 'Flipkart', icon: FlipkartIcon }, { title: 'Amazon', icon: AmazonIcon }].map((application, index) => (
                                <div className="app-item" onClick={() => setLinkActiveIcon(index)} >
                                  <div className={`app-icon-container ${linkActiveIcon == index ? 'active' : ''}`} >
                                    <img src={application.icon} alt="Instagram" className="app-icon" />
                                  </div>
                                  <span className="app-name">{application.title}</span>
                                </div>
                              ))
                            }
                            {/* <div className="app-item">
                              <div className="app-icon-container">
                                <img src={instagramIcon} alt="Instagram" className="app-icon" />
                              </div>
                              <span className="app-name">Instagram</span>
                            </div>
                            <div className="app-item">
                              <div className="app-icon-container">
                                <img src={facebookIcon} alt="Facebook" className="app-icon" />
                              </div>
                              <span className="app-name">FaceBook</span>
                            </div>
                            <div className="app-item">
                              <div className="app-icon-container">
                                <img src={youtubeIcon} alt="YouTube" className="app-icon" />
                              </div>
                              <span className="app-name">YouTube</span>
                            </div>
                            <div className="app-item">
                              <div className="app-icon-container">
                                <img src={twitterIcon} alt="X" className="app-icon" />
                              </div>
                              <span className="app-name">X</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>}
              </div>

              <div className="banner-section">
                <h2 className="banner-title">Banner</h2>
                <div className='banner-box' >
                  <div className="banner-preview" style={{ backgroundColor: data?.bannerBgClr }}>
                    <div className="banner-profile-content">
                      {
                        data?.profile?.pic ?
                          <img src={data?.profile?.pic} alt="Profile" className="banner-profile-image" /> :
                          <div className='banner-profile-image no-img' >
                            <MdAddAPhoto style={{ width: '50px', height: '50px' }} />
                          </div>
                      }
                      <h1 className="banner-username">{data?.profile?.title}</h1>
                      {data?.profile?.title ? <div className="handle-container">
                        <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-3.png" alt="Frame" className="frame-icon" />
                        <span className="handle">/{data?.profile?.title}</span>
                      </div> : null}
                    </div>
                  </div>
                  <div className="color-customization">
                    <p className="color-label">Custom Background Color</p>
                    <div className="color-options">
                      {colorOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`color-button ${backgroundColor === option.color ? 'active' : ''}`}
                          style={{ backgroundColor: option.color, border: option.border ? option.border : 'none' }}
                          onClick={() => handleColorChange(option.color)}
                        />
                      ))}
                    </div>
                    <div className="color-input-container">
                      <div className="color-preview" style={{ backgroundColor: data?.bannerBgClr }} />
                      <div className="color-input-wrapper">
                        <input
                          type="text"
                          value={data?.bannerBgClr}
                          onChange={(e) => {
                            // setColorInput(e.target.value);
                            setData(prev => ({ ...prev.data, bannerBgClr: e.target.value }));
                            // if (e.target.value.match(/^#[0-9A-Fa-f]{6}$/)) {
                            // setBackgroundColor(e.target.value);
                            // }
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