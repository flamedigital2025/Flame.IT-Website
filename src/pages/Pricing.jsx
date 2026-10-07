import React, { useState } from 'react';
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
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "Are there any long-term contracts or lock-in periods?",
            a: "No. All Flame.IT packages operate strictly month-to-month with zero lock-in contracts. If your capacity is full or your priorities change, you can pause or cancel at any time with 30 days notice."
        },
        {
            q: "Who owns our ad accounts, website assets, and content?",
            a: "Your clinic owns 100% of everything from day one. You pay ad spend directly to Google and Meta, and all campaigns, creatives, landing pages, and AI configurations remain your intellectual property permanently."
        },
        {
            q: "How does the strict 5 km postcode exclusivity work?",
            a: "To ensure maximum impact and eliminate conflicts of interest, we only partner with one dental clinic, one cosmetic clinic, and one aged care provider per 5 km catchment radius. Your local direct competitors cannot hire us."
        },
        {
            q: "How quickly can our campaigns and AI systems go live?",
            a: "Following your initial diagnostic and onboarding kickoff, your profiles are rebuilt, compliance reviews completed, and campaigns live within 7 to 10 business days."
        },
        {
            q: "Can we switch between Essential and Premium?",
            a: "Yes. Many clinics start with Essential to establish foundational AI search and Google Maps dominance, then scale to Premium when they want done-for-you video production and omnichannel social media."
        }
    ];

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

            {/* ===================== FAQ SECTION ===================== */}
            <section className="faq packages-faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">COMMON QUESTIONS</span>
                        <h2 className="section-title">Everything You Need to Know About Our Packages</h2>
                        <p className="section-subtitle">
                            Clear answers to the most common questions Australian practice directors ask before onboarding.
                        </p>
                    </div>
                    <div className="faq__list">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.q}
                                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                            >
                                <button
                                    type="button"
                                    className="faq-item__question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span>{faq.q}</span>
                                    <svg
                                        className="faq-item__chevron"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="faq-item__answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
