import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react';
import SparkIcon from '../../assets/spark-icon.svg';
import Modal from '../Common/Modal/Modal';
import Sidebar from '../Common/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
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
import { ToastContainer, toast } from 'react-toastify';
import { setMobilePreview } from '../../action';
import { createLinkTreeAPI, getLinkTreeAPI, updateLinkTreeAPI } from './api';
import { IoEyeOutline } from "react-icons/io5";
import Loader from '../Common/Loader/Loader';
import LinkIcon from '../../assets/link-icon.svg';
import AppearanceIcon from '../../assets/apperance.svg';
import SettingsIcon from '../../assets/setting-icon.svg';
import AnalyticsIcon from '../../assets/analytics.svg';

import './AddLink.scss';
import MobileHeader from '../Common/MobileHeader/MobileHeader';

const NAV_ITEMS = [
  { id: 1, label: 'Links', icon: <LinkIcon />, route: '/add-link' },
  { id: 2, label: 'Appearance', icon: <AppearanceIcon />, route: '/appearance' },
  { id: 3, label: 'Analytics', icon: <AnalyticsIcon />, route: '/analytics' },
  { id: 4, label: 'Settings', icon: <SettingsIcon />, route: '/settings' }
];

const navIcons = [LinkIcon, AppearanceIcon, AnalyticsIcon, SettingsIcon];
const LINK_TYPE = ['INSTAGRAM', 'YOUTUBE', 'TWITTER', 'FACEBOOK']
const SHOP_TYPE = ['FLIPKART', 'AMAZON']

