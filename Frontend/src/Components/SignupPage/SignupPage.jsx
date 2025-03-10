import React, { useEffect, useState } from 'react';
import sparkIcon from '../../assets/spark-icon.png';
import loginImg from '../../assets/login-img.png';
import { signupAPI } from './api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import './SignupPage.scss';
import Loader from '../Common/Loader/Loader';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [agreeToTermsError, setAgreeToTermsError] = useState('');
    const [isLoader, setIsLoader] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if(name === 'firstName'){
            setFirstNameError('');
        }
        if(name === 'lastName'){
            setLastNameError('');
        }
        if(name === 'email'){
            setEmailError('');
        }
        if(name === 'password'){
            setPasswordError('');
        }
        if(name === 'confirmPassword'){
            setConfirmPasswordError('');
        }
    };

    const handleCheckboxChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            agreeToTerms: e.target.checked
        }));
    };

    const validate = () => {
        const { firstName, lastName, email, password, confirmPassword, agreeToTerms } = formData;
        let isError = false;

        if(!firstName){
            setFirstNameError('First name is required');
            isError = true;
        }
        if(!lastName){
            setLastNameError('Last name is required');
            isError = true;
        }
        if(!validateEmail(email)){
            setEmailError('Email Id is required');
            isError = true;
        }

        if (!password.length) {
            setPasswordError('Password is required');
            isError = true;
        } else if(password.length < 6){
            setPasswordError('Password must be at least 6 characters long.');
            isError = true;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('confirm password does not match with password.')
            isError = true;
        }

        if (!agreeToTerms) {
            setAgreeToTermsError('Please agree to the terms');
            isError = true;
        }

        if(isError){
            return false;
        }

        return true;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const registerUser = async (data) => {
        try {
            setIsLoader(true)
            const res = await signupAPI(data);
            if(res?.data?.sts === 1){
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_data", JSON.stringify(res.data.userData))
                toast.success(res.data.msg, { theme: 'colored' });
                navigate('/on-board');
            }
        } catch (error) {
            if(error?.response?.data?.msg){
                toast.error(error.response.data.msg, { theme: 'colored' });
            }
        } finally {
            setIsLoader(false)
        }
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (validate()) {
                const { firstName, lastName, email, password } = formData;
                registerUser({
                    firstname: firstName,
                    lastname: lastName,
                    email,
                    password
                });
            }
        } catch (error) {
            console.log({error})
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/on-board')
        }
    }, [])

    return (
        <div className="signup-page-container">
            <div className="content-container">
                <div className='left-content' >
                    <header className="header">
                        <div className="logo-container">
                            <img src={sparkIcon} alt="Logo" className="logo" />
                            <div className="brand">
                                <span className="brand-name">SPARK</span>
                                <span className="trademark">TM</span>
                            </div>
                        </div>
                    </header>
                    <div className='title' >
                        <h1>Sign up to your Spark</h1>
                    </div>
                    <div className="signup-container">
                        <div className="header-row">
                            <h1>Create an account</h1>
                            <div className="sign-in-link" onClick={() => navigate('/login')} >Sign in instead</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                <span className='error-msg' >{firstNameError.length ? `${firstNameError}*` : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                                <span className='error-msg' >{lastNameError.length ? `${lastNameError}*` : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <span className='error-msg' >{emailError.length ? `${emailError}*` : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <span className='error-msg' >{passwordError.length ? `${passwordError}*` : ''}</span>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                <span className='error-msg' >{confirmPasswordError.length ? `${confirmPasswordError}*` : ''}</span>
                            </div>

                            <div className='agree-terms-conditions' >
                                <div className="checkbox-group">
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <label htmlFor="terms">
                                        By creating an account, I agree to our Terms of use and Privacy Policy
                                    </label>
                                </div>
                                <span className='error-msg' >{agreeToTermsError.length && !formData?.agreeToTerms ? `${agreeToTermsError}*` : ''}</span>
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                // disabled={!formData.agreeToTerms}
                            >
                                Create an account
                            </button>
                        </form>
                    </div>

                    <div className="footer-container">
                        <p className="footer-text">
                            This site is protected by reCAPTCHA and the{' '}
                            <a
                                href="#"
                                className="footer-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                Google Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a
                                href="#"
                                className="footer-link"
                                onClick={(e) => e.preventDefault()}
                            >
                                Terms of Service
                            </a>{' '}
                            apply.
                        </p>
                    </div>
                </div>

                <div className="background-container">
                    <div className="background-frame">
                        <img
                            src={loginImg}
                            alt="Background frame"
                            className="frame-image"
                        />
                    </div>
                </div>
            </div>  

            <ToastContainer />

            {isLoader && <Loader />}
        </div>
    );
};

export default SignupPage;