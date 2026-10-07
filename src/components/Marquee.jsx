import React from 'react';

const items = [
    'Compliance Report'
];

// Repeat 12 times per group to ensure it comfortably overflows any ultra-wide screen width
const repetitions = Array.from({ length: 12 });

function MarqueeGroup() {
    return (
        <div className="top-marquee__content">
            {repetitions.map((_, groupIndex) => (
                <React.Fragment key={groupIndex}>
                    {items.map((label, itemIndex) => (
                        <span key={`${groupIndex}-${itemIndex}`}>
                            Get <strong>FREE</strong> {label}
                            <span className="top-marquee__dot" aria-hidden="true">✦</span>
                        </span>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <div className="top-marquee" aria-hidden="true">
            <div className="top-marquee__track">
                {/* Exactly 2 identical groups so -50% CSS translate loops seamlessly and infinitely */}
                <MarqueeGroup />
                <MarqueeGroup />
            </div>
        </div>
    );
}
