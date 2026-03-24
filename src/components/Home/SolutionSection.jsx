import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsWrapperRef = useRef(null);
    const baseLineRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    const cards = [
        {
            id: 1,
            number: "1",
            title: "ITL APPROACH",
            desc: "Evidence-based methodology combining research, training, and consulting to build trusted leaders."
        },
        {
            id: 2,
            number: "2",
            title: "OUR ECOSYSTEM",
            desc: "Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation."
        },
        {
            id: 3,
            number: "3",
            title: "GLOBAL IMPACT",
            desc: "UN SDG-aligned programs ensuring every initiative creates measurable social value."
        }
    ];

    useGSAP(() => {
        if (!containerRef.current) return;
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            // On mobile: just fade cards in on scroll, no pin, no fly-in
            gsap.fromTo([card1Ref.current, card2Ref.current, card3Ref.current],
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
            gsap.set(cardsWrapperRef.current, { autoAlpha: 1 });
            gsap.set(headerRef.current, { opacity: 0, display: 'none' });
            return;
        }

        // Desktop: existing animation unchanged
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=3000",
            }
        });
        tl.to(headerRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
            .set(cardsWrapperRef.current, { autoAlpha: 1 })
            .fromTo(baseLineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 2, ease: "power2.out" }
            )
            .fromTo(card1Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            )
            .fromTo(card2Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            )
            .fromTo(card3Ref.current,
                { x: "100vw", opacity: 0 },
                { x: "0%", opacity: 1, duration: 4, ease: "power2.out" }
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full lg:h-screen overflow-hidden flex flex-col justify-center text-white">
            <div className="absolute w-[30%] h-full top-0 right-0 bg-gradient-to-l from-[#0A0A0A] to-transparent z-50 pointer-events-none"></div>
            <div
                ref={headerRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 px-4"
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#D9D9D9] inline-block" />
                    <span className="text-[#FFFFFF] font-sans text-xs font-bold tracking-[0.2em] uppercase">THE SOLUTION</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                    <span className="italic font-light text-[#FFFFFF6B] mr-3">This is</span>
                    Why We Exist
                </h2>
                <p className="font-sans text-[#FFFFFF6B] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                    Trust transforms everything: engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
                </p>
            </div>
            <div
                ref={cardsWrapperRef}
                className="relative w-full max-w-7xl mx-auto lg:h-[65vh] z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 px-4 lg:px-0 py-12 lg:py-0 opacity-0 invisible"
            >
                <div
                    ref={baseLineRef}
                    className="absolute bottom-0 left-0 w-full h-[12px] origin-center z-0 hidden lg:flex flex-col justify-between"
                >
                    <div className="w-full h-full border-t-[3px] border-b-[3px] border-dashed border-white"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 50%, black 50%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%, black 50%, transparent)'
                        }}
                    />
                </div>

                <div ref={card1Ref} className="flex flex-col items-start lg:items-center justify-end h-auto lg:h-full relative z-10">
                    <div className="relative flex flex-col items-start text-start max-w-3xs mb-4">
                        <div className="hidden lg:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[0].number}
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">{cards[0].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-base">{cards[0].desc}</p>
                    </div>
                    <div className="w-1 h-32 bg-gradient-to-b from-transparent to-white hidden lg:block" />
                </div>
                <div ref={card2Ref} className="flex flex-col items-start lg:items-center justify-start text-start h-auto lg:h-full relative z-10">
                    <div className="relative flex flex-col items-start text-start max-w-3xs mt-0 lg:mt-10 mb-6">
                        <div className="hidden lg:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[1].number}
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">{cards[1].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-base">{cards[1].desc}</p>
                    </div>
                    <div className="w-1 h-42 flex-1 bg-gradient-to-b from-transparent to-white hidden lg:block" />
                </div>
                <div ref={card3Ref} className="flex flex-col items-start lg:items-center justify-end h-auto lg:h-full relative z-10">
                    <div className="relative flex flex-col items-start text-start max-w-3xs mb-4">
                        <div className="hidden lg:block absolute -top-1/2 -left-1/4 font-serif text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent from-50% to-100% ">
                            {cards[2].number}
                        </div>
                        <h3 className="text-3xl font-serif text-white mb-2 tracking-wide">{cards[2].title}</h3>
                        <p className="text-[#FFFFFF52] font-sans text-base">{cards[2].desc}</p>
                    </div>
                    <div className="w-1 h-32 bg-gradient-to-b from-transparent to-white hidden lg:block" />
                </div>

            </div>
        </section>
    );
};

export default SolutionSection;