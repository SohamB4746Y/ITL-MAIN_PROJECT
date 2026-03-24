import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisionOriginSection = () => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);
    const headerRef = useRef(null);
    const lineRef = useRef(null);
    const maskRef = useRef(null);
    const creditsRollRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current || !maskRef.current || !creditsRollRef.current) return;
        const isMobile = window.innerWidth < 1024;
        const maskHeight = maskRef.current.offsetHeight;
        gsap.set('.roll-block', { height: maskHeight });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: isMobile ? "+=2000" : "+=4000",
                pin: !isMobile,
                scrub: 1,
            }
        });
        gsap.set(headerRef.current, { y: isMobile ? 0 : "25vh" });
        gsap.set(lineRef.current, { scaleX: 0 });
        tl.to(headerRef.current, { y: 0, duration: 1.5, ease: "power2.inOut" }, 0)
            .to(lineRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0);
        tl.to(creditsRollRef.current, {
            y: () => -(creditsRollRef.current.offsetHeight - maskHeight),
            duration: 7,
            ease: "none"
        }, 1.5);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full min-h-screen text-white">
            <section ref={triggerRef} className="relative h-screen w-full flex flex-col px-4 md:px-8 pt-6 md:pt-12 pb-8">
                {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
                <div className='absolute h-full w-full bottom-full left-0 -z-10 hidden md:block'>
                    <svg width="100%" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_vision_origin)">
                            <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF;fill:color(display-p3 0.0000 0.0000 1.0000);fill-opacity:1" }} />
                        </g>
                        <g filter="url(#filter1_f_vision_origin)">
                            <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000;fill:color(display-p3 0.0000 0.5020 0.0000);fill-opacity:1" }} />
                        </g>
                        <defs>
                            <filter id="filter0_f_vision_origin" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_vision_origin" />
                            </filter>
                            <filter id="filter1_f_vision_origin" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_vision_origin" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div ref={headerRef} className="w-full max-w-4xl mx-auto flex flex-col items-center shrink-0 z-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-2.5 h-2.5 bg-white inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase shadow-black drop-shadow-md">
                            WHERE WE BEGAN
                        </span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-center drop-shadow-lg">
                        Born <span className="italic text-[#FFFFFF3D] font-serif">from</span> a Vision, <br />
                        Built on Experience
                    </h2>
                    <div className="w-[100%] mx-auto h-px">
                        <div ref={lineRef} className="w-[80%] mx-auto h-full bg-[#FFFFFF3D] origin-center" />
                    </div>
                </div>
                <div
                    ref={maskRef}
                    className="flex-1 w-full max-w-3xl mx-auto overflow-hidden relative z-10"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                >
                    <div ref={creditsRollRef} className="w-full flex flex-col mr-[5%] max-w-xl mx-auto">
                        <div className="roll-block shrink-0" />
                        <div className="roll-block shrink-0 flex flex-col justify-center items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-1.5 h-1.5 bg-white inline-block" />
                                <span className="text-white font-sans text-sm font-medium tracking-[0.2em] uppercase">THE PROBLEM</span>
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">The Trust Gap</h3>
                            <p className="font-sans text-white text-sm md:text-lg leading-relaxed max-w-2xl">
                                Leadership development has focused on skills and frameworks, while trust in leaders continues to decline. Organizations optimize performance—but lose people, engagement, and long-term resilience.
                            </p>
                        </div>
                        <div className="roll-block shrink-0" />
                        <div className="roll-block shrink-0 flex flex-col justify-center items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-1.5 h-1.5 bg-white inline-block" />
                                <span className="text-white font-sans text-sm font-medium tracking-[0.2em] uppercase">THE INSIGHT</span>
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Trust is the Foundation</h3>
                            <p className="font-sans text-white text-sm md:text-lg leading-relaxed max-w-2xl">
                                Through years of research and global consulting, one insight became clear: trust isn't a soft skill—it's the absolute currency of leadership effectiveness.
                            </p>
                        </div>
                        <div className="roll-block shrink-0" />
                        <div className="roll-block shrink-0 flex flex-col justify-center items-start text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-1.5 h-1.5 bg-white inline-block" />
                                <span className="text-white font-sans text-sm font-medium tracking-[0.2em] uppercase">THE SOLUTION</span>
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">An Integrated Ecosystem</h3>
                            <p className="font-sans text-white text-sm md:text-lg leading-relaxed max-w-2xl">
                                Trust cannot be built through training alone. It requires research, development, organizational transformation, and continuous learning—working together.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default VisionOriginSection;