import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, StarRating, PulseDot } from '../components/Icons';
import LiveChatDemo from '../components/LiveChatDemo';
import SEO from '../components/SEO';

function AnimatedStat({ target, staticVal, prefix = '', suffix = '', accentSuffix = '', decimals = 0, label, desc, delay = '0s' }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statRef = useRef(null);

    useEffect(() => {
        if (target === undefined) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const startTime = performance.now();

                    const updateCount = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = 1 - Math.pow(1 - progress, 4);
                        const currentVal = easeProgress * target;
                        setCount(currentVal);

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.2 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => observer.disconnect();
    }, [target, hasAnimated]);

    const formattedValue = target !== undefined
        ? (decimals > 0 ? count.toFixed(decimals) : Math.round(count))
        : staticVal;

    return (
        <div className="stat-item" ref={statRef}>
            <div
                className="stat-item__value stat-item__value--moving"
                style={{ animationDelay: delay }}
            >
                {prefix}
                <span>{target !== undefined ? (hasAnimated ? formattedValue : '0') : staticVal}</span>
                {suffix}
                {accentSuffix && <span className="stat-item__accent">{accentSuffix}</span>}
            </div>
            <div className="stat-item__label">{label}</div>
            <div className="stat-item__desc">{desc}</div>
        </div>
    );
}

