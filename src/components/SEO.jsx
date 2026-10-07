import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEO, generateStructuredData, BASE_URL } from '../data/seoData';

export default function SEO({ title, description, keywords, canonical, customH1 }) {
    const location = useLocation();
    const defaultData = getSEO(canonical || location.pathname);

    const activeTitle = title || defaultData.title;
    const activeDescription = description || defaultData.description;
    const activeKeywords = keywords
        ? (Array.isArray(keywords) ? keywords.join(', ') : keywords)
        : defaultData.keywords.join(', ');
    const activeCanonical = canonical || defaultData.url;
    const canonicalUrl = `${BASE_URL}${activeCanonical === '/' ? '' : activeCanonical}`;

    useEffect(() => {
        // 1. Update Title
        document.title = activeTitle;

        // Helper to update or create meta tag by name or property
        const setMetaTag = (attr, key, content) => {
            if (!content) return;
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // 2. Standard Meta Tags
        setMetaTag('name', 'description', activeDescription);
        setMetaTag('name', 'keywords', activeKeywords);
        setMetaTag('name', 'robots', 'index, follow');
        setMetaTag('name', 'geo.region', 'AU');
        setMetaTag('name', 'geo.placename', 'Sydney, Australia');

        // 3. Open Graph Tags
        setMetaTag('property', 'og:title', activeTitle);
        setMetaTag('property', 'og:description', activeDescription);
        setMetaTag('property', 'og:url', canonicalUrl);
        setMetaTag('property', 'og:type', 'website');
        setMetaTag('property', 'og:site_name', 'Flame.IT');
        setMetaTag('property', 'og:locale', 'en_AU');
        setMetaTag('property', 'og:image', `${BASE_URL}/images/hero-doctor.jpg`);

        // 4. Twitter Card Tags
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', activeTitle);
        setMetaTag('name', 'twitter:description', activeDescription);
        setMetaTag('name', 'twitter:image', `${BASE_URL}/images/hero-doctor.jpg`);

        // 5. Canonical Link
        let canonicalEl = document.querySelector('link[rel="canonical"]');
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            canonicalEl.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalEl);
        }
        canonicalEl.setAttribute('href', canonicalUrl);

        // 6. JSON-LD Structured Data
        const structuredData = generateStructuredData(activeCanonical);
        let scriptEl = document.querySelector('script#flameit-seo-schema');
        if (!scriptEl) {
            scriptEl = document.createElement('script');
            scriptEl.setAttribute('type', 'application/ld+json');
            scriptEl.setAttribute('id', 'flameit-seo-schema');
            document.head.appendChild(scriptEl);
        }
        scriptEl.textContent = JSON.stringify(structuredData);

    }, [activeTitle, activeDescription, activeKeywords, canonicalUrl, activeCanonical]);

    return null;
}