const AddLink = () => {
  const [state, dispatch] = useReducer(mobilePreviewReducer, mobilePreviewInitialState);
  const { mobilePreviewData } = state;
  const [activeTab, setActiveTab] = useState('link');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [linkActiveIcon, setLinkActiveIcon] = useState(0);
  const [modalError, setModalError] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [mobileScreenPreview, setMobileScreenPreview] = useState(false);
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
      fontColor: '#FFFFFF',
      index: 2,
      type: 'teritary'
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
  const userName = JSON.parse(localStorage.getItem('user_data'))?.username || '';
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const colorOptions = [
    { color: '#342b26', id: 'color1' },
    { color: '#FFFFFF', id: 'color2', border: '1px solid #fffff' },
    { color: '#000000', id: 'color3' }
  ];

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleCopy = (type) => {
    const textToCopy = url;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success('Copied to clipboard', {
          theme: 'colored'
        })
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalError(false);
    setTitle('');
    setUrl('');
    setIsModalOpen(false);
    setToggle(false);
  };

  const handleBioChange = (e) => {
    const text = e.target.value;
    if (text.length <= 80) {
      setData(prev => ({ ...prev, profile: { ...prev.profile, bio: text } }));
    }
  };

  const handleColorChange = (color) => {
    setData(prev => ({ ...prev, bannerBgClr: color }));
  };

  const handleRemove = () => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, pic: '' } }));
  };

  const handleTitleChange = (e) => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, title: e.target.value } }));
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];

      if (validTypes.includes(file.type)) {
        const base64 = await convertToBase64(file);

        setData(prev => ({ ...prev, profile: { ...prev.profile, pic: base64 } }));
      } else {
        alert('Unsupported file type. Please select a PNG or JPG image.');
      }
    };
  }

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleAddLink = (type, id) => {
    if (type == 'DELETE') {
      setData(prev => ({ ...prev, links: prev.links.filter((link, index) => index !== id) }))
    } else if (title && url) {
      if (activeTab == 'link') {
        setData(prev => ({ ...prev, links: [...prev.links, { data: { title, url, icon: linkActiveIcon, count: 0, unqId: linkActiveIcon, type: LINK_TYPE[linkActiveIcon] }, date: new Date() }] }));
      } else {
        setData(prev => ({ ...prev, shops: [...prev.shops, { data: { title, url, icon: linkActiveIcon, count: 0, unqId: linkActiveIcon, type: SHOP_TYPE[linkActiveIcon] }, date: new Date() }] }));
      }
      setTitle('');
      setUrl('');
    }
    setIsModalOpen(false)
  }

  const updateData = async (payload, id) => {
    try {
      setIsLoader(true)
      const res = await updateLinkTreeAPI(payload, id);
      if (res.data.sts == 1) {
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


  const submitData = async (payload) => {
    try {
      setIsLoader(true)
      const res = await createLinkTreeAPI(payload);
      if (res.data.sts == 1) {
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

  const fetchData = async (userId) => {
    try {
      setIsLoader(true);
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

    const formData = new FormData();

    // Append primitive values
    formData.append('bannerBgClr', data.bannerBgClr);
    formData.append('layout', data.layout);

    // Append nested objects
    formData.append('profile', JSON.stringify(data.profile));
    formData.append('buttons', JSON.stringify(data.buttons));
    formData.append('fonts', JSON.stringify(data.fonts));
    formData.append('theme', JSON.stringify(data.theme));

    // Append arrays (assuming links and shops are arrays of strings or objects)
    formData.append('links', JSON.stringify(data.links));
    formData.append('shops', JSON.stringify(data.shops));

    formData.append('userId', userId)

    if (updateId) {
      formData.append('updateId', updateId)
    }

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
      {!mobileScreenPreview ? <div className="add-link-container">
        <Sidebar activeIndex={'1'} data={data} />

        <div className="main-content">
          <header className="header">
            <div className="header-content">
              <h1 className="greeting"><span className='text-bold' >Hi</span>, {userName}!</h1>
              <p className="notification">Congratulations. You got a great response today.</p>
            </div>
          </header>

          <MobileHeader data={data} />
          {/* <div className='mobile-header-container' >
            <div className='mobile-icon' >
              <img src={SparkIcon} width='30px' height='30px' alt="spark-icon" />
              <div className='spark-trade-mark-container' >SPARK <span className='trade-mark' >TM</span> </div>
            </div>
            {
              data?.profile?.pic ?
                <img src={data.profile.pic} alt="Profile" className="mobile-header-image" /> :
                <div className='mobile-header-image no-img' ><MdAddAPhoto style={{ width: '50px', height: '50px' }} /></div>
            }
          </div> */}

          <div className='mobile-nav-bar-container' >
            {
              NAV_ITEMS.map(({ label, route, id }) => (<div key={id} className={`mobile-nav-icon ${label == 'Links' ? 'active' : ''}`} onClick={() => navigate(route)} >
                <img src={navIcons[id - 1]} alt="nav" />
                <div>{label}</div>
              </div>))
            }
          </div>

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
                            value={data?.profile?.bio}
                            onChange={handleBioChange}
                            placeholder="Bio"
                          />
                          <span className="bio-counter">{data?.profile?.bio?.length} / 80</span>
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
                    {
                      activeTab === 'link' ?
                        data?.links?.length > 0 && <div className="links-container">
                          {data?.links.map(({ data: { title, url, count } }, index) => (
                            <div key={index} className="links-heading">
                              <div className='link-content' >
                                <div className='title' >{title} <LuPencilLine /></div>
                                <div className='url' >{url} <LuPencilLine /></div>
                                <div className='signal-count' ><img src={SignalIcon} alt="" /> {count} Clicks</div>
                              </div>

                              <div className='toggle-delete' >
                                <ToggleSwitch toggle={true} />
                                <div><RiDeleteBin6Line onClick={() => handleAddLink('DELETE', index)} /></div>
                              </div>
                            </div>
                          ))}
                        </div> :
                        data?.shops?.length > 0 ? <div className="links-container">
                          {data?.shops.map(({ data: { title, url, count } }, index) => (
                            <div key={index} className="links-heading">
                              <div className='link-content' >
                                <div className='title' >{title} <LuPencilLine /></div>
                                <div className='url' >{url} <LuPencilLine /></div>
                                <div className='signal-count' ><img src={SignalIcon} alt="" /> {count} Clicks</div>
                              </div>

                              <div className='toggle-delete' >
                                <ToggleSwitch toggle={true} />
                                <div><RiDeleteBin6Line onClick={() => handleAddLink('DELETE', index)} /></div>
                              </div>
                            </div>
                          ))}
                        </div> : null
                    }
                  </div>
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
                            className={`color-button ${data?.bannerBgClr === option.color ? 'active' : ''}`}
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
                              setData(prev => ({ ...prev, bannerBgClr: e.target.value }));
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
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
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
                          onChange={(e) => {
                            setModalError(false)
                            setTitle(e.target.value)
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '20px' }}>
                        <ToggleSwitch toggle={toggle} addLink={() => {
                          if (title.trim().length && url.trim().length) {
                            handleAddLink()
                          } else {
                            setModalError(true)
                          }
                        }} />
                      </div>
                    </div>
                    <div className="input-container">
                      <div className="input-wrapper">
                        <input
                          type="text"
                          placeholder="Link Url"
                          className="url-input"
                          value={url}
                          onChange={(e) => {
                            setModalError(false)
                            setUrl(e.target.value)
                          }}
                        />
                      </div>
                      <TbShare2 className='delete-share-icon' onClick={handleCopy} />
                      <RiDeleteBinLine className='delete-share-icon' onClick={() => setUrl('')} />
                    </div>
                  </div>
                  <div className='error-msg' >{modalError ? 'All Fields are required*' : ''}</div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>}

        {isLoader && <Loader />}

        <div className='preview-icon-container' >
          <div className='eye-icon' onClick={() => setMobileScreenPreview(true)} >
            <IoEyeOutline style={{ width: '22px', height: '22px' }} />
            <div>Preview</div>
          </div>
        </div>
      </div> : <MobilePreview {...{ data, setMobileScreenPreview }} />}
    </>
  );
};

export default AddLink;