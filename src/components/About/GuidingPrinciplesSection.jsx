import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GuidingPrinciplesSection = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".center-node",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
        );
        tl.fromTo(".connector-line",
            { strokeDashoffset: 100, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" }
            , "-=0.2");
        tl.fromTo(".principle-node",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }
            , "-=0.8");
        gsap.to(".principle-node", {
            y: "5px",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: { each: 0.5, from: "random" }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full flex items-center justify-center py-12 md:py-24 overflow-hidden min-h-[500px]">
            {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
            <div className='absolute h-full w-full -top-10 left-0 z-[-1]'>
                <svg width="100%" height="2098" viewBox="0 0 1280 2098" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_601_9)">
                        <path d="M373.322 969.503C180.221 880.998 -43.1545 889.503 -100.179 1075.5C-140.8 1208 -71.7861 1328.31 31.3215 1372.5C328.846 1500 1000.82 1468.5 1223.82 1247.5C1447.15 1026.18 1455.82 650 1210.32 650C1073.32 650 1012.82 807.503 925.822 889.503C760.929 1044.92 517.321 1035.5 373.322 969.503Z" fill="#800080" />
                    </g>
                    <g filter="url(#filter1_f_601_9)">
                        <path d="M373.322 969.503C180.221 880.998 -43.1545 889.503 -100.179 1075.5C-140.8 1208 -71.7861 1328.31 31.3215 1372.5C328.846 1500 1000.82 1468.5 1223.82 1247.5C1447.15 1026.18 1455.82 650 1210.32 650C1073.32 650 1012.82 807.503 925.822 889.503C760.929 1044.92 517.321 1035.5 373.322 969.503Z" fill="#0000FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_601_9" x="-312" y="450" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_601_9" />
                        </filter>
                        <filter id="filter1_f_601_9" x="-762" y="0" width="2804.89" height="2097.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="325" result="effect1_foregroundBlur_601_9" />
                        </filter>
                    </defs>
                </svg>

            </div>

            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center overflow-hidden scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{
                        maskImage: "radial-gradient(circle at center, transparent 120px, black 121px)",
                        WebkitMaskImage: "radial-gradient(circle at center, transparent 120px, black 121px)"
                    }}
                >
                    <path pathLength="100" d="M 50 50 C 40 50, 40 25, 30 25" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />
                    <path pathLength="100" d="M 50 50 L 22 50" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />
                    <path pathLength="100" d="M 50 50 C 40 50, 40 75, 30 75" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />

                    <path pathLength="100" d="M 50 50 C 60 50, 60 25, 70 25" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />
                    <path pathLength="100" d="M 50 50 L 78 50" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />
                    <path pathLength="100" d="M 50 50 C 60 50, 60 75, 70 75" className="connector-line fill-none stroke-white/20 stroke-[0.15] [stroke-dasharray:1,1]" />
                </svg>
                <div className="center-node absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-[#FFFFFF80] bg-[#FFFFFF14] flex items-center justify-center backdrop-blur-sm" style={{ boxShadow: "0px 4px 100px 0px #FFFFFF1A" }}>
                    <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-white inline-block" />
                        <span className="text-white font-sans text-sm font-bold tracking-[0.2em] uppercase mt-0.5">WHAT GUIDES US</span>
                    </div>
                </div>
                <div className="principle-node absolute top-[25%] left-[30%] -translate-y-1/2 -translate-x-full flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Trust Through Transparency</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>

                <div className="principle-node absolute top-[50%] left-[22%] -translate-y-1/2 -translate-x-full flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Evidence Over Ideology</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>

                <div className="principle-node absolute top-[75%] left-[30%] -translate-y-1/2 -translate-x-full flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Continuous Learning</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>

                <div className="principle-node absolute top-[25%] left-[70%] -translate-y-1/2 flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Respect for People</span>
                    </div>
                </div>

                <div className="principle-node absolute top-[50%] left-[78%] -translate-y-1/2 flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Impact Beyond Profit</span>
                    </div>
                </div>

                <div className="principle-node absolute top-[75%] left-[70%] -translate-y-1/2 flex items-center z-10">
                    <div className="flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#FFFFFF0A] bg-[#FFFFFF14] whitespace-nowrap" style={{ boxShadow: "0px 0px 30px 0px #FFFFFF14" }}>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span className="text-white/90 font-serif italic text-[17px] tracking-wide">Integration Over Isolation</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GuidingPrinciplesSection;