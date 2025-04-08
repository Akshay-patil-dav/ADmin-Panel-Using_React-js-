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
                        {/* <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="btn eduler-top-nav__profile-button "
                        >
                            <div className="nameboxbut">
                                <p className="eduler-top-nav__profile-name">John Doe</p>
                                <p className="eduler-top-nav__profile-role">Student</p>
                            </div>
                            <div className="eduler-top-nav__profile-avatar">
                                <User className="eduler-top-nav__profile-icon" />
                            </div>
                        </button> */}

                        <button type="button"
                        
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        class="btn  eduler-top-nav__profile-button "
                        >
                            <div className="">
                                <b className="eduler-top-nav__profile-name">Akshay </b>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
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
