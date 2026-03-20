import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".founder-image",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
        );
        tl.fromTo(".founder-content > *",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex justify-center">

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                <div className="founder-image relative rounded-2xl overflow-hidden w-full lg:w-[38%] max-w-sm mx-auto lg:mx-0">
                    <img
                        src="/images/founder.webp"
                        alt="Leslie Martinich"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
                </div>
                <div className="founder-content w-full lg:w-[60%] flex flex-col items-start text-left">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2.5 h-2.5 bg-white inline-block" />
                        <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                            MEET OUR FOUNDER
                        </span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
                        Leslie Martinich
                    </h2>
                    <p className="font-sans text-white/50 text-lg md:text-xl font-light mb-10">
                        Founder & Group CEO, Institute of Trusted Leadership
                    </p>
                    <ul className="space-y-4 mb-12">
                        <li className="flex items-start gap-4">
                            <span className="w-4 h-px bg-[#FFFFFF6B] mt-3 shrink-0" />
                            <p className="font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed">
                                <span className="text-white font-bold">20+ years</span> in leadership development & organizational transformation
                            </p>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-4 h-px bg-[#FFFFFF6B] mt-3 shrink-0" />
                            <p className="font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed">
                                Worked across six continents & multiple industries
                            </p>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-4 h-px bg-[#FFFFFF6B] mt-3 shrink-0" />
                            <p className="font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed">
                                Researcher, consultant, author, & educator
                            </p>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-4 h-px bg-[#FFFFFF6B] mt-3 shrink-0" />
                            <p className="font-sans text-[#FFFFFF6B] text-base md:text-lg leading-relaxed">
                                Advocate for trust-based leadership cultures
                            </p>
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="group bg-[#006AFF] text-white font-sans font-bold py-4 px-8 rounded-sm flex items-center gap-2"
                    >
                        Connect with Leslie on LinkedIn
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
