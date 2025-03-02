import React, { useEffect, useState } from 'react';
import bgImg from '../../assets/login-img.png';
import { useNavigate } from 'react-router-dom';
import sparkIcon from '../../assets/spark-icon.png';
import { addUserNameAPI } from './api';

import './OnBoardPage.scss';

const OnboardingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business');
    const [userName, setUserName] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate()

    const categories = [
        { icon: '🏢', name: 'Business' },
        { icon: '🎨', name: 'Creative' },
        { icon: '📚', name: 'Education' },
        { icon: '🎶', name: 'Entertainment' },
        { icon: '👗', name: 'Fashion & Beauty' },
        { icon: '🍕', name: 'Food & Beverage' },
        { icon: '⚖️', name: 'Government & Politics' },
        { icon: '🍎', name: 'Health & Wellness' },
        { icon: '💗', name: 'Non-Profit' },
        { icon: '💗', name: 'Other' },
        { icon: '🖥', name: 'Tech' },
        { icon: '✈️', name: 'Travel & Tourism' }
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleClickOnContinue = async () => {
        if(!userName.trim().length){
            setShowError(true);
        }
        try {
            const userData = localStorage.getItem('user_data')
            const userId = userData ? JSON.parse(userData)?.id : null;
            const res = await addUserNameAPI({username: userName, category: selectedCategory, userId});

            if(res.data.sts === 1){
                const { email, lastname, firstname } = res.data.userData;
                localStorage.setItem('user_data', JSON.stringify({id: userId, userName, email, lastName: lastname, firstName: firstname}));
                navigate('/add-link');
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if(error?.response?.data?.msg){
                toast.error(error.response.data.msg);
            }
        }
    }

    useEffect(() => {
        const userData = localStorage.getItem('user_data');
        const parseData = JSON.parse(userData);
        
        if(parseData && parseData?.userName && parseData?.category){
            navigate('/add-link');
        }
    },[])

    // const handleInputFocus = () => setIsFocused(true);
    // const handleInputBlur = () => setIsFocused(false);

    return (
        <div className="onboard-container">
            <div className="content-section">
                <header className="header">
                    <div className="logo-container">
                        <img src={sparkIcon} alt="Logo" className="logo" />
                        <div className="brand">
                            <span className="brand-name">SPARK</span>
                            <span className="trademark">TM</span>
                        </div>
                    </div>
                </header>
                <div className='content-container' >
                    <div className="header-section">
                        <h1 className="header-title">Tell us about yourself</h1>
                        <p className="header-subtitle">For a personalized Spark experience</p>
                    </div>

                    <div>
                        <div className="username-input-container">
                            <input
                                type="text"
                                value={userName}
                                className={`username-input`}
                                placeholder="Tell us your username"
                                onChange={(e) => setUserName(e.target.value)}
                                // onFocus={handleInputFocus}
                                // onBlur={handleInputBlur}
                            />
                        </div>
                        <div className='error-msg' >{showError ? 'Username is required*' : ''}</div>
                    </div>

                    <div className="category-selection">
                        <h2 className="category-title">Select one category that best describes your Linktree:</h2>
                        <div className="categories-container">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    className={`category-button ${selectedCategory === category.name ? 'selected' : ''}`}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <span className="category-icon">{category.icon}</span>
                                    <span className="category-name">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="continue-button" onClick={handleClickOnContinue} >
                        Continue
                    </button>
                </div>
            </div>

            <div className="image-section">
                <img
                    src={bgImg}
                    alt="Decorative"
                    className="section-image"
                />
            </div>
        </div>
    );
};

export default OnboardingPage;                                                                                                                                                                                                                                              