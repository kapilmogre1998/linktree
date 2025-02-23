import React, { useState } from 'react';
import sparkIcon from '../assets/spark-icon.png';
import loginImg from '../assets/login-img.png';
import './SignupPage.scss';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            agreeToTerms: e.target.checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

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
                            <a href="#" className="sign-in-link">Sign in instead</a>
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
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </div>

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

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={!formData.agreeToTerms}
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
        </div>
    );
};

export default SignupPage;