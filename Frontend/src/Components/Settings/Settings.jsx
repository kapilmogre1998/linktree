import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react';
import './Settings.scss';
import Sidebar from '../Common/Sidebar/Sidebar';
import { updateUserAPI } from './api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getLinkTreeAPI } from '../AddLinks/api';
import SparkIcon from '../../assets/spark-icon.svg';
import { mobilePreviewInitialState, mobilePreviewReducer } from '../../reducer';
import { MdAddAPhoto } from "react-icons/md";
import { setMobilePreview } from '../../action';

const Settings = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [state, dispatch] = useReducer(mobilePreviewReducer, mobilePreviewInitialState);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const userName = JSON.parse(localStorage.getItem('user_data'))?.username || {};
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [data, setData] = useState({
        profile: {
            pic: '',
            title: '',
            bio: ''
        },
        links: [
        ],
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


    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmailError('');
        }
        if (e.target.name === 'password') {
            setPasswordError('');
        }
        if (e.target.name === 'confirmPassword') {
            setConfirmPasswordError('');
        }
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // const validateFields = () => {
    //     const { firstName, lastName, email, password, confirmPassword } = formData;
    //     let isError = false;

    //     if (!validateEmail(email)) {
    //         setEmailError('Email Id is required');
    //         isError = true;
    //     }

    //     if (!password.length) {
    //         setPasswordError('Password is required');
    //         isError = true;
    //     } else if (password.length < 6) {
    //         setPasswordError('Password must be at least 6 characters long.');
    //         isError = true;
    //     }

    //     if (password !== confirmPassword) {
    //         setConfirmPasswordError('confirm password does not match with password.')
    //         isError = true;
    //     }

    //     return isError;
    // };

    const updateProfile = async (data) => {
        try {
            const res = await updateUserAPI(data);

            if (res.data.sts === 1) {
                const { email, lastname, firstname, id } = res.data.userData;
                localStorage.setItem('user_data', JSON.stringify({ id, userName, email, lastName: lastname, firstName: firstname }));
                toast.success('Profile updated successfully', { theme: 'colored' });
                // navigate('/add-link');
            }
        } catch (error) {
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg, { theme: 'colored' });
            }
        }
    }

    const handleSave = () => {
        const { email, password, confirmPassword, firstName, lastName } = formData;
        let isError = false;

        if (email?.length) {
            if (!validateEmail(email)) {
                isError = true;
                setEmailError('Enter Valid Email Id');
            }
        }

        if (password?.length && password?.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            isError = true;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('confirm password does not match with password.');
            isError = true;
        }

        if (isError) {
            return;
        }

        const data = {
            userId: JSON.parse(localStorage.getItem('user_data'))?.id
        };

        if (firstName) {
            data.firstname = firstName;
        }
        if (lastName) {
            data.lastname = lastName;
        }
        if (email) {
            data.email = email;
        }
        if (password) {
            data.password = password;
        }

        updateProfile(data);
    }

    useLayoutEffect(() => {
        const { firstname, lastname, email } = JSON.parse(localStorage.getItem('user_data')) || {};
        setFormData({
            firstName: firstname,
            lastName: lastname,
            email
        })
    }, [])

    const fetchData = async (userId) => {
        try {
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
        <div className='edit-profile-container' >
            <Sidebar activeIndex={'4'}  {...{ data }} />
            <div className='mobile-header-container' >
                <div className='mobile-icon' >
                    <img src={SparkIcon} width='30px' height='30px' alt="spark-icon" />
                    <div className='spark-trade-mark-container' >SPARK <span className='trade-mark' >TM</span> </div>
                </div>
                {
                    data?.profile?.pic ?
                        <img src={data.profile.pic} alt="Profile" className="mobile-header-image" /> :
                        <div className='mobile-header-image no-img' ><MdAddAPhoto style={{ width: '50px', height: '50px' }} /></div>
                }
            </div>
            <div className="edit-profile-layout">
                <header className="setting-header">
                    <div className="setting-header-content">
                        <h1 className="greeting"><span className='text-bold' >Hi</span>, {userName}!</h1>
                        <p className="notification">Congratulations. You got a great response today.</p>
                    </div>
                </header>
                <div className='header-editprofile-container'>

                    <div className="header">
                        <h2 className="header-title">Edit Profile</h2>
                        <div className="header-underline-container">
                            <div className="header-underline-accent"></div>
                            <div className="header-underline"></div>
                        </div>
                    </div>

                    <div className="profile-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                            <div className='error-msg' >{emailError ? emailError : ''}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                            <div className='error-msg' >{passwordError ? passwordError : ''}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                            />
                            <div className='error-msg' >{confirmPasswordError ? confirmPasswordError : ''}</div>
                        </div>
                    </div>

                    <div className='save-btn-container' >
                        <button className="save-button" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer
            // toastStyle={{ backgroundColor: "crimson" }}
            />
        </div>
    );
};

export default Settings;