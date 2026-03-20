import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const personas = [
    {
        id: 0,
        label: 'An Organization',
        description: "Leadership development shouldn't require complex logistics or large budgets. You deserve access to quality growth, regardless of where you're starting.",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="18" r="8" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M10 48C10 38 18 32 28 32C38 32 46 38 46 48" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="12" cy="22" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M2 45C2 37 7 33 12 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <circle cx="44" cy="22" r="6" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M54 45C54 37 49 33 44 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>
        ),
        bigIcon: (
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="50" r="24" stroke="white" strokeWidth="2" fill="none" />
                <path d="M28 140C28 112 52 94 80 94C108 94 132 112 132 140" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="32" cy="62" r="18" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M4 132C4 108 18 96 32 96" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
                <circle cx="128" cy="62" r="18" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M156 132C156 108 142 96 128 96" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
        ),
        actions: [
            { text: 'You want to assess your current leadership culture', cta: 'Start with Martinich Consulting', href: '#' },
            { text: 'You need to train your entire leadership team', cta: null, href: '#' },
            { text: 'You need custom programs for specific teams or departments', cta: null, href: '#' },
        ]
    },
    {
        id: 1,
        label: 'An Individual',
        description: "Your personal growth should come first, start wherever you are. We have learning options that will suit you no matter your readiness.",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="18" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M10 52C10 40 18 34 28 34C38 34 46 40 46 52" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
        ),
        bigIcon: (
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="52" r="28" stroke="white" strokeWidth="2" fill="none" />
                <path d="M24 150C24 118 50 98 80 98C110 98 136 118 136 150" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        ),
        actions: [
            { text: 'You want to build your leadership foundations', cta: 'Start with LUCA The Leader', href: '#' },
            { text: 'You need structured certification programs', cta: null, href: '#' },
            { text: 'You want executive coaching and mentoring', cta: null, href: '#' },
        ]
    },
    {
        id: 2,
        label: 'A Researcher',
        description: "Research exists to help practitioners, while practitioners help test research. We bridge this gap with collaborations that bridge theory and practice.",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="8" width="28" height="36" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
                <line x1="18" y1="18" x2="34" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="24" x2="34" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="30" x2="28" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="38" cy="40" r="6" stroke="white" strokeWidth="1.5" fill="none" />
                <line x1="43" y1="45" x2="48" y2="50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        bigIcon: (
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="32" y="20" width="80" height="100" rx="8" stroke="white" strokeWidth="2" fill="none" />
                <line x1="48" y1="50" x2="112" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="48" y1="68" x2="112" y2="68" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="48" y1="86" x2="88" y2="86" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="116" cy="124" r="18" stroke="white" strokeWidth="2" fill="none" />
                <line x1="129" y1="137" x2="144" y2="152" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        actions: [
            { text: 'You want to partner on leadership research', cta: 'Connect with Martinich R&D', href: '#' },
            { text: 'You want to co-develop leadership programs', cta: null, href: '#' },
            { text: 'You want to publish through ITL channels', cta: null, href: '#' },
        ]
    }
];

const FindEntryPointSection = () => {
    const containerRef = useRef(null);
    const expandedRef = useRef(null);
    const [selectedPersona, setSelectedPersona] = useState(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            }
        });
        tl.fromTo('.entry-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
        );
        tl.fromTo('.persona-card',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
            '-=0.4'
        );
    }, { scope: containerRef });

    const handleSelectPersona = (persona) => {
        setSelectedPersona(persona);
        setTimeout(() => {
            if (expandedRef.current) {
                gsap.fromTo(expandedRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );
            }
        }, 10);
    };

    const currentPersona = selectedPersona !== null ? personas[selectedPersona] : null;

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
            {/* Purple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a006620] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="entry-header flex items-center justify-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-white inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                            WHERE DO YOU FIT
                        </span>
                    </div>
                    <h2 className="entry-header font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
                        Find Your Entry Point into the ITL Ecosystem
                    </h2>
                </div>

                {/* 3 persona selector cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {personas.map((persona) => (
                        <button
                            key={persona.id}
                            onClick={() => handleSelectPersona(persona.id)}
                            className={`persona-card relative text-left p-8 rounded-2xl border transition-all duration-300 group cursor-pointer
                                ${selectedPersona === persona.id
                                    ? 'bg-[#0080FF29] border-[#0080FF6B]'
                                    : 'bg-[#FFFFFF0A] border-[#FFFFFF14] hover:bg-[#FFFFFF14] hover:border-[#FFFFFF29]'
                                }`}
                        >
                            <div className="absolute top-4 right-4">
                                <ArrowUpRight className="w-5 h-5 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                {persona.icon}
                            </div>
                            <h3 className="font-serif text-xl text-white mb-3">{persona.label}</h3>
                            <p className="font-sans text-[#FFFFFF52] text-sm leading-relaxed">{persona.description}</p>
                        </button>
                    ))}
                </div>

                {/* Expanded panel */}
                {selectedPersona !== null && currentPersona && (
                    <div ref={expandedRef} className="relative w-full rounded-2xl border border-[#FFFFFF14] bg-[#FFFFFF08] p-8 md:p-12">
                        {/* Back button */}
                        <button
                            onClick={() => setSelectedPersona(null)}
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 font-sans text-sm cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left: actions */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-1.5 h-1.5 bg-white inline-block" />
                                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">IF YOU ARE...</span>
                                </div>
                                <h3 className="font-serif text-4xl md:text-5xl text-white mb-10">
                                    {currentPersona.label}
                                </h3>
                                <ul className="space-y-0">
                                    {currentPersona.actions.map((action, i) => (
                                        <li key={i} className="border-b border-[#FFFFFF14] py-5">
                                            <div className="flex items-center justify-between gap-4 group">
                                                <div className="flex-1">
                                                    <p className="font-sans text-white text-base leading-relaxed">{action.text}</p>
                                                    {action.cta && (
                                                        <a href={action.href} className="inline-flex items-center gap-2 mt-2 font-sans text-[#006AFF] text-sm font-bold hover:text-blue-400 transition-colors">
                                                            {action.cta}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors shrink-0" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: big illustration icon */}
                            <div className="lg:w-64 flex items-center justify-center opacity-40">
                                {currentPersona.bigIcon}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FindEntryPointSection;
