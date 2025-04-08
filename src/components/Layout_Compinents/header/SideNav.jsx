import React, { useState } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    PenTool,
    Users2,
    BarChart,
    GraduationCap,
    Calendar,
    Mic,
    HelpCircle,
    ChevronRight,
    ChevronDown,
    FileText,
    Video,
    MessageSquare
} from 'lucide-react';

const SideNav = ({ isOpen }) => {
    const [expandedItems, setExpandedItems] = useState([]);

    const toggleExpand = (itemId) => {
        setExpandedItems((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId)
                : [...prev, itemId]
        );
    };

    const navItems = [
        {
            id: 'dashboard',
            icon: LayoutDashboard,
            label: 'Dashboard',
            subItems: [
                { id: 'notes', label: 'Notes', icon: FileText },
                { id: 'lectures', label: 'Lectures', icon: Video },
                { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            ]
        },
        {
            id: 'documents',
            icon: BookOpen,
            label: 'Documents',
            subItems: [
                { id: 'notes', label: 'Notes', icon: FileText },
                { id: 'lectures', label: 'Lectures', icon: Video },
                { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            ]
        },
        { id: 'ai-writer', icon: PenTool, label: 'AI Writer' },
        {
            id: 'ai-teachers',
            icon: Users2,
            label: 'AI Teachers',
            subItems: [
                { id: 'math', label: 'Mathematics', icon: Users2 },
                { id: 'science', label: 'Science', icon: Users2 },
                { id: 'language', label: 'Language', icon: Users2 },
            ]
        },
        { id: 'analytics', icon: BarChart, label: 'Analytics' },
        { id: 'courses', icon: GraduationCap, label: 'Courses' },
        { id: 'events', icon: Calendar, label: 'Events' },
    ];

    const voiceTools = [
        { id: 'speech-to-text', icon: Mic, label: 'Speech to Text' },
    ];

    return (
        <aside className={`eduler-side-nav ${isOpen ? 'eduler-side-nav--open' : ''}`}>
            <div className="eduler-side-nav__container">
                <div className="eduler-side-nav__content">
                    <nav className="eduler-side-nav__menu">
                        {navItems.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => toggleExpand(item.id)}
                                    className="eduler-side-nav__item"
                                >
                                    <item.icon className="eduler-side-nav__item-icon" />
                                    <span className="eduler-side-nav__item-content">{item.label}</span>
                                    {item.subItems ? (
                                        <ChevronDown
                                            className={`eduler-side-nav__item-arrow ${expandedItems.includes(item.id) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    ) : (
                                        <ChevronRight className="eduler-side-nav__item-arrow" />
                                    )}
                                </button>
                                {item.subItems && (
                                    <div
                                        className={`eduler-side-nav__subitems ${expandedItems.includes(item.id)
                                                ? 'eduler-side-nav__subitems--expanded'
                                                : ''
                                            }`}
                                    >
                                        {item.subItems.map((subItem) => (
                                            <a
                                                key={subItem.id}
                                                href={`#${item.id}-${subItem.id}`}
                                                className="eduler-side-nav__subitem"
                                            >
                                                <subItem.icon className="eduler-side-nav__subitem-icon" />
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="eduler-side-nav__section">
                        <h3 className="eduler-side-nav__section-title">
                            AI Voice Tools
                        </h3>
                        <nav className="eduler-side-nav__menu">
                            {voiceTools.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="eduler-side-nav__item"
                                >
                                    <item.icon className="eduler-side-nav__item-icon" />
                                    <span className="eduler-side-nav__item-content">{item.label}</span>
                                    <ChevronRight className="eduler-side-nav__item-arrow" />
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="eduler-side-nav__footer">
                    <a
                        href="#help"
                        className="eduler-side-nav__help"
                    >
                        <HelpCircle className="eduler-side-nav__help-icon" />
                        Help & Support
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;