function TypewriterWord({ words = ['Marketing', 'AI', 'CRM'], typingSpeed = 110, deletingSpeed = 65, pauseTime = 2200 }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(words[0].length);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        if (isPaused) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (isDeleting) {
            if (subIndex === 0) {
                const timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }, 350);
                return () => clearTimeout(timeout);
            }
            const timeout = setTimeout(() => {
                setSubIndex((prev) => prev - 1);
            }, deletingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const currentWord = words[wordIndex];
            if (subIndex === currentWord.length) {
                setIsPaused(true);
                return;
            }
            const timeout = setTimeout(() => {
                setSubIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [subIndex, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    const currentWord = words[wordIndex];
    const displayText = currentWord.substring(0, subIndex);

    return (
        <span className={`hero-typewriter hero-typewriter--${currentWord.toLowerCase()}`}>
            <span className="hero-typewriter__word">{displayText}</span>
            <span className="hero-typewriter__cursor" aria-hidden="true">|</span>
        </span>
    );
}

export default function Home() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "Who does Flame.IT work with?",
            a: "We only work with three regulated sectors: dental clinics, cosmetology and aesthetics clinics, and aged care and retirement living providers. We don't take on other industries, so everything we build is made for how your sector works."
        },
        {
            q: "Why choose a healthcare-only team instead of a general marketing company?",
            a: "Healthcare advertising in Australia has strict rules, and a generic provider often gets them wrong. We build every campaign, post and web page around AHPRA advertising rules, TGA requirements and the Privacy Act from day one, so you don't have to fix things later."
        },
        {
            q: "Is your marketing AHPRA compliant?",
            a: "We build our work around the AHPRA advertising guidelines. That means no misleading claims, no promises of results, and no patient testimonials about clinical care. AHPRA doesn't approve or certify marketing in advance, and the responsibility sits with the clinic that publishes it, so we review everything before it goes live."
        },
        {
            q: "Can my dental clinic use patient reviews and testimonials on our website or social media?",
            a: "Not testimonials about clinical care. Under the AHPRA rules, that includes reposting positive comments from Google or Facebook onto your own channels. You can still ask patients to leave reviews on third-party platforms like Google, and we help you build your reputation there in a compliant way."
        },
        {
            q: "Can we use before and after photos?",
            a: "Sometimes, with conditions. The photos must be real, taken with written patient consent, and shown in a consistent way so they don't create unrealistic expectations. The rules are stricter for cosmetic work, so we check each case before anything is published."
        },
        {
            q: "What are AEO and GEO, and does my clinic need them?",
            a: "AEO (answer engine optimisation) and GEO (generative engine optimisation) help your clinic show up when people ask ChatGPT, Google AI Overviews, Gemini or Perplexity questions like \"best dentist near me\". More patients now ask AI tools for one clear answer instead of scrolling through links, so being named in that answer is becoming as important as ranking on Google."
        },
        {
            q: "How do I rank higher on Google Maps for \"dentist near me\"?",
            a: "Start with a fully built-out Google Business Profile, accurate details across directories, a steady flow of genuine reviews, and local pages for each suburb and service. We manage all of this as part of our Local SEO and Google Maps service."
        },
        {
            q: "Do you work with dental clinics in Perth?",
            a: "Yes. We work with dental clinics across Perth, from general practices to implant and orthodontic clinics. We also work with clinics in Adelaide, Melbourne, Sydney, Brisbane and other Australian cities."
        },
        {
            q: "Can you help my clinic get more dental implant enquiries in Melbourne?",
            a: "We can help more local patients find your clinic when they search for things like \"dental implants Melbourne\". That means a strong Google Business Profile, a clear implants page and compliant content. We don't promise a set number of patients, and we also do this for clinics in Perth, Adelaide and other cities."
        },
        {
            q: "Do you offer dental SEO in Adelaide?",
            a: "Yes. Our dental SEO covers Adelaide suburbs and the services each clinic offers, such as implants, Invisalign and general dentistry. We also run local SEO for clinics in Perth, Melbourne and other Australian cities."
        },
        {
            q: "Can you market my cosmetic or aesthetics clinic in Sydney?",
            a: "Yes. We work with cosmetology and aesthetics clinics in Sydney and also in Melbourne, Brisbane, Perth and Adelaide. All content follows AHPRA and TGA rules, including the limits on advertising prescription-only treatments."
        },
        {
            q: "Do you help aged care and retirement living providers in Brisbane?",
            a: "Yes. We help aged care and retirement living providers in Brisbane reach families who are searching for a home or village. We also work with providers in other Australian cities and regional areas."
        },
        {
            q: "Will you work with my competitor down the road?",
            a: "We limit how many clinics we take on in the same area. Our 5 km postcode exclusivity means we won't work with another clinic of the same type within 5 km of you."
        },
        {
            q: "Do you work with multi-location dental groups?",
            a: "Yes. We can build a separate local page and Google Business Profile for each location, so each clinic is found in its own suburb. This works for groups with sites in more than one city, for example Perth and Melbourne."
        },
        {
            q: "How do I get my dental clinic to show up in ChatGPT for \"dentist in Perth\"?",
            a: "AI tools pull from clear, trusted and consistent information about your clinic. We set up your clinic details, service pages, FAQs and reviews so AI tools can understand and name you. We can't guarantee a mention, but we can make your clinic easier to find and trust."
        },
        {
            q: "What does a free practice audit include?",
            a: "We review your website, Google Business Profile, local rankings, reviews and AHPRA compliance. You get a clear list of what to fix first."
        }
    ];

    return (
        <div className="home-page">
            <SEO canonical="/" />
            {/* ===================== HERO ===================== */}
            <section className="hero hero--full-bg">
                <div className="hero__bg-media" aria-hidden="true">
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Flame.IT healthcare technology clinic environment"
                        className="hero__bg-img"
                    />
                    <div className="hero__bg-overlay"></div>
                </div>

                <div className="container">
                    <div className="hero__content hero__content--left">
                        <h1 className="hero__title">
                            <span className="hero__title-top">
                                Healthcare <TypewriterWord words={['Marketing', 'AI', 'CRM']} />
                            </span>
                            <span className="hero__title-solutions">Solutions</span>
                            <span className="hero__title-highlight">for Australian Clinics &amp; Care&nbsp;Providers</span>
                        </h1>
                        <p className="hero__subtitle">
                            IT solutions that fill diaries for Australian dental clinics, cosmetic clinics and aged care providers. AI booking, local search and CRM. Book a free audit.
                        </p>
                        <div className="hero__ctas">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                <span>Book a Free Audit</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== METRICS BAR ===================== */}
            <section className="stats" id="stats">
                <div className="container">
                    <div className="stats__grid">
                        <AnimatedStat
                            target={8}
                            accentSuffix="+"
                            label="Years"
                            desc="Digital Experience"
                            delay="0s"
                        />
                        <AnimatedStat
                            target={360}
                            accentSuffix="°"
                            label="Strategy"
                            desc="Full Digital Approach"
                            delay="0.6s"
                        />
                        <AnimatedStat
                            target={24}
                            accentSuffix="/7"
                            label="Focus"
                            desc="Always Optimising"
                            delay="1.2s"
                        />
                        <AnimatedStat
                            staticVal="ROI"
                            accentSuffix="+"
                            label="Performance"
                            desc="Growth Focused"
                            delay="1.8s"
                        />
                    </div>
                </div>
            </section>

            {/* ===================== SERVICES PREVIEW ===================== */}
            <section className="services" id="services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Comprehensive Solutions</span>
                        <h2 className="section-title">Everything Your Practice Needs<br />to Dominate Your Market</h2>
                        <p className="section-subtitle">We don't offer piecemeal services. We build complete, integrated growth engines specifically calibrated for dental and healthcare practices.</p>
                    </div>
                    <div className="services__grid">
                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--purple">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#7C3AED" strokeWidth="2" /><path d="M21 21l-4.35-4.35" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" /></svg>
                            </div>
                            <h3 className="service-card__title">AI Local SEO &amp; Maps</h3>
                            <p className="service-card__desc">Dominate Google 3-Pack, ChatGPT Search, and Apple Intelligence. When patients ask AI for the top dentist, your practice is the #1 answer.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--blue">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg>
                            </div>
                            <h3 className="service-card__title">24/7 AI Dental Receptionist</h3>
                            <p className="service-card__desc">Never miss another after-hours call. Our conversational AI qualifies leads, answers clinical FAQs, and books appointments directly into your PMS.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--blue">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#024BFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className="service-card__title">Campaign Management</h3>
                            <p className="service-card__desc">Precision-targeted Google Search &amp; Maps campaigns that capture high-intent patients seeking implants, aligners, and cosmetic procedures.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--amber">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className="service-card__title">Email Marketing</h3>
                            <p className="service-card__desc">We create targeted outbound email campaigns that reach potential and existing patients, promote your services, nurture leads, and drive more appointments for your practice.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--rose">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#E11D48" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="#E11D48" strokeWidth="2" /></svg>
                            </div>
                            <h3 className="service-card__title">Social Video &amp; Meta Ads</h3>
                            <p className="service-card__desc">Stunning before-and-after cases and doctor-led educational videos distributed across Instagram, Facebook, and TikTok for regional trust.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>
                        <div className="service-card">
                            <div className="service-card__icon service-card__icon--indigo">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="7" r="4" stroke="#4F46E5" strokeWidth="2" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className="service-card__title">CRM Solutions</h3>
                            <p className="service-card__desc">Powerful CRM platform to manage leads, automate follow-ups, and track every patient interaction, from first inquiry to loyal customer, all in one place.</p>
                            <Link to="/services" className="service-card__link">Learn more →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== AI RECEPTIONIST DEMO ===================== */}
            <section className="ai-receptionist" id="ai-receptionist">
                <div className="container">
                    <div className="ai-receptionist__inner">
                        <div className="ai-receptionist__content">
                            <span className="section-tag">24/7 Practice Automation</span>
                            <h2 className="section-title">Your Front Desk Works 8 Hours.<br />Our AI Works All 24.</h2>
                            <p className="ai-receptionist__desc">
                                Over 40% of dental patients search and attempt to book outside normal clinical hours. Our intelligent conversational AI answers questions, quotes estimates, and secures appointments on your schedule while you sleep.
                            </p>
                            <ul className="ai-receptionist__features ai-receptionist__features--list">
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Direct two-way calendar sync with Dentrix, Eaglesoft &amp; Open Dental</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Pre-qualifies dental insurance, financing, and high-ticket procedure interest</span>
                                </li>
                                <li>
                                    <CheckIcon size={18} color="#3b82f6" />
                                    <span>Sends automated SMS confirmation and patient health intake forms instantly</span>
                                </li>
                            </ul>
                            {/* <Link to="/contact" className="btn btn--primary btn--lg">See Live AI Demo</Link> */}
                        </div>

                        <div className="ai-receptionist__visual">
                            <LiveChatDemo />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== REVIEWS ===================== */}
            {/* <section className="reviews" id="reviews">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Testimonials</span>
                        <h2 className="section-title">Verified Reviews from Practicing Clinicians &amp; Care Directors</h2>
                        <p className="section-subtitle">Don't just take our word for it. Here's what practicing clinicians and healthcare leaders have to say about working with Flame.IT.</p>
                    </div>
                    <div className="reviews__grid">
                        <div className="review-card">
                            <div className="review-card__stars">
                                <StarRating count={5} size={16} />
                            </div>
                            <p className="review-card__text">"Flame.IT completely transformed our practice. We went from struggling to fill chairs to having a 3-week waitlist. The ROI has been absolutely phenomenal."</p>
                            <div className="review-card__author">
                                <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #024BFD, #3b82f6)' }}>DS</div>
                                <div>
                                    <div className="review-card__name">Dr. Sarah Mitchell</div>
                                    <div className="review-card__role">Owner, Bright Smile Dentistry</div>
                                </div>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="review-card__stars">
                                <StarRating count={5} size={16} />
                            </div>
                            <p className="review-card__text">"We've tried 4 different marketing agencies before Flame.IT. None of them came close. Within 90 days we added 47 new patients per month consistently."</p>
                            <div className="review-card__author">
                                <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>JR</div>
                                <div>
                                    <div className="review-card__name">Dr. James Rodriguez</div>
                                    <div className="review-card__role">Founder, Elite Dental Partners</div>
                                </div>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="review-card__stars">
                                <StarRating count={5} size={16} />
                            </div>
                            <p className="review-card__text">"The AI receptionist alone saved us $4,200/month in staffing costs while actually booking MORE appointments. This platform is a game-changer for any dental practice."</p>
                            <div className="review-card__author">
                                <div className="review-card__avatar" style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}>LP</div>
                                <div>
                                    <div className="review-card__name">Dr. Lisa Park</div>
                                    <div className="review-card__role">CEO, Pacific Coast Dental Group</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* ===================== FAQ ACCORDION ===================== */}
            <section className="faq" id="faq">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Frequently Asked Questions</span>
                        <h2 className="section-title">Common Questions from Practice Leaders</h2>
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

            {/* ===================== BOTTOM CTA ===================== */}
            <section className="cta" id="cta">
                <div className="container">
                    <div className="cta__inner">
                        <div className="cta__bg-pattern"></div>
                        <h2 className="cta__title">Ready to Fill Your Appointment<br />Books and Dominate Your Local<br />Market?</h2>
                        <p className="cta__subtitle">Join 500+ elite practices that trust Flame.IT to deliver a consistent stream of high-value patients. Book your free strategy call today.</p>
                        <div className="cta__actions">
                            <Link to="/contact" className="btn btn--white btn--lg">
                                <span>Book Your Free Strategy Call</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                        </div>
                        <div className="cta__trust">
                            <span><CheckIcon size={14} color="#3b82f6" /> No setup fees</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> Cancel anytime</span>
                            <span><CheckIcon size={14} color="#3b82f6" /> Results guaranteed</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
