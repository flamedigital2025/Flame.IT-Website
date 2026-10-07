import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ShieldIcon, MedalIcon, SparkleIcon, LockIcon, UserIcon } from '../components/Icons';
import SEO from '../components/SEO';

export default function About() {
    const editorialRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!editorialRef.current || !progressRef.current) return;
            const rect = editorialRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;

            // Fill line down to viewport center
            const filledPx = Math.min(Math.max(viewportCenter - rect.top, 0), rect.height);
            progressRef.current.style.height = `${filledPx}px`;

            // Exact physical bottom/tip of the progress line in viewport space
            const progressTipY = rect.top + filledPx;

            // Activate nodes and numbers ONLY when the blue line physically reaches them
            const rows = editorialRef.current.querySelectorAll('.pillar-row');
            rows.forEach((row) => {
                const node = row.querySelector('.pillar-row__node');
                if (!node) return;
                const nodeRect = node.getBoundingClientRect();

                // Physical contact: progress line reaches the top edge of the node circle
                if (progressTipY >= nodeRect.top) {
                    row.classList.add('is-active');
                } else {
                    row.classList.remove('is-active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="about-page">
            <SEO canonical="/about" />

            {/* ===================== HERO ===================== */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/images/about-hero.jpg" alt="Flame.IT healthcare IT solutions directors and clinical practice partners" />
                    <div className="page-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero__content">
                        <div className="page-hero__badge">
                            <span className="badge-dot"></span>
                            <span>Dedicated Australian Healthcare Technology</span>
                        </div>
                        <h1 className="page-hero__title">
                            The IT Solutions Team Behind
                            <span className="page-hero__title-highlight">Australia's Growing Clinics &amp; Care Homes</span>
                        </h1>
                        <p className="page-hero__subtitle">
                            Flame.IT is an Australian IT solutions team for dental, cosmetic and aged care providers. Meet the people, principles and privacy standards behind us.
                        </p>
                        <div className="page-hero__ctas">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                <span>Book Free Audit</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                            <Link to="/pricing" className="btn btn--white btn--lg">
                                <span>Explore Pricing</span>
                            </Link>
                        </div>
                        <div className="page-hero__proof">
                            <ShieldIcon size={16} color="#60a5fa" />
                            <span>AHPRA Aligned · Privacy Act 1988 &amp; APPs Aligned · Australian Cloud Data</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== PILLARS — EDITORIAL LAYOUT ===================== */}
            <section className="about-pillars">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Foundational Standard</span>
                        <h2 className="section-title">The Four Commitments<br />That Set Flame.IT Apart</h2>
                    </div>

                    <div className="pillars-editorial" ref={editorialRef}>
                        {/* Vertical connector line — background track */}
                        <div className="pillars-editorial__line" aria-hidden="true"></div>
                        {/* Scroll-progress fill — height set directly via ref, no re-render */}
                        <div
                            className="pillars-editorial__progress"
                            aria-hidden="true"
                            ref={progressRef}
                        ></div>

                        {/* Pillar 1 */}
                        <div className="pillar-row pillar-row--right">
                            <div className="pillar-row__number" aria-hidden="true">01</div>
                            <div className="pillar-row__node" aria-hidden="true">
                                <MedalIcon size={20} color="currentColor" />
                            </div>
                            <div className="pillar-row__card">
                                <div className="pillar-row__accent pillar-row__accent--blue"></div>
                                <div className="pillar-row__card-inner">
                                    <h3 className="pillar-row__title">Regulated Healthcare Focus</h3>
                                    <p className="pillar-row__body">
                                        We build growth technology exclusively for three regulated sectors: Dental Clinics, Cosmetology &amp; Aesthetics, and Aged Care &amp; Retirement Living.
                                    </p>
                                    <div className="pillar-row__tags">
                                        <span>Dental</span>
                                        <span>Cosmetology</span>
                                        <span>Aged Care</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="pillar-row pillar-row--left">
                            <div className="pillar-row__number pillar-row__number--right" aria-hidden="true">02</div>
                            <div className="pillar-row__node" aria-hidden="true">
                                <UserIcon size={20} color="currentColor" />
                            </div>
                            <div className="pillar-row__card">
                                <div className="pillar-row__accent pillar-row__accent--indigo"></div>
                                <div className="pillar-row__card-inner">
                                    <h3 className="pillar-row__title">Built Around Your Front Desk</h3>
                                    <p className="pillar-row__body">
                                        Our systems fit into how your team already works. No extra admin, no new software headaches, and no extra load on your reception or care staff.
                                    </p>
                                    <div className="pillar-row__tags">
                                        <span>Zero Extra Admin</span>
                                        <span>Existing Workflows</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="pillar-row pillar-row--right">
                            <div className="pillar-row__number" aria-hidden="true">03</div>
                            <div className="pillar-row__node" aria-hidden="true">
                                <LockIcon size={20} color="currentColor" />
                            </div>
                            <div className="pillar-row__card">
                                <div className="pillar-row__accent pillar-row__accent--sky"></div>
                                <div className="pillar-row__card-inner">
                                    <h3 className="pillar-row__title">AHPRA &amp; Privacy Act 1988</h3>
                                    <p className="pillar-row__body">
                                        Every workflow adheres to AHPRA advertising guidelines, TGA regulations, and the 13 Australian Privacy Principles (APPs) with local data handling.
                                    </p>
                                    <div className="pillar-row__tags">
                                        <span>AHPRA Aligned</span>
                                        <span>TGA Rules</span>
                                        <span>Privacy Act</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="pillar-row pillar-row--left">
                            <div className="pillar-row__number pillar-row__number--right" aria-hidden="true">04</div>
                            <div className="pillar-row__node" aria-hidden="true">
                                <SparkleIcon size={20} color="currentColor" />
                            </div>
                            <div className="pillar-row__card">
                                <div className="pillar-row__accent pillar-row__accent--violet"></div>
                                <div className="pillar-row__card-inner">
                                    <h3 className="pillar-row__title">No Lock-In Accountability</h3>
                                    <p className="pillar-row__body">
                                        Month-to-month terms with complete asset ownership. You own your accounts, patient lists, and digital infrastructure at all times.
                                    </p>
                                    <div className="pillar-row__tags">
                                        <span>Month-to-Month</span>
                                        <span>Full Ownership</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== BOTTOM CTA ===================== */}
            <section className="cta" id="cta">
                <div className="container">
                    <div className="cta__inner">
                        <div className="cta__bg-pattern"></div>
                        <h2 className="cta__title">Ready to Partner With an IT Solutions Team Built for Healthcare?</h2>
                        <p className="cta__subtitle">Stop relying on generic marketing providers. Work with the team dedicated to growing Australian healthcare clinics and care providers.</p>
                        <div className="cta__actions">
                            <Link to="/contact" className="btn btn--white btn--lg">Book Your Free Audit →</Link>
                        </div>
                        <div className="cta__trust">
                            <span><CheckIcon size={14} color="#3b82f6" /> Australian care sectors</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> AHPRA &amp; Privacy Act compliant</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> Zero lock-in contracts</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
