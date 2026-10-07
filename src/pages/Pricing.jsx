import React from 'react';
import { Link } from 'react-router-dom';
import {
    CheckIcon,
    ShieldIcon,
    BoltIcon,
    SparkleIcon,
    LockIcon,
    ArrowRightIcon,
    PhoneIcon,
    StarRating
} from '../components/Icons';
import SEO from '../components/SEO';

export default function Packages() {
    return (
        <div className="packages-page">
            <SEO
                title="Packages | Flame.IT Healthcare Solutions"
                description="Transparent, compliant clinical growth packages for Australian dental, cosmetic and aged care providers. Essential and Premium tiers with zero lock-in contracts."
                canonical="/pricing"
            />

            {/* ===================== HERO (FLAME.IT UNIFIED THEME) ===================== */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img
                        src="/images/pricing-hero.jpg"
                        alt="Transparent, compliant clinical growth packages for Australian healthcare practices"
                    />
                    <div className="page-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero__content">
                        <div className="page-hero__badge">
                            <span className="badge-dot"></span>
                            <span>INVESTMENT TIERS</span>
                        </div>
                        <h1 className="page-hero__title">
                            Two Ways to Work{' '}
                            <span className="page-hero__title-highlight">With Us</span>
                        </h1>
                        <p className="page-hero__subtitle">
                            Predictable, compliant growth infrastructure. No long-term contracts, no hidden markups, and no forty-page confusing reports.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== PACKAGES SECTION ===================== */}
            <section className="packages-section" id="packages">
                <div className="container">
                    {/* 2-Card Grid */}
                    <div className="packages-grid">
                        {/* ================= ESSENTIAL PACKAGE ================= */}
                        <div className="package-card package-card--essential">
                            <div className="package-card__top">
                                <div className="package-card__header-row">
                                    <div className="package-card__title-grp">
                                        <div className="package-icon-wrap package-icon-wrap--blue">
                                            <BoltIcon size={20} color="#024BFD" />
                                        </div>
                                        <div>
                                            <h3 className="package-name">Essential</h3>
                                            <p className="package-quote">"Get named in the answer."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-card__rule" />

                            <div className="package-card__body">
                                <span className="package-features-label">WHAT'S INCLUDED:</span>
                                <ul className="package-features">
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>25 patient questions we track by name and report on monthly</span>
                                    </li>
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Your listings, profiles and practitioner pages rebuilt</span>
                                    </li>
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Four content pages a month, written compliant</span>
                                    </li>
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Quarterly advertising compliance review and fix list</span>
                                    </li>
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>One Google Ads account managed, your budget paid direct</span>
                                    </li>
                                    <li>
                                        <span className="p-check"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>A one-page monthly report. One page, not forty.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="package-card__footer">
                                <Link to="/contact" className="btn btn--outline btn--lg package-cta-btn">
                                    <span>Get Started →</span>
                                </Link>
                            </div>
                        </div>

                        {/* ================= PREMIUM PACKAGE (FEATURED) ================= */}
                        <div className="package-card package-card--premium">
                            <div className="package-card__top">
                                <div className="package-card__header-row">
                                    <div className="package-card__title-grp">
                                        <div className="package-icon-wrap package-icon-wrap--glow">
                                            <SparkleIcon size={20} color="#FFFFFF" />
                                        </div>
                                        <div>
                                            <h3 className="package-name">Premium</h3>
                                            <p className="package-quote">"Get named, and get seen everywhere else."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="package-card__rule" />

                            <div className="package-card__body">
                                <span className="package-features-label">EVERYTHING IN ESSENTIAL, PLUS:</span>
                                <ul className="package-features">
                                    <li className="feature-highlight">
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span><strong>Everything in Essential</strong></span>
                                    </li>
                                    <li className="feature-highlight">
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Five short videos a month. You film on your phone, we do the rest.</span>
                                    </li>
                                    <li className="feature-highlight">
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>We bring six ideas, you pick five. Nobody at your practice writes anything.</span>
                                    </li>
                                    <li>
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Sixteen designed posts a month</span>
                                    </li>
                                    <li>
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Instagram and Facebook run for you</span>
                                    </li>
                                    <li>
                                        <span className="p-check p-check--featured"><CheckIcon size={13} color="#024BFD" /></span>
                                        <span>Every item checked and approved before it publishes</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="package-card__footer">
                                <Link to="/contact" className="btn btn--primary btn--lg package-cta-btn">
                                    <span>Get Started →</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Custom Package Banner */}
                    <div className="package-custom-banner">
                        <div className="package-custom-banner__glow" aria-hidden="true" />
                        <div className="package-custom-banner__content">
                            <span className="package-custom-banner__eyebrow">✦ TAILORED FOR YOU</span>
                            <h3 className="package-custom-banner__title">
                                Need something built just for your practice?
                            </h3>
                            <p className="package-custom-banner__desc">
                                Multi-location groups, specialist clinics, or unique workflows — we'll design a package around exactly what you need. No templates, no compromises.
                            </p>
                        </div>
                        <div className="package-custom-banner__action">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                <span>Let's Talk</span>
                                <ArrowRightIcon size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
