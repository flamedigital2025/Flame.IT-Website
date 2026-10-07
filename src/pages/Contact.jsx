import React, { useState } from 'react';
import {
    LockIcon, BoltIcon, UserIcon, BuildingIcon, SmartphoneIcon, MailIcon,
    MapPinIcon,
    ArrowRightIcon, ShieldIcon, ProhibitedIcon, PhoneIcon, WhatsAppIcon
} from '../components/Icons';
import SEO from '../components/SEO';
import { submitLeadToGoogleSheet } from '../services/leadService';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [selectedSector, setSelectedSector] = useState('dental'); // 'dental' | 'aesthetics' | 'agedcare'

    const [formData, setFormData] = useState({
        practiceName: '',
        mobile: '',
        email: '',
        cityState: '',
        bottleneck: ''
    });



    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        const payload = {
            ...formData,
            sector: selectedSector,
            formType: 'Free Clinic Diagnostic Audit'
        };

        try {
            await submitLeadToGoogleSheet(payload);
            setSubmitted(true);
        } catch (err) {
            console.warn('Google Sheet submission note:', err);
            // Show success so visitor is not blocked if adblocker interferes
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <SEO canonical="/contact" />

            {/* ===================== HERO ===================== */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/images/contact-hero.jpg" alt="Dedicated clinical care coordinator and practice advisory consultation" />
                    <div className="page-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero__content">
                        <div className="page-hero__badge">
                            <span className="badge-dot"></span>
                            <span>Confidential Diagnostic • AHPRA &amp; Privacy Act 1988 Aligned</span>
                        </div>
                        <h1 className="page-hero__title">
                            Book Your Free Clinic
                            <span className="page-hero__title-highlight">or Care Home Audit</span>
                        </h1>
                        <p className="page-hero__subtitle">
                            Book your free audit and strategy call. We review your Google Maps ranking, website, missed enquiries and AI search visibility for your clinic or care home.
                        </p>
                        <div className="page-hero__ctas">
                            <a href="#audit-form-section" className="btn btn--primary btn--lg">
                                <span>Schedule Free Audit</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <a href="tel:1300352634" className="btn btn--white btn--lg">
                                <PhoneIcon size={18} />
                                <span>1300 352 634</span>
                            </a>
                        </div>
                        <div className="page-hero__proof">
                            <ShieldIcon size={16} color="#60a5fa" />
                            <span>Response within 2 Business Hours (Mon–Fri 8am–6pm AEST)</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="audit-hero" id="audit-form-section">
                <div className="container">
                    <div className="audit-hero__inner">
                        {/* Left Column */}
                        <div className="audit-hero__left">
                            <span className="audit-eyebrow">AUSTRALIAN POSTCODE LOCK &amp; AUDIT</span>
                            <h2 className="audit-hero__title">
                                Growth Audit Scope &amp; Direct Consultation
                            </h2>

                            <div className="audit-feature-list">
                                <div className="audit-feature-item">
                                    <div className="audit-feature-item__icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#024BFD" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" /></svg>
                                    </div>
                                    <div className="audit-feature-item__body">
                                        <h3>Custom Local Geo–Grid Audit</h3>
                                        <p>Reveals your exact ranking across Google Maps for top healthcare &amp; clinical keywords across your precise 5 km catchment radius.</p>
                                    </div>
                                </div>

                                <div className="audit-feature-item">
                                    <div className="audit-feature-item__icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#024BFD" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                                    </div>
                                    <div className="audit-feature-item__body">
                                        <h3>Enquiry Capacity &amp; Reactivation Model</h3>
                                        <p>Uncovers dormant patient reactivation rates and pinpoints enquiry leakage from missed after-hours phone calls and slow form follow-ups.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Australian Channels */}
                            <div className="audit-direct-card">
                                <span className="audit-direct-card__tag">DIRECT CLINICAL CHANNELS</span>
                                <div className="audit-direct-card__grid">
                                    <a href="tel:1300352634" className="audit-direct-channel">
                                        <div className="audit-direct-channel__icon">
                                            <PhoneIcon size={20} color="currentColor" />
                                        </div>
                                        <div>
                                            <div className="audit-direct-channel__label">DIRECT PHONE LINE</div>
                                            <div className="audit-direct-channel__val">1300 352 634</div>
                                            <div className="audit-direct-channel__sub">Toll-free Australian wide</div>
                                        </div>
                                    </a>
                                    <a href="mailto:enquiry.flamedigital@gmail.com" className="audit-direct-channel">
                                        <div className="audit-direct-channel__icon">
                                            <MailIcon size={20} color="currentColor" />
                                        </div>
                                        <div>
                                            <div className="audit-direct-channel__label">DEDICATED EMAIL</div>
                                            <div className="audit-direct-channel__val">enquiry.flamedigital@gmail.com</div>
                                            <div className="audit-direct-channel__sub">Direct audit team inbox</div>
                                        </div>
                                    </a>
                                </div>
                                <a href="https://wa.me/611300352634" target="_blank" rel="noopener noreferrer" className="audit-whatsapp-btn">
                                    <div className="audit-whatsapp-btn__icon">
                                        <WhatsAppIcon size={19} />
                                    </div>
                                    <span className="audit-whatsapp-btn__text">Chat with an Australian Healthcare Strategist on WhatsApp</span>
                                    <span className="status-badge-online">Chat Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="audit-hero__form">
                            <div className="audit-form-card">
                                <div className="audit-form-card__badges-row">
                                </div>
                                <div className="audit-form-card__header">
                                    <h2 className="audit-form-card__title">Schedule Your Free Diagnostic &amp; Strategy Audit</h2>
                                    <p className="audit-form-card__subtitle">Strictly confidential. AHPRA and Privacy Act 1988 compliant.</p>
                                </div>

                                {submitted ? (
                                    <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(2,75,253,0.06)', borderRadius: '16px', border: '1px solid #024BFD' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#024BFD', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.75rem' }}>✓</div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.75rem' }}>Audit Request Confirmed</h3>
                                        <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                            Thank you. Your audit request has been received. A Senior Australian Healthcare Strategist will reach out via SMS and email within 2 business hours.
                                        </p>
                                        <button onClick={() => setSubmitted(false)} className="btn btn--outline">Submit Another Request</button>
                                    </div>
                                ) : (
                                    <form className="audit-form" onSubmit={handleSubmit}>
                                        {/* Step 1: Sector Selection per Brief */}
                                        <div className="audit-form__field">
                                            <label style={{ fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem', display: 'block' }}>
                                                Step 1: Select Your Healthcare Sector *
                                            </label>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                                                {[
                                                    { id: 'dental', label: 'Dental Clinic' },
                                                    { id: 'aesthetics', label: 'Cosmetic & Aesthetics' },
                                                    { id: 'agedcare', label: 'Aged Care & Living' }
                                                ].map(sector => (
                                                    <button
                                                        type="button"
                                                        key={sector.id}
                                                        onClick={() => setSelectedSector(sector.id)}
                                                        className={`btn ${selectedSector === sector.id ? 'btn--primary' : 'btn--outline'}`}
                                                        style={{ padding: '0.65rem 0.5rem', fontSize: '0.8rem', textAlign: 'center', justifyContent: 'center' }}
                                                    >
                                                        {sector.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="audit-form__field">
                                            <label>Practice / Facility Name *</label>
                                            <div className="audit-input-wrap">
                                                <span className="input-icon"><BuildingIcon size={16} /></span>
                                                <input
                                                    type="text"
                                                    placeholder="Sydney Healthcare Clinic..."
                                                    value={formData.practiceName}
                                                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="audit-form__row">
                                            <div className="audit-form__field">
                                                <div className="field-label-row">
                                                    <label>Direct Mobile Phone *</label>
                                                </div>
                                                <div className="audit-input-wrap">
                                                    <span className="input-icon"><SmartphoneIcon size={16} /></span>
                                                    <input
                                                        type="tel"
                                                        placeholder="0412 345 678"
                                                        value={formData.mobile}
                                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="audit-form__field">
                                                <label>Work Email Address *</label>
                                                <div className="audit-input-wrap">
                                                    <span className="input-icon"><MailIcon size={16} /></span>
                                                    <input
                                                        type="email"
                                                        placeholder="principal@clinic.com.au"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="audit-form__field">
                                            <label>City &amp; State *</label>
                                            <div className="audit-input-wrap">
                                                <span className="input-icon"><MapPinIcon size={16} /></span>
                                                <input
                                                    type="text"
                                                    placeholder="Sydney, NSW"
                                                    value={formData.cityState}
                                                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>



                                        <div className="audit-form__field">
                                            <label>Description</label>
                                            <textarea
                                                placeholder="Tell us about your practice needs, goals, or any questions you have..."
                                                rows="3"
                                                value={formData.bottleneck}
                                                onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`btn btn--primary btn--lg audit-form__submit-btn ${loading ? 'btn--submitting' : ''}`}
                                        >
                                            {loading ? (
                                                <span className="btn-loading-state">
                                                    <span className="btn-spinner" />
                                                    <span>Submitting Audit Request...</span>
                                                </span>
                                            ) : (
                                                <>
                                                    <span>Claim Your Free Audit &amp; Book Strategy Call</span>
                                                    <span className="arrow-icon"><ArrowRightIcon size={16} /></span>
                                                </>
                                            )}
                                        </button>

                                        <div className="audit-form__trust-row">
                                            <span><LockIcon size={14} color="#024BFD" style={{ marginRight: '4px', verticalAlign: '-2px' }} /> 100% Privacy Act &amp; AHPRA Aligned</span>
                                            <span><ShieldIcon size={14} color="#024BFD" style={{ marginRight: '4px', verticalAlign: '-2px' }} /> Strict 5 km Postcode Exclusivity</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
