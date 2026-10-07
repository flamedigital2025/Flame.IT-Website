import React, { useState, useEffect, useRef } from 'react';
import { PulseDot, CheckIcon } from './Icons';

const SCRIPTED_STEPS = [
    // Step 0: Initial bot message
    {
        type: 'bot',
        text: 'Hi! Welcome to Smile Dental. How can I help you today?',
        delayBeforeTyping: 400,
        typingDuration: 900
    },
    // Step 1: User reply
    {
        type: 'user',
        text: "I'd like to book a teeth cleaning appointment",
        userTypingSpeed: 35,
        pauseBeforeTyping: 900
    },
    // Step 2: Bot slots response
    {
        type: 'bot',
        text: "I'd love to help! We have openings this Thursday at 10 AM and Friday at 2 PM. Which works better for you?",
        delayBeforeTyping: 500,
        typingDuration: 1300
    },
    // Step 3: User chooses slot
    {
        type: 'user',
        text: 'Thursday at 10 AM works',
        userTypingSpeed: 40,
        pauseBeforeTyping: 1000
    },
    // Step 4: Bot confirms booking
    {
        type: 'bot',
        text: "Perfect! You're booked for Thursday at 10 AM with Dr. Smith. I'll send a confirmation to your phone. See you then!",
        hasCheckmark: true,
        delayBeforeTyping: 600,
        typingDuration: 1400
    }
];

