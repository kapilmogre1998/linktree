import React from 'react'
import './MobilePreview.scss'

const MobilePreview = () => {

    return (
        <div className="mobile-preview-container">
            <div className="mobile-frame">
                <div className='mobile-profile-container' >
                    <div className="mobile-profile-section">
                        <div className="mobile-profile-image">
                            <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/frame-11.png" alt="Profile" />
                        </div>
                        <div className="mobile-username">@opopo_08</div>
                    </div>
                    <div className="button-group">
                        <div className="toggle-button">
                            <div className="active-button">link</div>
                            <div className="inactive-button">Shop</div>
                        </div>
                    </div>
                    <div className="links-section">
                        <div className="link-item">
                            <div className="link-thumbnail">
                                <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/add.png" alt="YouTube" />
                            </div>
                            <span>Latest YouTube Video</span>
                        </div>
                        <div className="link-item">
                            <div className="link-thumbnail">
                                <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/skill-ic.png" alt="Instagram" />
                            </div>
                            <span>Latest Instagram reel</span>
                        </div>
                    </div>
                </div>

                <div className='mobile-preview-footer-container' >
                    <button className="connect-button">Get Connected</button>
                    <div className="footer">
                        <div className="spark-logo">
                            <img src="https://dashboard.codeparrot.ai/api/image/Z7sOYjHWD6EJo6xw/group.png" alt="Spark Logo" />
                            <span className="spark-text">SPARK</span>
                            <span className="tm">TM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobilePreview
