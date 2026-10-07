import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Privacy() {
    return (
        <div className="extra-page">
            <SEO 
                title="Privacy Policy | Flame.IT Healthcare Solutions"
                description="Our privacy policy details how Flame.IT securely handles clinic and patient data in alignment with Australian Privacy Principles."
                canonical="/privacy"
            />
            
            <section className="extra-page__header">
                <div className="container">
                    <h1 className="extra-page__title">Privacy Policy</h1>
                    <p className="extra-page__subtitle">Last Updated: October 2026</p>
                </div>
            </section>

            <section className="extra-page__content">
                <div className="container container--narrow">
                    <div className="prose">
                        <h2>1. Introduction</h2>
                        <p>
                            Flame.IT Healthcare IT Solutions Pty Ltd ("Flame.IT", "we", "us", or "our") is committed to protecting the privacy and security of your personal and clinic information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <p>
                            We adhere strictly to the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                        <ul>
                            <li><strong>Clinic Information:</strong> Practice name, ABN, AHPRA registration details, and contact information.</li>
                            <li><strong>Patient Data Processing:</strong> When integrating with Practice Management Software (PMS) such as Dental4Windows or Cliniko, we process data securely strictly for appointment booking. We do not store patient health records long-term.</li>
                            <li><strong>Usage Data:</strong> Information about your interactions with our website, IP address, browser type, and access times.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via our services to:</p>
                        <ul>
                            <li>Create and manage your account.</li>
                            <li>Provide and maintain our AI receptionist and marketing services.</li>
                            <li>Improve our website and services.</li>
                            <li>Respond to customer service requests.</li>
                        </ul>

                        <h2>4. Disclosure of Your Information</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to others. We may share information with trusted third-party vendors (such as secure cloud hosting providers in Australia) strictly to assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential and comply with the APPs.
                        </p>

                        <h2>5. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. All data processed through our AI receptionist is encrypted in transit and at rest using industry-standard protocols.
                        </p>

                        <h2>6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact our Privacy Officer via our <Link to="/contact">Contact Page</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
