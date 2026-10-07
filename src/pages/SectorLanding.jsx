import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckIcon, StarRating, ShieldIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { getSEO } from '../data/seoData';

const sectorContent = {
    '/dental-clinics': {
        tag: 'Dental Clinic Growth Systems',
        title: 'Digital Solutions Built',
        highlight: 'for Australian Dental Clinics',
        sub: 'IT solutions built for Australian dental clinics: AI booking, local SEO, social media and a connected CRM. Fill your chair time. Book a free audit.',
        image: '/images/services-hero.jpg',
        pms: 'Dental4Windows (D4W), Cliniko, Core Practice, Exact',
        stats: [
            { val: '92%', lbl: 'Average Chair Utilisation' },
            { val: '+38%', lbl: 'High-Yield Implant Enquiries' },
            { val: '24/7', lbl: 'AI Phone & Diary Booking' }
        ],
        pillars: [
            {
                title: 'High-Yield Surgical & Restorative Funnels',
                desc: 'Target patients actively searching for dental implants, All-on-4, clear aligners, and cosmetic dentistry in your exclusive suburb radius.'
            },
            {
                title: 'Direct Dental Practice Software Integration',
                desc: 'Live two-way diary sync with Dental4Windows (D4W), Cliniko, and Core Practice to book appointments directly into open operatory slots.'
            },
            {
                title: 'AHPRA & Dental Board Compliance',
                desc: 'Strict adherence to Dental Board of Australia advertising guidelines with compliant clinical educational content and zero misleading claims.'
            },
            {
                title: 'Local Google Maps 3-Pack Authority',
                desc: 'Claim top ranking when patients in your area search for "dentist near me" or specific dental treatments.'
            }
        ]
    },
    '/cosmetic-aesthetic-clinics': {
        tag: 'Cosmetic & Aesthetic Systems',
        title: 'Digital Solutions Built',
        highlight: 'for Cosmetic & Aesthetic Clinics',
        sub: 'AHPRA-compliant IT solutions for Australian cosmetic and aesthetic clinics: social media, local SEO, AI booking and CRM. Book a compliance-safe audit.',
        image: '/images/results-hero.jpg',
        pms: 'Cliniko, Halaxy, Core Practice, Timely',
        stats: [
            { val: '100%', lbl: 'AHPRA Advertising Compliant' },
            { val: '+140%', lbl: 'Consultation Pipeline' },
            { val: '< 2min', lbl: 'Average Enquiry Triage Time' }
        ],
        pillars: [
            {
                title: 'September 2025 AHPRA Guidelines Compliant',
                desc: 'Safe, ethical growth strategies that comply fully with AHPRA cosmetic advertising rules, avoiding prohibited testimonials and brand-name schedules.'
            },
            {
                title: 'High-Conversion Aesthetic Inquiries',
                desc: 'Engage high-intent clients for doctor-led skin rejuvenation, dermal treatments, and premium clinical aesthetics.'
            },
            {
                title: '24/7 Automated Booking & Consultation Intake',
                desc: 'Capture late-night and weekend enquiries through conversational AI that answers questions and reserves consultation slots.'
            },
            {
                title: 'VIP Client Retention & Recall Architecture',
                desc: 'Automated repeat booking reminders and treatment cycle follow-ups that turn single consultations into lifelong clients.'
            }
        ]
    },
    '/aged-care-retirement-living': {
        tag: 'Aged Care & Retirement Systems',
        title: 'Digital Solutions Built',
        highlight: 'for Aged Care & Retirement Living',
        sub: 'IT solutions for Australian aged care and retirement living providers: family-first enquiries, local SEO, AI booking and CRM. Book a free audit today.',
        image: '/images/about-hero.jpg',
        pms: 'Leecare, Person Centred Software, Best Practice',
        stats: [
            { val: '97%', lbl: 'Average Bed Occupancy Target' },
            { val: '3.4x', lbl: 'Increase in Family Tours' },
            { val: '100%', lbl: 'Privacy Act 1988 Aligned' }
        ],
        pillars: [
            {
                title: 'Family-First Enquiry Generation',
                desc: 'Connect with adult children and family decision-makers researching residential aged care, respite support, and Support at Home services.'
            },
            {
                title: 'Star Ratings & Local Reputation Elevation',
                desc: 'Highlight facility quality, community care, and clinical standards in alignment with the Australian Aged Care Quality Standards.'
            },
            {
                title: '24/7 Family Intake Hotline & AI Agent',
                desc: 'Support families during stressful care transitions with compassionate, 24/7 AI answering that schedules facility tours.'
            },
            {
                title: 'Care Software & Lead Tracking Integration',
                desc: 'Seamless data flow connecting tour inquiries with your administrative team and admissions coordinators.'
            }
        ]
    }
};

export default function SectorLanding() {
    const location = useLocation();
    const seo = getSEO(location.pathname);
    const content = sectorContent[location.pathname] || sectorContent['/dental-clinics'];

    return (
        <div className="sector-landing-page">
            <SEO canonical={location.pathname} />

            {/* ===================== HERO ===================== */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src={content.image} alt={seo.h1} />
                    <div className="page-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero__content">
                        <div className="page-hero__badge">
                            <span className="badge-dot"></span>
                            <span>{content.tag}</span>
                        </div>
                        <h1 className="page-hero__title">
                            {content.title}{' '}
                            <span className="page-hero__title-highlight">{content.highlight}</span>
                        </h1>
                        <p className="page-hero__subtitle">{content.sub}</p>
                        <div className="page-hero__ctas">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                <span>Book Sector Audit</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </Link>
                            <Link to="/pricing" className="btn btn--white btn--lg">
                                <span>View AUD Pricing</span>
                            </Link>
                        </div>
                        <div className="page-hero__proof">
                            <StarRating count={5} size={15} />
                            <span>Connected with {content.pms}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== STATS ===================== */}
            <section className="results-stats-section">
                <div className="container">
                    <div className="results-stats">
                        {content.stats.map((st, i) => (
                            <div className="results-stat" key={i}>
                                <div className="results-stat__value">{st.val}</div>
                                <div className="results-stat__label">{st.lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== CORE PILLARS ===================== */}
            <section style={{ padding: '5rem 0', background: '#F8FAFC' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Sector Architecture</span>
                        <h2 className="section-title">Specialised Infrastructure Engineered for Your Care Model</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {content.pillars.map((pil, idx) => (
                            <div key={idx} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(2,75,253,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: '#024BFD', fontWeight: 800 }}>
                                    0{idx + 1}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.75rem' }}>{pil.title}</h3>
                                <p style={{ color: '#64748B', lineHeight: '1.6', fontSize: '0.925rem' }}>{pil.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================== BOTTOM CTA ===================== */}
            <section className="cta" id="cta">
                <div className="container">
                    <div className="cta__inner">
                        <div className="cta__bg-pattern"></div>
                        <h2 className="cta__title">Ready to Claim Territory Exclusivity for Your Sector?</h2>
                        <p className="cta__subtitle">We only partner with one provider per 5 km catchment radius. Book your free audit to review availability.</p>
                        <div className="cta__actions">
                            <Link to="/contact" className="btn btn--white btn--lg">Schedule Free Audit →</Link>
                            <Link to="/services" className="btn btn--outline-white btn--lg">View All 6 Solutions</Link>
                        </div>
                        <div className="cta__trust">
                            <span><CheckIcon size={14} color="#3b82f6" /> 48-Hour delivery</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> Zero lock-in terms</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> 100% Privacy Act &amp; AHPRA compliant</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
