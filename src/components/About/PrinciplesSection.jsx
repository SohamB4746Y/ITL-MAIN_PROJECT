import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrinciplesSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".principles-text",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center px-4">
            <h2 className="principles-text font-serif text-4xl md:text-6xl lg:text-7xl text-white text-center leading-tight max-w-5xl">
                The Principles That Shape <br className="hidden md:block" />
                Everything We Do
            </h2>
        </section>
    );
};

export default PrinciplesSection;
