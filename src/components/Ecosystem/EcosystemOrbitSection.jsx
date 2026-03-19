import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['LUCA THE LEADER', 'MARTINICH CONSULTING', 'MARTINICH COURSES', 'MARTINICH R&D'];

const nodes = [
    { id: 0, label: 'Luca the Leader', position: { top: '5%', left: '50%', transform: 'translateX(-50%)' } },
    { id: 1, label: 'Martinich Consulting', position: { top: '50%', right: '2%', transform: 'translateY(-50%)' } },
    { id: 2, label: 'Martinich R&D', position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' } },
    { id: 3, label: 'Martinich Institute', position: { top: '50%', left: '2%', transform: 'translateY(-50%)' } },
];

const EcosystemOrbitSection = ({ activeTab, setActiveTab }) => {
    const containerRef = useRef(null);
    const orbitRingRef = useRef(null);
    const centerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.fromTo(centerRef.current,
            { scale: 0.7, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
        );
        tl.fromTo('.orbit-ring-path',
            { strokeDashoffset: 1200, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 1.5, ease: 'power2.inOut' },
            '-=0.4'
        );
        tl.fromTo('.orbit-node',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.4)' },
            '-=0.8'
        );

        gsap.to('.orbit-node', {
            y: '8px',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: { each: 0.4, from: 'random' }
        });

        tl.fromTo('.orbit-section-header',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
            0
        );
        tl.fromTo('.orbit-tab-btn',
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
            '-=0.4'
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden">
            {/* Header */}
            <div className="w-full max-w-7xl mb-16">
                <div className="orbit-section-header flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        THE POWER OF INTEGRATION
                    </span>
                </div>
                <h2 className="orbit-section-header font-serif text-4xl md:text-5xl lg:text-6xl text-white">
                    Our Ecosystem
                </h2>
            </div>

            {/* Orbital Diagram */}
            <div className="relative w-full max-w-2xl aspect-square mx-auto mb-16">
                {/* SVG orbit ring */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        ref={orbitRingRef}
                        className="orbit-ring-path"
                        cx="250" cy="250" r="185"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        fill="none"
                        style={{ strokeDasharray: '6 6', strokeDashoffset: 1200 }}
                    />
                </svg>

                {/* Center ILT node */}
                <div
                    ref={centerRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                               w-32 h-32 md:w-40 md:h-40 rounded-full
                               bg-white flex items-center justify-center
                               shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                >
                    <span className="font-serif font-bold text-2xl md:text-3xl text-[#0A0A0A]">ILT</span>
                </div>

                {/* Satellite nodes */}
                {nodes.map((node) => (
                    <button
                        key={node.id}
                        className={`orbit-node absolute z-10 px-4 md:px-6 py-2.5 rounded-full
                                    border backdrop-blur-md font-sans text-sm font-medium
                                    whitespace-nowrap transition-all duration-300 cursor-pointer
                                    ${activeTab === node.id
                                ? 'bg-[#0080FFA3] border-[#0080FF] text-white shadow-[0_0_25px_rgba(0,128,255,0.4)]'
                                : 'bg-[#FFFFFF14] border-[#FFFFFF29] text-white hover:bg-[#FFFFFF22] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                            }`}
                        style={node.position}
                        onClick={() => setActiveTab(node.id)}
                    >
                        {node.label}
                    </button>
                ))}
            </div>

            {/* Tab strip */}
            <div className="w-full max-w-7xl border-b border-[#FFFFFF14] mb-0">
                <div className="flex gap-0 overflow-x-auto hide-scrollbar">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`orbit-tab-btn shrink-0 px-6 md:px-8 py-4 font-sans text-xs font-bold tracking-[0.15em] uppercase
                                        transition-all duration-300 border-b-2 cursor-pointer
                                        ${activeTab === index
                                    ? 'text-white border-white'
                                    : 'text-[#FFFFFF52] border-transparent hover:text-white/70'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default EcosystemOrbitSection;
