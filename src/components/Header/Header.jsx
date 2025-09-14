import React, { useState } from 'react';
import './Header.css';
// عشان نستخدم الأيقونات دي، لازم تكون ضايف مكتبة Font Awesome لمشروعك
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CopyLink from '../../Links/CopyLink';

const Header = () => {
    // هنا بنعمل متغير عشان نعرف قائمة الموبايل مفتوحة ولا لأ
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header-container">
            <nav className="navbar">
                <a href="#home" className="logo"> My Portfolio</a>

                {/* ضفنا هنا كلاس متغير عشان نظهر ونخفي القائمة */}
                <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About me</a></li>
                    <CopyLink />
                    <li><a href="https://wa.me/201020774553">Contact me</a></li>
                </ul>

                <a href="tel:+201020774553" className="hire-me-btn">Hire Me</a>

                {/* دي أيقونة الهمبرجر اللي بتظهر في الموبايل بس */}
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
            </nav>
        </header>
    );
}

export default Header;