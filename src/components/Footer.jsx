import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, MedalIcon, SparkleIcon, LockIcon, ShieldIcon, PhoneIcon, MailIcon, BoltIcon } from './Icons';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__top">
                    {/* Brand Column */}
                    <div className="footer__brand">
                        <Link to="/" className="navbar__logo footer__logo" aria-label="Flame.IT Homepage">
                            <img src="/images/logo.png" alt="Flame.IT" className="navbar__logo-img" />
                        </Link>
                        <p className="footer__desc">
                            Australian IT solutions team specializing in patient acquisition and practice systems for Dental Clinics, Cosmetology &amp; Aesthetics, and Aged Care &amp; Retirement Living.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="footer__links">
                        <div className="footer__col">
                            <h4>Growth Services</h4>
                            <ul>
                                <li><Link to="/services">Free Growth &amp; Digital Audit</Link></li>
                                <li><Link to="/services">AHPRA-Compliant Social Media</Link></li>
                                <li><Link to="/services">AEO &amp; GEO AI Search</Link></li>
                                <li><Link to="/services">Local SEO &amp; Google Maps</Link></li>
                                <li><Link to="/services">24/7 AI Receptionist &amp; Booking</Link></li>
                                <li><Link to="/services">Complete IT &amp; CRM Management</Link></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4>Company &amp; Solutions</h4>
                            <ul>
                                <li><Link to="/about">About &amp; Core Mission</Link></li>
                                <li><Link to="/pricing">Packages</Link></li>
                                <li><Link to="/services">Healthcare Solutions</Link></li>
                                <li><Link to="/contact">Book Free Audit</Link></li>
                            </ul>
                        </div>

                        <div className="footer__col">
                            <h4>Contact &amp; Headquarters</h4>
                            <ul>
                                <li>
                                    <a href="mailto:enquiry.flamedigital@gmail.com">
                                        <MailIcon size={15} color="#60a5fa" />
                                        <span>enquiry.flamedigital@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:1300352634">
                                        <PhoneIcon size={15} color="#60a5fa" />
                                        <span>1300 352 634 (1300 FLAME IT)</span>
                                    </a>
                                </li>
                                <li>
                                    <Link to="/contact" className="footer__cta-link">
                                        <BoltIcon size={14} color="#60a5fa" />
                                        <span>Serving Sydney, Melbourne, Brisbane, Perth, Adelaide and all over Australia</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; 2026 Flame.IT. All rights reserved.
                    </p>
                    <div className="footer__bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
