import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { LogoIcon } from './Icons';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const navLinks = [
        { to: '/services', label: 'Services' },
        { to: '/about', label: 'About' },
        { to: '/pricing', label: 'Packages' },
        { to: '/contact', label: 'Contact' },
    ];

    const isLinkActive = (to) => {
        return location.pathname === to || location.pathname.startsWith(`${to}/`);
    };

    return (
        <nav
            className={`navbar navbar--dark-hero ${scrolled ? 'scrolled' : ''}`}
            aria-label="Main Navigation"
        >
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo" aria-label="Flame.IT Homepage">
                    <img src="/images/logo.png" alt="Flame.IT" className="navbar__logo-img" />
                </Link>

                <ul className="navbar__links">
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.to);
                        return (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={active ? 'active' : ''}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <div className="navbar__actions">
                    <Link to="/contact" className="btn btn--primary navbar__btn-strategy">
                        Book Free Strategy Call
                    </Link>
                </div>

                <button
                    type="button"
                    className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.to);
                        return (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={active ? 'active' : ''}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="navbar__mobile-actions">
                    <Link
                        to="/contact"
                        className="btn btn--primary navbar__btn-strategy"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setMobileOpen(false)}
                    >
                        Book Free Strategy Call
                    </Link>
                </div>
            </div>
        </nav>
    );
}
