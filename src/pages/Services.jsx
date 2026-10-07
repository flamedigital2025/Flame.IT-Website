import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, StarRating } from '../components/Icons';
import SEO from '../components/SEO';

export default function Services() {
    const [postcode, setPostcode] = useState('');
    const [postcodeStatus, setPostcodeStatus] = useState(null);

    const handlePostcodeCheck = (e) => {
        e.preventDefault();
        if (postcode.trim().length >= 3) {
            setPostcodeStatus('available');
        }
    };

    return (
        <div className="services-page">
            <SEO canonical="/services" />

            {/* ===================== HERO ===================== */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/images/services-hero.jpg" alt="Modern dental operatory and clinical diagnostic infrastructure" />
                    <div className="page-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero__content">
                        <div className="page-hero__badge">
                            <span className="badge-dot"></span>
                            <span>Australian Healthcare Growth Infrastructure</span>
                        </div>
                        <h1 className="page-hero__title">
                            Six Connected IT Solutions
                            <span className="page-hero__title-highlight">for Dental, Cosmetic &amp; Aged Care Providers</span>
                        </h1>
                        <p className="page-hero__subtitle">
                            Six connected IT solutions for dental, cosmetic and aged care providers: audit, social, AI search, local SEO, AI receptionist and CRM. Built for Australia.
                        </p>
                        <div className="page-hero__ctas">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                <span>Book Free Audit</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                        </div>
                        <div className="page-hero__proof">
                            <StarRating count={5} size={15} />
                            <span>AHPRA &amp; Privacy Act Aligned across all cities in <strong>Australia</strong></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== SERVICES DEEP DIVE ===================== */}
            <section className="services-detail">
                <div className="container">
                    {/* Service 1 */}
                    <div className="service-row" id="audit">
                        <div className="service-row__content">
                            <span className="service-row__number">01</span>
                            <h2 className="service-row__title">Free Growth &amp; Digital Audit for Your Clinic or Care Home</h2>
                            <p className="service-row__desc">
                                Free audit of your website, Google Maps ranking, competitors and AI search visibility. See where enquiries leak. No obligation, delivered in 48 hours.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Google Business Profile &amp; Maps visibility score</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>AI search discovery audit (ChatGPT, Perplexity, Gemini)</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Local competitor benchmark across your suburb &amp; postcode</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Full patient conversion funnel &amp; enquiry leakage review</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Claim Free Digital Audit →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-audit.png"
                                    alt="Flame.IT Growth & Digital Diagnostic Audit Dashboard for Australian healthcare practices"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-row service-row--reverse" id="social">
                        <div className="service-row__content">
                            <span className="service-row__number">02</span>
                            <h2 className="service-row__title">AHPRA-Compliant Social Media for Clinics and Aged Care Providers</h2>
                            <p className="service-row__desc">
                                Short-form video and social content for dental, cosmetic and aged care providers, reviewed against AHPRA and TGA rules. Build trust and earn more enquiries.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Reviewed against Dental Board of Australia &amp; AHPRA advertising rules</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Doctor-led educational video hooks and clinical trust assets</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Zero prohibited before/after claims or misleading treatment testimonials</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Targeted local community awareness across your primary catchment</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Deploy Compliant Social →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-social.png"
                                    alt="AHPRA-compliant healthcare social media campaigns and video marketing mockup"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-row" id="aeo">
                        <div className="service-row__content">
                            <span className="service-row__number">03</span>
                            <h2 className="service-row__title">AEO &amp; GEO: Get Your Clinic Recommended by AI Search</h2>
                            <p className="service-row__desc">
                                When patients and families ask ChatGPT, Gemini or Perplexity for a local provider, be the answer. AEO and GEO for Australian clinics and aged care. Free check.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Generative Engine Optimisation (GEO) for ChatGPT, Gemini &amp; Perplexity</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Healthcare Schema markup &amp; Australian clinical entity authority</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Google AI Overviews optimisation for healthcare &amp; aged care queries</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Apple Intelligence and Siri local clinical indexing</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Optimise for AI Search →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-aeo.png"
                                    alt="AEO & GEO generative engine optimization on ChatGPT, Gemini, Perplexity and Siri"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service-row service-row--reverse" id="maps">
                        <div className="service-row__content">
                            <span className="service-row__number">04</span>
                            <h2 className="service-row__title">Local SEO and Google Maps Ranking for Clinics and Care Homes</h2>
                            <p className="service-row__desc">
                                Rank higher in Google Maps and local search when Australians look for a dentist, cosmetic clinic or aged care home nearby. Reviews, listings and SEO in one.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Google Business Profile optimisation and 3-Pack authority</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Suburb and postcode hyper-local landing page architecture</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Automated, AHPRA-compliant review acquisition workflows</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Australian directory citation audit and cleanup</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Rank on Google Maps →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-maps.png"
                                    alt="Local SEO Google Business Profile 3-Pack rankings and review management"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="service-row" id="receptionist">
                        <div className="service-row__content">
                            <span className="service-row__number">05</span>
                            <h2 className="service-row__title">24/7 AI Receptionist for Australian Clinics and Care Homes</h2>
                            <p className="service-row__desc">
                                Answer every call 24/7. Our AI receptionist books into your diary, follows up missed calls and hands urgent matters to your team. Privacy Act aligned.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Seamless diary integration with Dental4Windows (D4W), Cliniko, Halaxy, Core Practice</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Instant missed call recovery via automated SMS &amp; conversational callback</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Privacy Act 1988 &amp; Australian Privacy Principles (APP) aligned</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Triage emergency dental or care enquiries directly to on-call staff</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Know More →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-receptionist.png"
                                    alt="24/7 AI Receptionist clinic desk with automated patient scheduling and SMS callback"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="service-row service-row--reverse" id="crm">
                        <div className="service-row__content">
                            <span className="service-row__number">06</span>
                            <h2 className="service-row__title">Complete IT and CRM Management for Clinics and Aged Care Providers</h2>
                            <p className="service-row__desc">
                                One CRM, one dashboard, connected to your practice software. Automated reminders, recalls and lead follow-up for clinics and aged care. Secure, local support.
                            </p>
                            <ul className="service-row__features">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Connected with Dental4Windows, Cliniko, Halaxy, Core Practice, Leecare</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Automated recall sequences for routine hygiene, reviews, and care plan consults</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Real-time chair and occupancy utilization analytics in AUD</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Australian data security standards with dedicated technical support</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn btn--primary">Connect Your Clinic CRM →</Link>
                        </div>
                        <div className="service-row__visual">
                            <div className="service-visual-wrapper">
                                <img
                                    src="/images/service-crm.png"
                                    alt="Healthcare practice CRM and PMS synchronization analytics dashboard"
                                    className="service-visual-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
