import React, { useRef, useState } from 'react';
import { Eye, Target, Trophy } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ bgRef }) => {
    const containerRef = useRef(null);
    const circleRef = useRef(null);
    const centerIconRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const content = [
        {
            id: 0,
            label: "Vision",
            text: "A world in which organizations are led by trust and committed to the continuous development of people and purpose.",
            icon: Eye,
            angle: 0
        },
        {
            id: 1,
            label: "Mission",
            text: "To empower leaders with the clarity and courage to navigate complexity, ensuring sustainable growth for their communities.",
            icon: Target,
            angle: 120
        },
        {
            id: 2,
            label: "Impact",
            text: "Celebrating the milestones where human potential meets organizational excellence, creating a legacy of trusted leadership.",
            icon: Trophy,
            angle: 240
        },
    ];

    useGSAP(() => {
        if (!containerRef.current) return;
        const isMobile = window.innerWidth < 1024;
        const sections = content.length;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: isMobile ? "+=800" : "+=2000",
                pin: !isMobile,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.min(
                        sections - 1,
                        Math.floor(progress * sections)
                    );
                    setActiveTab(index);
                }
            }
        });
        if (bgRef && bgRef.current) {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: isMobile ? "+=800" : "+=2000",
                pin: isMobile ? false : bgRef.current,
                pinSpacing: false,
                scrub: true
            });
        }

        if (!isMobile) {
            tl.to(circleRef.current, {
                rotation: -240,
                ease: "none",
                duration: 1
            });

            tl.to(".orbit-icon-wrapper", {
                rotation: "+=240",
                ease: "none",
                duration: 1
            }, "<");

            tl.to(centerIconRef.current, {
                rotation: -240,
                ease: "none",
                duration: 1
            }, "<");
        }

    }, { scope: containerRef, dependencies: [bgRef] })

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent overflow-x-hidden">
            {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
            <div className='absolute h-full w-full bottom-full left-0 z-[-1]'>
                <svg width="100%" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_home_about)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF;fill:color(display-p3 0.0000 0.0000 1.0000);fill-opacity:1" }} />
                    </g>
                    <g filter="url(#filter1_f_home_about)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000;fill:color(display-p3 0.0000 0.5020 0.0000);fill-opacity:1" }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_home_about" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_home_about" />
                        </filter>
                        <filter id="filter1_f_home_about" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_home_about" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
                    <div ref={circleRef} className="relative w-[260px] sm:w-[300px] md:w-[400px] h-[260px] sm:h-[300px] md:h-[400px] rounded-full flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="49"
                                fill="#FFFFFF14"
                                backdrop-filter="blur(50px)"
                                stroke="#FFFFFF85"
                                strokeWidth="0.3"
                                strokeDasharray="2 2"
                                strokeLinecap="round"
                            />
                        </svg>
                        {content.map((item, index) => {
                            const rotation = item.angle;
                            return (
                                <div
                                    key={item.id}
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ transform: `rotate(${rotation}deg)` }}
                                >
                                    <div
                                        className="orbit-icon-wrapper absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center pointer-events-auto"
                                        style={{ transform: `rotate(${-rotation}deg)` }}
                                    >
                                        <button
                                            className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 z-10 
                                                ${activeTab === index
                                                    ? 'bg-[#0080FFA3] border border-[#0080FFA3] text-white'
                                                    : 'bg-[#FFFFFF3D] text-white'
                                                }`}
                                        >
                                            <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div ref={centerIconRef} className="absolute z-0 flex items-center justify-center pointer-events-none">
                        <svg width="420" height="420" viewBox="0 0 421 421" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] h-[300px] md:w-[420px] md:h-[400px]">
                            <g filter="url(#filter0_dd_247_79)">
                                <path d="M208.434 151.622C208.85 149.459 211.945 149.459 212.361 151.622L223.777 210.937C223.861 211.377 224.092 211.777 224.431 212.071L270.092 251.614C271.756 253.055 270.209 255.736 268.128 255.015L211.052 235.244C210.628 235.097 210.167 235.097 209.743 235.244L152.667 255.015C150.586 255.736 149.038 253.055 150.703 251.614L196.364 212.071C196.703 211.777 196.934 211.377 197.018 210.937L208.434 151.622Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_dd_247_79" x="0" y="0" width="420" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="40" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_247_79" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="21" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0" />
                                    <feBlend mode="normal" in2="effect1_dropShadow_247_79" result="effect2_dropShadow_247_79" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_247_79" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div className="flex flex-col items-start text-left space-y-6 lg:pl-10">
                    <div className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-white">
                        <span className="w-2 h-2 bg-white inline-block"></span>
                        What Drives Us
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                        Our North Star
                    </h2>
                    <div className="mt-8 min-h-[220px] flex flex-col justify-between w-full">
                        <div className="animate-fadeIn" key={activeTab}>
                            <h3 className="text-3xl font-serif italic text-white mb-4">
                                {content[activeTab].label}
                            </h3>
                            <p className="text-lg text-[#FFFFFF6B] font-light leading-relaxed font-sans max-w-lg">
                                {content[activeTab].text}
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-4 w-1/2 max-w-md">
                            <span className="font-mono text-sm text-white">
                                {activeTab + 1}/3
                            </span>
                            <div className="flex-1 h-[2px] bg-[#FFFFFF29] rounded-full relative overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-[#0080FF] transition-all duration-300 ease-out"
                                    style={{ width: `${((activeTab + 1) / 3) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;