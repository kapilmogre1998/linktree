import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import sparkIcon from '../../assets/spark-icon.png';
import loginImg from '../../assets/login-img.png';
import './LoginPage.scss';

const LoginPage = () => {
  // Form state
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Error state
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

  // Validation functions
  const validateUsername = (value) => {
    if (!value.trim()) {
      return 'username is required';
    }
    // if (value.length < 3) {
    //   return 'Username must be at least 3 characters long';
    // }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'password is required';
    }
    // if (value.length < 6) {
    //   return 'password must be at least 6 characters long';
    // }
    return '';
  };

  // Handle input changes with real-time validation
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    
    // Clear error when user starts typing
    if (errors.username) {
      setErrors(prev => ({
        ...prev,
        username: ''
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    // Clear error when user starts typing
    if (errors.password) {
      setErrors(prev => ({
        ...prev,
        password: ''
      }));
    }
  };

  // Form submission handler with validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    
    // Update errors state
    setErrors({
      username: usernameError,
      password: passwordError,
      general: ''
    });

    // If no validation errors, proceed with login
    if (!usernameError && !passwordError) {
      // try {
      //   // Add your login API call here
      //   // const response = await loginApi(username, password);
        
      //   // Simulate API call for demonstration
      //   const mockApiCall = () => {
      //     return new Promise((resolve, reject) => {
      //       // Simulate API response
      //       if (username === 'testuser' && password === 'password123') {
      //         resolve({ success: true });
      //       } else {
      //         reject(new Error('Invalid credentials'));
      //       }
      //     });
      //   };

      //   await mockApiCall();
      //   // Handle successful login
      //   console.log('Login successful');
        
      // } catch (error) {
      //   // Handle login error
      //   setErrors(prev => ({
      //     ...prev,
      //     general: 'Invalid username or password'
      //   }));
      // }
    }
  };

  return (
    <div className="login-container">
      <div className='header-form-container'>
        <div className="logo">
          <img src={sparkIcon} alt="Spark Logo" />
          <h1>SPARK</h1>
          <p>TM</p>
        </div>
        <div className="form-section">
          <div className="form-content">
            <form onSubmit={handleSubmit} className="login-form">
              <h1>Sign in to your Spark</h1>

              {errors.general && (
                <div className="error-message" role="alert">
                  {errors.general}
                </div>
              )}

              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  onBlur={() => setErrors(prev => ({
                    ...prev,
                    username: validateUsername(username)
                  }))}
                  placeholder="Spark/Username"
                  className={`form-input ${errors.username ? 'error' : ''}`}
                  aria-invalid={errors.username ? 'true' : 'false'}
                />
                {errors.username && (
                  <div className="error-message" role="alert">
                    {errors.username}
                  </div>
                )}
              </div>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={() => setErrors(prev => ({
                    ...prev,
                    password: validatePassword(password)
                  }))}
                  placeholder="Password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <div className="error-message" role="alert">
                    {errors.password}
                  </div>
                )}
              </div>

              <button type="submit" className="login-button">
                Sign in
              </button>

              <div className="form-links">
                <a href="#forgot-password" className="forgot-password">
                  Forgot password?
                </a>
                <div className="signup-link">
                  <span>Don't have an account? </span>
                  <a href="#signup">Sign up</a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="footer">
          <p>
            This site is protected by reCAPTCHA and the{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </footer>
      </div>

      <div className="image-section">
        <div className="image-container">
          <img
            src={loginImg}
            alt="Login page illustration"
            className="side-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;