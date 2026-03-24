import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadershipSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
        tl.fromTo(".header-animate",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
        tl.fromTo(".impact-card",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        );
        tl.fromTo(".impact-image",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            "-=0.6"
        );

    }, { scope: containerRef });

    const impactCards = [
        {
            title: "Quality Education",
            description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
            icon: (
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "Gender Equality",
            description: "Achieve gender equality and empower all women and girls.",
            icon: (
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "Economic Growth",
            description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment.",
            icon: (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                    <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                </div>
            )
        },
        {
            title: "Global Partnerships",
            description: "Strengthen the means of implementation and revitalize the global partnership for sustain-able development.",
            icon: (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center">
            {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
            <div className='absolute h-full w-full bottom-1/2 left-0 z-[-1]'>
                <svg width="100%" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_leadership)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" style={{ fill: "#0000FF;fill:color(display-p3 0.0000 0.0000 1.0000);fill-opacity:1" }} />
                    </g>
                    <g filter="url(#filter1_f_leadership)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" style={{ fill: "#008000;fill:color(display-p3 0.0000 0.5020 0.0000);fill-opacity:1" }} />
                    </g>
                    <defs>
                        <filter id="filter0_f_leadership" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_leadership" />
                        </filter>
                        <filter id="filter1_f_leadership" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_leadership" />
                        </filter>
                    </defs>
                </svg>
            </div>
            {/* Header */}
            <div className="text-center mb-16">
                <div className="header-animate flex items-center justify-center gap-3 mb-6">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase">
                        LEADERSHIP THAT CREATES CHANGE
                    </span>
                </div>
                <h2 className="header-animate font-serif text-4xl md:text-6xl text-white leading-[1.1]">
                    Leadership for Good
                </h2>
            </div>
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-6">
                <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
                    {impactCards.map((card, index) => (
                        <div
                            key={index}
                            className="impact-card bg-[#0A0A0AA3] p-6 rounded-2xl flex flex-col gap-8 transition-colors duration-300 group min-h-[250px]"
                        >
                            <div className="w-10 h-10 flex items-center justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                                {card.icon}
                            </div>
                            <div className="mt-auto">
                                <h3 className="font-serif text-2xl text-white mb-3">{card.title}</h3>
                                <p className="font-sans text-white text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="impact-image w-full lg:w-[35%] bg-[#F0F4F8] rounded-2xl overflow-hidden relative min-h-[300px] md:min-h-[400px] lg:min-h-auto">
                    <img
                        src="/images/lucaweb2.webp"
                        alt="Luca Project Showcase"
                        className="w-full h-full object-cover object-left"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
