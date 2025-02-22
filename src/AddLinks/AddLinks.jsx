import React, { useState } from 'react';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', backgroundColor: '#f3f3f1' }}>
      <Header style={{ flexGrow: 0, padding: '20px', backgroundColor: '#f3f3f1' }} />
      <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
        <Sidebar style={{ flexGrow: 0, width: '230px', height: 'auto', backgroundColor: '#fff' }} />
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '20px' }}>
          <MainContent style={{ flexGrow: 1, height: 'auto', backgroundColor: '#f3f3f1' }} />
          <ProfileSection style={{ flexGrow: 0, height: 'auto', backgroundColor: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '20px' }} />
          <BannerSection style={{ flexGrow: 0, height: 'auto', backgroundColor: '#fff', borderRadius: '8px', padding: '16px' }} />
        </div>
      </div>
      <Footer style={{ flexGrow: 0, height: '50px', backgroundColor: '#f3f3f1' }} />
    </div>
  );
};

export default Layout;

const Footer = ({ style }) => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    minWidth: '190px',
    ...style,
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '190px',
    height: '50px',
    backgroundColor: '#29a263',
    borderRadius: '15px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  const textStyle = {
    color: '#ffffff',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
    fontWeight: 500,
    margin: 0,
  };

  const handleSave = () => {
    // Handle save functionality
    console.log('Save clicked');
  };

  return (
    <div style={footerStyle}>
      <button 
        style={buttonStyle}
        onClick={handleSave}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#238b54'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#29a263'}
      >
        <span style={textStyle}>Save</span>
      </button>
    </div>
  );
};

Footer.defaultProps = {
  style: {},
};

