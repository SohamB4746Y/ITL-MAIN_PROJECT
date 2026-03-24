import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MethodologySection = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const isMobile = window.innerWidth < 1024;

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
        ).fromTo(containerRef.current.querySelector('p'),
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            "<"
        );

        if (!isMobile) {
            tl.to(".bar-1", { height: "100%", duration: 1, ease: "power2.out" })
                .to(".text-1", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
            tl.to(".bar-2", { height: "100%", duration: 1, ease: "power2.out" })
                .to(".text-2", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
            tl.to(".bar-3", { height: "100%", duration: 1, ease: "power2.out" })
                .to(".text-3", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
        } else {
            tl.fromTo(".mobile-method-card",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
            );
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-gradient-to-t from-[#00264D] to-[#0A0A0A00] pt-16 md:pt-24 pb-14 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Header — same on all screens */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-20 mb-12 md:mb-0">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-start gap-2 mb-4">
                        <span className="w-2 h-2 bg-[#D9D9D9] inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">THE SOLUTION</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1]">
                        How We Transform <br /> Leadership
                    </h2>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="font-sans text-white text-base md:text-lg">
                        Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
                    </p>
                </div>
            </div>

            {/* MOBILE layout — stacked cards, shown only below lg */}
            <div className="lg:hidden max-w-7xl mx-auto mt-10 flex flex-col gap-5">
                {[
                    {
                        title: "Research & Insights",
                        items: ["Evidence-based leadership models", "Continuous innovation", "Data-driven understanding"]
                    },
                    {
                        title: "Training & Development",
                        items: ["Practical skill-building", "Certification programs", "Organizational transformation"]
                    },
                    {
                        title: "Consulting & Implementation",
                        items: ["Strategic partnership", "Custom solutions", "Measurable impact"]
                    }
                ].map((card, i) => (
                    <div key={i} className="mobile-method-card bg-[#FFFFFF08] border border-[#FFFFFF14] rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-serif text-4xl text-white/20 font-bold leading-none">{i + 1}</span>
                            <h3 className="font-serif text-xl text-white">{card.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {card.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 shrink-0" />
                                    <span className="font-sans text-[#FFFFFF6B] text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* DESKTOP layout — animated bars, shown only at lg and above */}
            <div className="hidden lg:flex max-w-6xl mx-auto pt-28 h-screen justify-between items-end gap-4 px-0">
                <div className="w-1/3 h-full flex items-end gap-4 group">
                    <div className="bar-1 w-full md:w-30 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
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
                    <div className="bar-2 w-full md:w-30 bg-gradient-to-b from-[#000000] to-transparent h-0 relative">
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
