import React, {useState} from 'react';
// import ImageSection from './ImageSection';
// import HeaderSection from './HeaderSection';
// import UsernameInput from './UsernameInput';
// import CategorySelection from './CategorySelection';
// import ContinueButton from './ContinueButton';

const LayoutComponent = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '40px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        flexGrow: 1,
        maxWidth: '60%',
        padding: '20px'
      }}>
        <HeaderSection />
        <UsernameInput />
        <CategorySelection />
        {/* <ContinueButton /> */}
      </div>
      <div style={{
        flexGrow: 1,
        maxWidth: '40%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <ImageSection imageSrc="https://dashboard.codeparrot.ai/api/image/Z7dmv68BBwoP-o01/frame-2.png" />
      </div>
    </div>
  );
};

export default LayoutComponent;


const ContinueButton = ({ onClick = () => {} }) => {
  const buttonStyles = {
    width: '100%',
    maxWidth: '592px',
    height: '48px',
    backgroundColor: '#28a263',
    borderRadius: '64px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    boxSizing: 'border-box',
    transition: 'background-color 0.2s ease',
  };

  const textStyles = {
    color: '#FFFFFF',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '-0.32px',
    lineHeight: '24px',
    margin: 0,
    userSelect: 'none',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = '#229357';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = '#28a263';
  };

  return (
    <button 
      style={buttonStyles}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span style={textStyles}>Continue</span>
    </button>
  );
};

const CategorySelection = ({ defaultCategory = 'Business' }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: '360px',
    maxWidth: '800px',
    padding: '20px',
    fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '21px',
    color: '#000000',
    marginBottom: '20px'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'flex-start'
  };

  const buttonStyle = (category) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '10px 17px',
    borderRadius: '24px',
    border: '1px solid #e0e2d9',
    background: selectedCategory === category ? '#28a263' : '#ffffff',
    color: selectedCategory === category ? '#ffffff' : '#000000',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '21px',
    transition: 'all 0.2s ease',
    minWidth: 'fit-content',
    ':hover': {
      background: selectedCategory === category ? '#28a263' : '#f5f5f5'
    }
  });

  const iconStyle = {
    marginRight: '12px',
    fontSize: '14px'
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        Select one category that best describes your Linktree:
      </div>
      <div style={gridStyle}>
        {categories.map((category) => (
          <button
            key={category.name}
            style={buttonStyle(category.name)}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span style={iconStyle}>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const UsernameInput = ({ 
  placeholder = "Enter username",
  onChange = () => {},
  value = "",
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    width: '100%',
    maxWidth: '588px',
    minWidth: '300px',
    height: '48px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f6f7f5',
    borderRadius: '8px',
    padding: '0 10px',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    lineHeight: '48px',
    color: '#000000',
    fontWeight: 400,
    marginRight: '10px'
  };

  const inputStyle = {
    flexGrow: 1,
    height: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <span style={labelStyle}>Tell us your username</span>
      <input
        type="text"
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />
    </div>
  );
};

const HeaderSection = ({ 
  title = "Tell us about yourself",
  subtitle = "For a personalized Spark experience"
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minWidth: '300px',
      padding: '20px 0',
      backgroundColor: 'inherit'
    }}>
      <h1 style={{
        margin: '0',
        fontFamily: 'Inter, sans-serif',
        fontSize: '48px',
        fontWeight: 800,
        lineHeight: '57.6px',
        letterSpacing: '-2px',
        color: '#000000',
        textAlign: 'left'
      }}>
        {title}
      </h1>
      <p style={{
        margin: '16px 0 0 0',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '-0.32px',
        color: '#676b5f',
        textAlign: 'left'
      }}>
        {subtitle}
      </p>
    </div>
  );
};

const ImageSection = ({ imageSrc = 'https://dashboard.codeparrot.ai/api/image/Z7dmv68BBwoP-o01/frame.png' }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minWidth: '300px',
      minHeight: '500px',
      backgroundColor: '#254f1a',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <img 
        src={imageSrc}
        alt="Section Image"
        style={{
          width: 'auto',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      />
    </div>
  );
};