import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MethodologySection = () => {
    const containerRef = React.useRef(null);
    const textRef = React.useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(containerRef.current.querySelector('h2'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(containerRef.current.querySelector('p'),
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                "<"
            );
        tl.to(".bar-1", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-1", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
        tl.to(".bar-2", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-2", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
        tl.to(".bar-3", { height: "100%", duration: 1, ease: "power2.out" })
            .to(".text-3", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");


    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-gradient-to-t from-[#00264D] to-[#0A0A0A00] pt-24 pb-14 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 md:gap-20">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="w-2 h-2 bg-[#D9D9D9] inline-block" />
                        <span className="text-[#FFFFFF] font-sans text-xs font-bold tracking-[0.2em] uppercase">THE SOLUTION</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1]">
                        How We Transform <br /> Leadership
                    </h2>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="font-sans text-white text-base md:text-lg">
                        Trusted leadership isn't built on theory alone. Our integrated approach  combines rigorous research, practical training to create lasting organizational change.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pt-28 h-screen flex justify-between items-end gap-4 px-4 md:px-0">
                <div className="w-1/3 h-full flex items-end gap-4 group">
                    <div className="bar-1 w-full md:w-30  bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-4 md:ml-8 w-[300px] opacity-0 text-1">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Research & Insights</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Evidence-based leadership models</li>
                                <li>Continuous innovation</li>
                                <li>Data-driven understanding</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[70%] flex items-end gap-4 group">
                    <div className="bar-2 w-full md:w-30  bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-4 md:ml-8 w-[400px] opacity-0 text-2">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Training & Development</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Practical skill-building</li>
                                <li>Certification programs</li>
                                <li>Organizational transformation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[40%] flex items-end gap-4 group">
                    <div className="bar-3 w-full md:w-30 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
                        <div className="absolute top-0 left-full ml-4 md:ml-8 w-[300px] opacity-0 text-3">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Consulting & Implementation</h3>
                            <ul className="list-disc list-inside text-white text-sm space-y-1 font-sans">
                                <li>Strategic partnership</li>
                                <li>Custom solutions</li>
                                <li>Measurable impact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
