// HomePage.jsx
import React from 'react';
import analystics from '../assets/analytics.webp';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import frame4 from '../assets/frame4.png';
import frame5 from '../assets/frame5.png';
import share1 from '../assets/share1.webp';
import share2 from '../assets/share2.webp';
import share3 from '../assets/share3.webp';
import appicon1 from '../assets/app1.png';
import appicon2 from '../assets/app2.png';
import appicon3 from '../assets/app3.png';
import appicon4 from '../assets/app4.png';
import appicon5 from '../assets/app5.png';
import appicon6 from '../assets/app6.png';
import appicon7 from '../assets/app7.png';
import appicon8 from '../assets/app8.png';
import appicon9 from '../assets/app9.png';
import sparkicon from '../assets/spark-icon.png'
import socialmediaicons from '../assets/socialmediaicons.png';

import customerStory from '../assets/customer-story.png';

import './HomePage.scss';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const frameImages = [frame5, frame4, frame3, frame2, frame1];
  const shareImages = [share1, share2, share3];
  const navigate = useNavigate();


  const testimonials = [
    {
      id: 1,
      title: "Amazing tool! Saved me months",
      description: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      author: "John Master",
      role: "Director, Spark.com",
      avatar: "/api/placeholder/48/48",
      bgColor: "#dedede"
    },
    {
      id: 2,
      title: "Amazing tool! Saved me months",
      description: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      author: "John Master",
      role: "Director, Spark.com",
      avatar: "/api/placeholder/48/48",
      bgColor: "#ffffff"
    },
    {
      id: 3,
      title: "Amazing tool! Saved me months",
      description: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      author: "John Master",
      role: "Director, Spark.com",
      avatar: "/api/placeholder/48/48",
      bgColor: "#ffffff"
    },
    {
      id: 4,
      title: "Amazing tool! Saved me months",
      description: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      author: "John Master",
      role: "Director, Spark.com",
      avatar: "/api/placeholder/48/48",
      bgColor: "#dedede"
    }
  ];

  const integrations = [
    {
      title: 'Audiomack',
      description: 'Add an Audiomack player to your Linktree',
      icon: appicon1
    },
    {
      title: 'Bandsintown',
      description: 'Drive ticket sales by listing your events',
      icon: appicon2
    },
    {
      title: 'Bonfire',
      description: 'Display and sell your custom merch',
      icon: appicon3
    },
    {
      title: 'Books',
      description: 'Promote books on your Linktree',
      icon: appicon4
    },
    {
      title: 'Buy Me A Gift',
      description: 'Let visitors support you with a small gift',
      icon: appicon5
    },
    {
      title: 'Cameo',
      description: 'Make impossible fan connections possible',
      icon: appicon6
    },
    {
      title: 'Clubhouse',
      description: 'Let your community in on the conversation',
      icon: appicon7
    },
    {
      title: 'Community',
      description: 'Build an SMS subscriber list',
      icon: appicon8
    },
    {
      title: 'Contact Details',
      description: 'Easily share downloadable contact details',
      icon: appicon9
    }
  ];

  return (
    <div className="home-container">
      <div className='header-content' >
        <header className="header">
          <div className="header-logo">
            <img
              src={sparkicon}
              alt="Logo"
              className="logo-image"
            />
            <span className="logo-text">SPARK</span>
            <span className="logo-trademark">TM</span>
            <span className="logo-separator">| Marketplace</span>
          </div>
          <button className="signup-button" onClick={() => navigate('/signup')} >Sign up free</button>
        </header>
      </div>

      <div className='content-container' >
        <div className="main-content">
          <section className="hero-section">
            <h1 className="hero-title">
              The easiest place to update and share your Connection
            </h1>
            <p className="hero-description">
              Help your followers discover everything you're sharing all over the internet, in one simple place. They'll thank you for it!
            </p>
            <button className="cta-button">Get your free Spark</button>
          </section>

          <section className="analytics-section">
            <img
              src={analystics}
              alt="Analytics Dashboard"
              className="analytics-image"
            />
          </section>
        </div>

        <div className="secondary-content">
          <section className="monetization-section">
            <div className="frame-container">
              {frameImages.map((src, index) => (
                <div key={index} className="frame-wrapper">
                  <img
                    src={src}
                    alt={`Frame ${index + 1}`}
                    className="frame-image"
                  />
                </div>
              ))}
            </div>
            <p className="monetization-text">
              Sell products and collect payments. It's monetization made simple.
            </p>
          </section>

          <section className="engagement-section">
            <h1 className="engagement-title">
              Analyze your audience and keep your followers engaged
            </h1>
            <p className="engagement-description">
              Track your engagement over time, monitor revenue and learn what's converting your audience. Make informed updates on the fly to keep them coming back.
            </p>
          </section>
        </div>

        <div className="layout">
          <section className="content-sharing">
            <div className="content-sharing__left">
              <h1>Share limitless content in limitless ways</h1>
              <p>
                Connect your content in all its forms and help followers find more of what they're looking for.
                Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more…
                It all comes together in one powerful place
              </p>
            </div>

            <div className="content-sharing__right">
              <div className="image-grid">
                <img src={shareImages[0]} alt="Content preview" className="square-image" />
                <img src={shareImages[1]} alt="Content preview" className="square-image" />
                <img src={shareImages[2]} alt="Content preview" className="wide-image" />
              </div>
              <p>Share your content in limitless ways on your Spark</p>
            </div>
          </section>

          <section className="customer">
            <div className="customer__content">
              <div className="customer__left">
                <p>Here's what our <span className='customer__text' >customer</span> has to say</p>
                <div className='button__container' >
                  <button className="customer__button">
                    Read customer stories
                  </button>
                </div>
              </div>
              <div className="customer__right">
                <img src={customerStory} alt="Icon" />
                <p>[short description goes in here] lorem ipsum is a placeholder text to demonstrate.</p>
              </div>
            </div>
          </section>

          {/* <section className="testimonials">
            <div key={1} className="testimonials__row">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card"
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <div className="testimonial-content">
                    <h3>{testimonial.title}</h3>
                    <p>{testimonial.description}</p>
                    <div className="profile">
                      <div className='profile__dot' ></div>
                      <div className="profile__info">
                        <span className="author">{testimonial.author}</span>
                        <span className="role">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>

        <div className="app-layout">
          <p className='app-link' >All Link Apps and Integrations</p>
          <section className="integration-list">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card">
                <div className="integration-icon">
                  <img src={integration.icon} alt={integration.title} />
                </div>
                <div className="integration-content">
                  <h3>{integration.title}</h3>
                  <p>{integration.description}</p>
                </div>
              </div>
            ))}
          </section>
          
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-top">
                <div className="auth-buttons">
                  <button className="btn-login">Log in</button>
                  <button className="btn-signup">Sign up free</button>
                </div>

                <div className="footer-links">
                  <div className="footer-column">
                    <a href="#">About Spark</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                    <a href="#">Social Good</a>
                    <a href="#">Contact</a>
                  </div>

                  <div className="footer-column">
                    <a href="#">Careers</a>
                    <a href="#">Getting Started</a>
                    <a href="#">Features and How-Tos</a>
                    <a href="#">FAQs</a>
                    <a href="#">Report a Violation</a>
                  </div>

                  <div className="footer-column">
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Notice</a>
                    <a href="#">Trust Center</a>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <p className="acknowledgment">
                  We acknowledge the Traditional Custodians of the land on which our office stands,
                  The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past,
                  present and emerging.
                </p>
                <div className="social-icons">
                  <img src={socialmediaicons} alt="socialmediaicons" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;