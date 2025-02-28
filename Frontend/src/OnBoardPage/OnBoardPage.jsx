import React, { useState } from 'react';
import bgImg from '../assets/login-img.png';
import sparkIcon from '../assets/spark-icon.png';
import './OnBoardPage.scss';

const OnboardingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Business');
    const [isFocused, setIsFocused] = useState(false);

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

    const handleInputFocus = () => setIsFocused(true);
    const handleInputBlur = () => setIsFocused(false);

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

                    <div className="username-input-container">
                        <input
                            type="text"
                            className={`username-input ${isFocused ? 'focused' : ''}`}
                            placeholder="Tell us your username"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
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

                    <button className="continue-button">
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