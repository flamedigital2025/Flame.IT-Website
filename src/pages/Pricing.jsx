import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Packages() {
    return (
        <div className="packages-page">
            <SEO
                title="Packages | Flame.IT Healthcare Solutions"
                canonical="/pricing"
            />

            <section className="packages-hero">
                <div className="container">
                    <div className="packages-header">
                        <span className="packages-eyebrow">TWO WAYS TO WORK WITH US</span>
                        <h1 className="packages-title">Two ways to work with us.</h1>
                    </div>

                    <div className="packages-grid">
                        {/* Essential Package */}
                        <div className="package-card package-card--light">
                            <div className="package-card__header">
                                <h2 className="package-name">Essential</h2>
                                <p className="package-desc">"Get named in the answer."</p>
                            </div>
                            <ul className="package-features">
                                <li>25 patient questions we track by name and report on monthly</li>
                                <li>Your listings, profiles and practitioner pages rebuilt</li>
                                <li>Four content pages a month, written compliant</li>
                                <li>Quarterly advertising compliance review and fix list</li>
                                <li>One Google Ads account managed, your budget paid direct</li>
                                <li>A one-page monthly report. One page, not forty.</li>
                            </ul>
                            <Link to="/contact" className="package-cta package-cta--light">Get Started →</Link>
                        </div>

                        {/* Premium Package */}
                        <div className="package-card package-card--dark">
                            <div className="package-card__header">
                                <h2 className="package-name">Premium</h2>
                                <p className="package-desc">"Get named, and get seen everywhere else."</p>
                            </div>
                            <ul className="package-features">
                                <li>Everything in Essential</li>
                                <li>Five short videos a month. You film on your phone, we do the rest.</li>
                                <li>We bring six ideas, you pick five. Nobody at your practice writes anything.</li>
                                <li>Sixteen designed posts a month</li>
                                <li>Instagram and Facebook run for you</li>
                                <li>Every item checked and approved before it publishes</li>
                            </ul>
                            <Link to="/contact" className="package-cta package-cta--dark">Get Started →</Link>
                        </div>
                    </div>

                    {/* Custom Package Banner */}
                    <div className="package-custom-banner">
                        <div className="package-custom-banner__glow" />
                        <div className="package-custom-banner__content">
                            <span className="package-custom-banner__eyebrow">✦ TAILORED FOR YOU</span>
                            <h3 className="package-custom-banner__title">Need something built just for your practice?</h3>
                            <p className="package-custom-banner__desc">Multi-location groups, specialist clinics, or unique workflows, We'll design a package around exactly what you need.<br />No templates, no compromises.</p>
                        </div>
                        <Link to="/contact" className="package-cta package-cta--custom">
                            <span>Let's Talk</span>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </Link>
                    </div>
                </div >
            </section >
        </div >
    );
}
