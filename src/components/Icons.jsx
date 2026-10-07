import React from 'react';

export const CheckIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2.5, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export const StarIcon = ({ size = 15, fill = '#F59E0B', stroke = '#D97706', strokeWidth = 1.5, className = 'star-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export const StarRating = ({ count = 5, size = 15, className = 'line-stars' }) => (
    <div className={className} aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: count }).map((_, i) => (
            <StarIcon key={i} size={size} />
        ))}
    </div>
);

export const LockIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export const ShieldIcon = ({ size = 15, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

export const BoltIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

export const FlameIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
);

export const PhoneIcon = ({ size = 18, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export const MailIcon = ({ size = 18, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export const MapPinIcon = ({ size = 15, color = 'currentColor', strokeWidth = 2, className = 'line-icon', style }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
            stroke: color !== 'currentColor' ? color : undefined,
            color: color !== 'currentColor' ? color : undefined,
            ...style
        }}
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

export const UserIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const BuildingIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2zM9 17h2v2H9zM13 17h2v2h-2z" />
    </svg>
);

export const SmartphoneIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
    </svg>
);

export const TagIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
        <circle cx="7" cy="7" r="1.5" />
    </svg>
);

export const DentalChairIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 18h10M12 18v3M5 10v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M8 10V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
    </svg>
);

export const MonitorIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8M12 17v4" />
    </svg>
);

export const DollarIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v12" />
    </svg>
);

export const ToothIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3C4.24 3 2 5.24 2 8c0 4 3 8 4 12 .5 2 2 2 3 0 .7-1.4 1.5-4 3-4s2.3 2.6 3 4c1 2 2.5 2 3 0 1-4 4-8 4-12 0-2.76-2.24-5-5-5-2 0-3.5 1.2-5 3-1.5-1.8-3-3-5-3z" />
    </svg>
);

export const HeartIcon = ({ size = 14, color = '#EF4444', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

export const MessageIcon = ({ size = 14, color = '#3B82F6', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export const SendIcon = ({ size = 14, color = '#3b82f6', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
);

export const BotIcon = ({ size = 18, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 16h.01M16 16h.01M9 11V9a3 3 0 0 1 6 0v2" />
    </svg>
);

export const ProhibitedIcon = ({ size = 14, color = 'currentColor', strokeWidth = 2, className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
);

export const ArrowRightIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2.5, className = 'arrow-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export const WhatsAppIcon = ({ size = 20, className = '' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.32a8.125 8.125 0 01-1.25-4.36c0-4.51 3.67-8.18 8.18-8.18 2.18 0 4.24.85 5.79 2.4 1.54 1.55 2.39 3.61 2.39 5.79 0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.46-.29z"/>
    </svg>
);

export const MedalIcon = ({ size = 16, color = '#024BFD', className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

export const SparkleIcon = ({ size = 16, color = '#024BFD', className = 'line-icon' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
);

export const LogoIcon = ({ size = 32 }) => (
    <span className="logo-icon">
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="url(#logoGradReact)" />
            <path d="M10 22V10h8a4 4 0 010 8h-4l6 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="logoGradReact" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#024BFD" />
                    <stop offset="1" stopColor="#0034AD" />
                </linearGradient>
            </defs>
        </svg>
    </span>
);

export const PulseDot = () => <span className="pulse-dot" />;
