import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Settings.scss';
import Sidebar from '../Common/Sidebar/Sidebar';
import { updateUserAPI } from './api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Settings = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const userName = JSON.parse(localStorage.getItem('user_data'))?.userName || {};
    const navigate = useNavigate();


    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmailError('');
        }
        if(e.target.name === 'password'){
            setPasswordError('');
        }
        if(e.target.name === 'confirmPassword'){
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
                const { email, lastname, firstname, userId } = res.data.userData;
                localStorage.setItem('user_data', JSON.stringify({ id: userId, userName, email, lastName: lastname, firstName: firstname }));
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

        if(isError){
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
        const { firstName, lastName, email } = JSON.parse(localStorage.getItem('user_data')) || {};
        setFormData({
            firstName,
            lastName,
            email
        })
    }, [])

    return (
        <div className='edit-profile-container' >
            <Sidebar activeIndex={'4'} />
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