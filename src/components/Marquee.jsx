import React from 'react';

const items = [
    'Territory Analysis',
    'Growth Audit',
    'Competitor Report'
];

function MarqueeContent() {
    return (
        <div className="top-marquee__content">
            {items.map((label) => (
                <span key={label}>
                    Get <strong>FREE</strong> {label}
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <div className="top-marquee" aria-hidden="true">
            <div className="top-marquee__track">
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </div>
    );
}
