import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Terms() {
    return (
        <div className="extra-page">
            <SEO 
                title="Terms of Service | Flame.IT Healthcare Solutions"
                description="Read the terms and conditions for using Flame.IT's digital marketing and AI receptionist services for Australian healthcare providers."
                canonical="/terms"
            />
            
            <section className="extra-page__header">
                <div className="container">
                    <h1 className="extra-page__title">Terms of Service</h1>
                    <p className="extra-page__subtitle">Last Updated: October 2026</p>
                </div>
            </section>

            <section className="extra-page__content">
                <div className="container container--narrow">
                    <div className="prose">
                        <h2>1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Flame.IT Healthcare IT Solutions Pty Ltd ("Flame.IT", "we", "us", or "our"), concerning your access to and use of the Flame.IT website and our related services.
                        </p>

                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us.
                        </p>
                        <p>
                            <strong>Client Asset Ownership:</strong> Notwithstanding the above, you retain 100% ownership of your clinic's landing pages, ad accounts, patient lists, and creative assets generated specifically for your clinic during our engagement, in alignment with our Zero Lock-In Pledge.
                        </p>

                        <h2>3. User Representations</h2>
                        <p>By using the Services, you represent and warrant that:</p>
                        <ul>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are a licensed healthcare provider in Australia (if applying for clinic growth services) and comply with all AHPRA advertising guidelines.</li>
                            <li>You will not use the Services for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h2>4. Fees and Payment</h2>
                        <p>
                            We operate on a transparent month-to-month billing structure. By subscribing to a service tier, you agree to provide current, complete, and accurate purchase and account information. You may cancel your service at any time with 30 days written notice.
                        </p>

                        <h2>5. Postcode Exclusivity</h2>
                        <p>
                            Our exclusive territory agreements are granted on a first-come, first-served basis per 5km radius. This exclusivity is maintained only while your account is active and in good financial standing.
                        </p>

                        <h2>6. Limitations of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Services.
                        </p>

                        <h2>7. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us via our <Link to="/contact">Contact Page</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
