import React, { useState, useRef, useEffect } from 'react';
import { 
    Menu, 
    Bell, 
    Mail, 
    Search, 
    User,
    Settings,
    LogOut,
    UserCircle,
    HelpCircle,
    Moon
} from 'lucide-react';

const TopNav = ({ toggleSidebar }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="eduler-top-nav">
            <div className="eduler-top-nav__container">
                <div className="eduler-top-nav__left">
                    <button 
                        onClick={toggleSidebar}
                        className="eduler-top-nav__menu-btn"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="eduler-top-nav__menu-icon" />
                    </button>
                    <div className="eduler-top-nav__brand">
                        <span className="eduler-top-nav__logo">Eduler</span>
                    </div>
                </div>

                <div className="eduler-top-nav__search">
                    <Search className="eduler-top-nav__search-icon" />
                    <input
                        type="text"
                        placeholder="Search anything"
                        className="eduler-top-nav__search-input"
                    />
                </div>

                <div className="eduler-top-nav__actions">
                    <button className="eduler-top-nav__action-btn" aria-label="Messages">
                        <Mail className="eduler-top-nav__action-icon" />
                    </button>
                    <button className="eduler-top-nav__action-btn" aria-label="Notifications">
                        <Bell className="eduler-top-nav__action-icon" />
                    </button>
                    
                    <div className="eduler-top-nav__profile" ref={profileRef}>
                        <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="eduler-top-nav__profile-button"
                        >
                            <div className="eduler-top-nav__profile-info">
                                <p className="eduler-top-nav__profile-name">John Doe</p>
                                <p className="eduler-top-nav__profile-role">Student</p>
                            </div>
                            <div className="eduler-top-nav__profile-avatar">
                                <User className="eduler-top-nav__profile-icon" />
                            </div>
                        </button>

                        <div className={`eduler-dropdown ${isProfileOpen ? 'eduler-dropdown--active' : ''}`}>
                            <div className="eduler-dropdown__content">
                                <a href="#profile" className="eduler-dropdown__item">
                                    <UserCircle className="eduler-dropdown__item-icon" />
                                    Profile
                                </a>
                                <a href="#settings" className="eduler-dropdown__item">
                                    <Settings className="eduler-dropdown__item-icon" />
                                    Settings
                                </a>
                                <a href="#help" className="eduler-dropdown__item">
                                    <HelpCircle className="eduler-dropdown__item-icon" />
                                    Help Center
                                </a>
                                <a href="#theme" className="eduler-dropdown__item">
                                    <Moon className="eduler-dropdown__item-icon" />
                                    Dark Mode
                                </a>
                                <div className="eduler-dropdown__divider"></div>
                                <a href="#logout" className="eduler-dropdown__item eduler-dropdown__item--danger">
                                    <LogOut className="eduler-dropdown__item-icon" />
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
