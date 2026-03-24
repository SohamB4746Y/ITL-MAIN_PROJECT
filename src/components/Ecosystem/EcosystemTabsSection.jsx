import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tabContent = [
    {
        label: 'AWARENESS & ACCESS',
        title: 'LUCA the Leader',
        subtitle: 'Where Leadership Awareness Begins',
        bullets: [
            'Free resources and community-driven leadership awareness',
            'Scholarship programs making quality training accessible to all',
            'CSR partnerships connecting corporate support with social impact',
        ],
        cta: 'Visit LUCA The Leader',
        ctaHref: '#',
        image: '/images/lucaweb.webp',
    },
    {
        label: 'STRATEGY & IMPLEMENTATION',
        title: 'Martinich Consulting',
        subtitle: 'Strategic Leadership Partnerships',
        bullets: [
            'Culture diagnostics and trust-building transformations',
            'Executive coaching and succession planning',
            'Tailored solutions co-created with your leadership team',
        ],
        cta: 'Visit Martinich Consulting',
        ctaHref: '#',
        image: '/images/lucaweb2.webp',
    },
    {
        label: 'LEARNING & DEVELOPMENT',
        title: 'Martinich Courses',
        subtitle: 'Learning That Transforms',
        bullets: [
            'Certification programs for individuals and teams',
            'Self-paced and cohort-based learning formats',
            'Frameworks grounded in evidence-based leadership research',
        ],
        cta: 'Explore Courses',
        ctaHref: '#',
        image: '/images/lucaweb.webp',
    },
    {
        label: 'RESEARCH & INNOVATION',
        title: 'Martinich R&D',
        subtitle: 'Innovation Meets Insight',
        bullets: [
            'Original research on leadership trust and organizational effectiveness',
            'Data-driven models powering all ITL programs',
            'Academic and industry partnerships for continuous innovation',
        ],
        cta: 'Explore Research',
        ctaHref: '#',
        image: '/images/lucaweb.webp',
    },
];

const EcosystemTabsSection = ({ activeTab }) => {
    const containerRef = useRef(null);
    const tab = tabContent[activeTab];

    useGSAP(() => {
        if (!containerRef.current) return;
        gsap.fromTo('.tabs-content-wrapper',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-20 px-4 md:px-8 bg-[#0080FF08] overflow-hidden">
            <div className="tabs-content-wrapper w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn" key={activeTab}>
                {/* Left: content */}
                <div className="flex flex-col items-start text-left">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-white inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                            {tab.label}
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2 leading-tight">
                        {tab.title}
                    </h2>
                    <p className="font-serif italic text-[#FFFFFF6B] text-lg mb-8">{tab.subtitle}</p>
                    <ul className="space-y-4 mb-10">
                        {tab.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="w-4 h-px bg-[#FFFFFF6B] mt-3 shrink-0" />
                                <p className="font-sans text-[#FFFFFF6B] text-base leading-relaxed">{bullet}</p>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={tab.ctaHref}
                        className="group bg-[#006AFF] text-white font-sans font-bold py-4 px-8 flex items-center gap-3 transition-opacity hover:opacity-90"
                    >
                        {tab.cta}
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Right: image */}
                <div className="relative rounded-2xl overflow-hidden border border-[#FFFFFF14] aspect-video lg:aspect-auto lg:h-[420px]">
                    <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    {/* Label badge top-left */}
                    <div className="absolute top-0 left-0 bg-[#0080FF6B] text-white text-[10px] font-bold px-5 py-3 rounded-br-2xl uppercase tracking-widest flex items-center gap-2" style={{ backdropFilter: 'blur(20px)' }}>
                        <span className="w-1.5 h-1.5 bg-white" />
                        {tab.label}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemTabsSection;