export default function LiveChatDemo() {
    const [messages, setMessages] = useState([]);
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [inputText, setInputText] = useState('');
    const [isSimulating, setIsSimulating] = useState(true);
    const [confirmedNotice, setConfirmedNotice] = useState(false);

    const chatContainerRef = useRef(null);
    const inputRef = useRef(null);
    const timeoutsRef = useRef([]);

    const clearAllTimeouts = () => {
        timeoutsRef.current.forEach((t) => clearTimeout(t));
        timeoutsRef.current = [];
    };

    const addTimeout = (fn, delay) => {
        const id = setTimeout(fn, delay);
        timeoutsRef.current.push(id);
        return id;
    };

    // Auto scroll chat to bottom on new messages
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isBotTyping, confirmedNotice]);

    // Main animation loop
    const runSimulationLoop = () => {
        clearAllTimeouts();
        setMessages([]);
        setIsBotTyping(false);
        setInputText('');
        setConfirmedNotice(false);

        let cumulativeTime = 300;

        // Step 0: Bot Message 1
        const step0 = SCRIPTED_STEPS[0];
        cumulativeTime += step0.delayBeforeTyping;
        addTimeout(() => setIsBotTyping(true), cumulativeTime);
        cumulativeTime += step0.typingDuration;
        addTimeout(() => {
            setIsBotTyping(false);
            setMessages((prev) => [...prev, { id: 'bot-1', type: 'bot', text: step0.text }]);
        }, cumulativeTime);

        // Step 1: User Message 1 (simulated typing in input)
        const step1 = SCRIPTED_STEPS[1];
        cumulativeTime += step1.pauseBeforeTyping;
        const text1 = step1.text;
        for (let i = 1; i <= text1.length; i++) {
            const currentSub = text1.slice(0, i);
            addTimeout(() => {
                setInputText(currentSub);
            }, cumulativeTime + i * step1.userTypingSpeed);
        }
        cumulativeTime += text1.length * step1.userTypingSpeed + 350;
        addTimeout(() => {
            setInputText('');
            setMessages((prev) => [...prev, { id: 'user-1', type: 'user', text: text1 }]);
        }, cumulativeTime);

        // Step 2: Bot Message 2
        const step2 = SCRIPTED_STEPS[2];
        cumulativeTime += step2.delayBeforeTyping;
        addTimeout(() => setIsBotTyping(true), cumulativeTime);
        cumulativeTime += step2.typingDuration;
        addTimeout(() => {
            setIsBotTyping(false);
            setMessages((prev) => [...prev, { id: 'bot-2', type: 'bot', text: step2.text }]);
        }, cumulativeTime);

        // Step 3: User Message 2
        const step3 = SCRIPTED_STEPS[3];
        cumulativeTime += step3.pauseBeforeTyping;
        const text3 = step3.text;
        for (let i = 1; i <= text3.length; i++) {
            const currentSub = text3.slice(0, i);
            addTimeout(() => {
                setInputText(currentSub);
            }, cumulativeTime + i * step3.userTypingSpeed);
        }
        cumulativeTime += text3.length * step3.userTypingSpeed + 350;
        addTimeout(() => {
            setInputText('');
            setMessages((prev) => [...prev, { id: 'user-2', type: 'user', text: text3 }]);
        }, cumulativeTime);

        // Step 4: Bot Message 3 (Confirmation)
        const step4 = SCRIPTED_STEPS[4];
        cumulativeTime += step4.delayBeforeTyping;
        addTimeout(() => setIsBotTyping(true), cumulativeTime);
        cumulativeTime += step4.typingDuration;
        addTimeout(() => {
            setIsBotTyping(false);
            setMessages((prev) => [
                ...prev,
                { id: 'bot-3', type: 'bot', text: step4.text, hasCheckmark: true }
            ]);
            setConfirmedNotice(true);
        }, cumulativeTime);

        // Reset and loop after 7 seconds
        cumulativeTime += 7000;
        addTimeout(() => {
            if (isSimulating) {
                runSimulationLoop();
            }
        }, cumulativeTime);
    };

    useEffect(() => {
        if (isSimulating) {
            runSimulationLoop();
        }
        return () => clearAllTimeouts();
    }, [isSimulating]);

    // Handle user manual interaction
    const handleManualSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        // Pause automatic loop during interactive mode
        setIsSimulating(false);
        clearAllTimeouts();

        const userMsg = inputText.trim();
        setInputText('');
        const newMsgId = `manual-user-${Date.now()}`;
        setMessages((prev) => [...prev, { id: newMsgId, type: 'user', text: userMsg }]);

        // Bot responds intelligently
        setIsBotTyping(true);
        setTimeout(() => {
            setIsBotTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: `manual-bot-${Date.now()}`,
                    type: 'bot',
                    text: "Thank you! I've noted that for your chart. One of our clinical coordinators will finalize your schedule instantly.",
                    hasCheckmark: true
                }
            ]);

            // Resume simulation after 8s
            setTimeout(() => {
                setIsSimulating(true);
            }, 8000);
        }, 1200);
    };

    return (
        <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-screen">
                {/* Header */}
                <div className="chat-header">
                    <div className="chat-avatar">AI</div>
                    <div>
                        <div className="chat-name">Flame.IT Assistant</div>
                        <div className="chat-status">
                            <PulseDot /> Online
                        </div>
                    </div>
                </div>

                {/* Messages Body */}
                <div className="chat-messages" ref={chatContainerRef}>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`chat-msg chat-msg--${msg.type} chat-msg--animated`}
                        >
                            <p>
                                {msg.text}
                                {msg.hasCheckmark && (
                                    <CheckIcon
                                        size={14}
                                        color="#024BFD"
                                        className="inline-svg-check"
                                    />
                                )}
                            </p>
                        </div>
                    ))}

                    {/* Bot Typing Indicator */}
                    {isBotTyping && (
                        <div className="chat-msg chat-msg--bot chat-typing-bubble">
                            <span className="typing-dot" />
                            <span className="typing-dot" />
                            <span className="typing-dot" />
                        </div>
                    )}

                    {/* Confirmation Pill */}
                    {confirmedNotice && (
                        <div className="chat-confirmed-notice">
                            <span className="notice-icon">✓</span>
                            <span>Appointment Synced to PMS</span>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <form className="chat-input" onSubmit={handleManualSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type a message..."
                        className="chat-input__field"
                    />
                    <button
                        type="submit"
                        className="chat-input__send-btn"
                        aria-label="Send message"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M18 2L9 11M18 2l-5 16-4-7-7-4 16-5z"
                                stroke="#024BFD"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}
