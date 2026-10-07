import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SectorLanding from './pages/SectorLanding';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
export default function App() {
    return (
        <div className="app-root">
            <ScrollToTop />
            <Marquee />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:serviceSlug" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    
                    {/* Sector Pillar Pages defined in SEO Plan */}
                    <Route path="/dental-clinics" element={<SectorLanding />} />
                    <Route path="/cosmetic-aesthetic-clinics" element={<SectorLanding />} />
                    <Route path="/aged-care-retirement-living" element={<SectorLanding />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