const BannerSection = ({ username = '@opopo_08', handle = '/opopo_08', avatarUrl = 'https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/rectangl.png', initialBgColor = '#342b26' }) => {
  const [backgroundColor, setBackgroundColor] = useState(initialBgColor);
  const [colorInput, setColorInput] = useState(initialBgColor);

  const colorOptions = ['#342b26', '#FFFFFF', '#000000'];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    setColorInput(color);
  };

  const handleCustomColorSubmit = (e) => {
    e.preventDefault();
    if (/^#[0-9A-F]{6}$/i.test(colorInput)) {
      setBackgroundColor(colorInput);
    }
  };

  return (
    <div style={{
      width: '100%',
      minWidth: '580px',
      padding: '20px',
      backgroundColor: 'inherit'
    }}>
      {/* Banner Title */}
      <div style={{
        fontSize: '20px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        marginBottom: '20px'
      }}>
        Banner
      </div>

      {/* Main Banner Container */}
      <div style={{
        width: '100%',
        height: '308px',
        backgroundColor: backgroundColor,
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Avatar */}
        <div style={{
          width: '124px',
          height: '124px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <img 
            src={avatarUrl} 
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Username */}
        <div style={{
          color: '#FFFFFF',
          fontSize: '24px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          marginBottom: '10px'
        }}>
          {username}
        </div>

        {/* Handle */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.72)',
          fontSize: '16px',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/frame-3.png" 
            alt="Handle icon"
            style={{
              width: '18px',
              height: '21px'
            }}
          />
          {handle}
        </div>
      </div>

      {/* Color Selection Section */}
      <div style={{ marginTop: '20px' }}>
        <div style={{
          fontSize: '13px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          marginBottom: '15px'
        }}>
          Custom Background Color
        </div>

        {/* Color Options */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {colorOptions.map((color) => (
            <div
              key={color}
              onClick={() => handleColorChange(color)}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: color,
                cursor: 'pointer',
                border: color === '#FFFFFF' ? '1px solid rgba(0, 0, 0, 0.18)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Custom Color Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            backgroundColor: colorInput
          }} />
          <input
            type="text"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            onBlur={handleCustomColorSubmit}
            style={{
              width: '231px',
              height: '48px',
              backgroundColor: '#f6f7f5',
              border: 'none',
              borderRadius: '9px',
              padding: '0 15px',
              fontSize: '13px',
              fontFamily: 'Poppins, sans-serif'
            }}
            placeholder="Enter hex color code"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ style }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '592px',
      padding: '16px',
      boxSizing: 'border-box',
      ...style
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {/* Profile Title Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <label style={{
            color: '#676b5f',
            fontSize: '14px',
            fontFamily: 'Inter',
            lineHeight: '21px'
          }}>
            Profile Title
          </label>
          <div style={{
            backgroundColor: '#f6f7f5',
            borderRadius: '8px',
            height: '48px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <input 
              type="text"
              defaultValue="@opopo_08"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#000000',
                fontSize: '14px',
                fontFamily: 'Inter',
                lineHeight: '48px',
                paddingLeft: '16px',
                width: '100%',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Bio Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <label style={{
            color: '#676b5f',
            fontSize: '14px',
            fontFamily: 'Inter',
            lineHeight: '21px'
          }}>
            Bio
          </label>
          <div style={{
            position: 'relative',
            backgroundColor: '#f6f7f5',
            borderRadius: '8px',
            padding: '16px',
            boxSizing: 'border-box'
          }}>
            <textarea
              placeholder="Bio"
              maxLength={80}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                minHeight: '96px',
                fontSize: '14px',
                fontFamily: 'Inter',
                lineHeight: '21px',
                outline: 'none',
                resize: 'none'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '16px',
              color: '#676b5f',
              fontSize: '12px',
              fontFamily: 'Inter',
              lineHeight: '18px'
            }}>
              0 / 80
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileSection.defaultProps = {
  style: {}
};

const MainContent = ({ style = {} }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minWidth: '360px',
      backgroundColor: '#f3f3f1',
      ...style
    }}>
      {/* Profile Section */}
      <div style={{
        width: '328px',
        height: '237px',
        backgroundColor: '#342b26',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '20px'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/frame-11.png"
          alt="Profile"
          style={{
            width: '96px',
            height: '94px',
            marginTop: '20px'
          }}
        />
        <div style={{
          color: '#ffffff',
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 700,
          marginTop: '10px'
        }}>
          @opopo_08
        </div>
      </div>

      {/* Link/Shop Toggle */}
      <div style={{
        width: '244px',
        height: '43px',
        backgroundColor: '#c9c9c9',
        borderRadius: '24px',
        border: '1px solid #bfbfbf',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{
          width: '120px',
          height: '37px',
          backgroundColor: '#28a263',
          borderRadius: '100px',
          margin: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 500,
          cursor: 'pointer'
        }}>
          link
        </div>
        <div style={{
          flex: 1,
          textAlign: 'center',
          color: '#595959',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 500,
          cursor: 'pointer'
        }}>
          Shop
        </div>
      </div>

      {/* YouTube Link */}
      <div style={{
        width: '275px',
        height: '48px',
        backgroundColor: '#c9c9c9',
        borderRadius: '100px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#ffffff',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/add.png" alt="YouTube" style={{ width: '27px', height: '27px' }} />
        </div>
        <span style={{
          marginLeft: '12px',
          color: '#1e1e20',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 500
        }}>
          Latest YouTube Video
        </span>
      </div>

      {/* Instagram Link */}
      <div style={{
        width: '275px',
        height: '48px',
        backgroundColor: '#c9c9c9',
        borderRadius: '100px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        cursor: 'pointer'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#ffffff',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/skill-ic.png" alt="Instagram" style={{ width: '28px', height: '28px' }} />
        </div>
        <span style={{
          marginLeft: '12px',
          color: '#1e1e20',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 500
        }}>
          Latest Instagram reel
        </span>
      </div>

      {/* Get Connected Button */}
      <button style={{
        width: '178px',
        height: '35px',
        backgroundColor: '#35ca7d',
        borderRadius: '30px',
        border: 'none',
        color: '#ffffff',
        fontFamily: 'Poppins',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        marginBottom: '20px'
      }}>
        Get Connected
      </button>

      {/* Spark Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/group.png" alt="Spark" style={{ width: '24px', height: '24px' }} />
        <span style={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: '18px',
          fontWeight: 800,
          color: '#000000'
        }}>
          SPARK
          <sup style={{
            fontSize: '2.5px',
            fontWeight: 800
          }}>TM</sup>
        </span>
      </div>
    </div>
  );
};


const Header = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px',
      minWidth: '400px',
      backgroundColor: 'inherit',
      ...style
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'Pacifico, cursive',
        fontSize: '24px',
        letterSpacing: '0.48px',
        color: '#000000',
        fontWeight: 400,
        cursor: 'default'
      }}>
        Hi, Jenny Wilson!
      </h1>
      <p style={{
        margin: '8px 0 0 0',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        color: '#383838',
        fontWeight: 400,
        cursor: 'default'
      }}>
        Congratulations. You got a great response today.
      </p>
    </div>
  );
};

Header.defaultProps = {
  style: {}
};


const Sidebar = ({ style }) => {
  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '230px',
    minWidth: '230px',
    height: '100%',
    ...style
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '36px 30px',
    gap: '10px',
  };

  const logoStyle = {
    width: '43px',
    height: '44.51px',
  };

  const logoTextStyle = {
    fontFamily: 'Poppins',
    fontSize: '32px',
    fontWeight: 600,
    letterSpacing: '0.64px',
    color: '#000000',
    margin: 0,
  };

  const navItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 30px',
    gap: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const navTextStyle = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 400,
    color: '#676767',
    margin: 0,
  };

  const activeNavTextStyle = {
    ...navTextStyle,
    fontSize: '18px',
    fontWeight: 500,
    color: '#28a263',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  const userStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 30px',
    marginTop: 'auto',
    gap: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoContainerStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/group-1.png" alt="Logo" style={logoStyle} />
        <h1 style={logoTextStyle}>Spark</h1>
      </div>

      <div style={{ flex: 1 }}>
        <div 
          style={{ ...navItemStyle, backgroundColor: '#f8f8f8' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/frame.png" alt="Links" style={iconStyle} />
          <p style={activeNavTextStyle}>Links</p>
        </div>

        <div 
          style={navItemStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/vector.png" alt="Appearance" style={iconStyle} />
          <p style={navTextStyle}>Appearance</p>
        </div>

        <div 
          style={navItemStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/combined.png" alt="Analytics" style={iconStyle} />
          <p style={navTextStyle}>Analytics</p>
        </div>

        <div 
          style={navItemStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/combined-2.png" alt="Settings" style={iconStyle} />
          <p style={navTextStyle}>Settings</p>
        </div>
      </div>

      <div 
        style={userStyle}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f8f8'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <img src="https://dashboard.codeparrot.ai/api/image/Z7dr5f3atcswnovW/frame-2.png" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        <p style={navTextStyle}>Jenny Wilson</p>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  style: {}
};
