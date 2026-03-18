import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RipplesSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".ripple-header",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
        );
        tl.fromTo(".grid-line-h",
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" }
        )
            .fromTo(".grid-line-v",
                { scaleY: 0, opacity: 0 },
                { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" },
                "<"
            );
        tl.fromTo(".stat-item",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
        );
        tl.fromTo(".black-gradient-overlay",
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
        );
        tl.fromTo(".discover-btn",
            { scale: 0.8, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center overflow-hidden">
            <div className="text-start mb-20 max-w-5xl">
                <div className="ripple-header flex items-center justify-start gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-[#D9D9D9] inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        OUR METHODOLOGY
                    </span>
                </div>
                <h2 className="ripple-header font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
                    Creating Ripples of Change
                </h2>
                <p className="ripple-header font-sans text-white text-base md:text-lg leading-relaxed">
                    When one leader transforms, their entire organization feels it. When one organization transforms, their community feels it. This is how trusted leadership creates ripples that reach far beyond the boardroom.
                </p>
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-white grid-line-h origin-center" />
                <div className="absolute top-0 left-1/3 h-full w-[0.5px] bg-white grid-line-v origin-center transform -translate-x-1/2 hidden md:block" />
                <div className="absolute top-0 right-1/3 h-full w-[0.5px] bg-white grid-line-v origin-center transform translate-x-1/2 hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-3">

                    <div className="stat-item flex flex-col items-center justify-center py-12 px-4 text-center">
                        <div className="font-serif text-5xl md:text-6xl text-white mb-2">20+ <span className="text-2xl align-bottom">Yrs</span></div>
                        <p className="font-sans text-[#FFFFFF57] text-sm">In Leadership Development.</p>
                    </div>

                    <div className="stat-item flex flex-col items-center justify-center py-12 px-4 text-center border-t border-b border-white md:border-none">
                        <div className="font-serif text-5xl md:text-6xl text-white mb-2">1000+</div>
                        <p className="font-sans text-[#FFFFFF57] text-sm">Organization consulted</p>
                    </div>

                    <div className="stat-item flex flex-col items-center justify-center py-12 px-4 text-center">
                        <div className="font-serif text-5xl md:text-6xl text-white mb-2">15+</div>
                        <p className="font-sans text-[#FFFFFF57] text-sm">Research Publications</p>
                    </div>

                    <div className="stat-item flex flex-col items-center justify-center py-12 px-4 text-center border-t border-b border-white md:border-none">
                        <div className="font-serif text-5xl md:text-6xl text-white mb-2">2000+</div>
                        <p className="font-sans text-[#FFFFFF57] text-sm">Leaders Trained</p>
                    </div>

                    <div className="relative flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
                        <button className="discover-btn relative z-30 bg-[#006AFF] text-white font-sans font-bold py-4 px-8 transition-colors duration-300 cursor-pointer">
                            Discover Ecosystem
                        </button>
                    </div>

                    <div className="stat-item flex flex-col items-center justify-center py-12 px-4 text-center border-t border-b border-white md:border-none">
                        <div className="font-serif text-5xl md:text-6xl text-white mb-2">10+</div>
                        <p className="font-sans text-[#FFFFFF57] text-sm">Countries Experience</p>
                    </div>

                </div>
            </div>
            <div className="black-gradient-overlay absolute z-10 bottom-0 left-0 w-full h-[50%] bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

        </section>
    );
};

export default RipplesSection;
