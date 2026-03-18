import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoSlider = () => {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const slides = [
        {
            id: 0,
            tl: { label: "MEET OUR FOUNDER", title: "Leslie Martinich", isText: true },
            tr: { type: "image", src: "/images/Leslie.webp", alt: "Leslie Martinich" },
            bl: { text: "Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations. \n\nThrough evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.", isText: true },
            br: { type: "link", text: "Meet Leslie", href: "#" }
        },
        {
            id: 1,
            tl: { label: "BUILT ON SOLID GROUND", title: "Research Meets Real-World Application", isText: true },
            tr: { type: "empty" },
            bl: { type: "empty" },
            br: { text: "Built on decades of research and real-world experience, ITL combines academic rigor with practical application. \n\nOur evidence-based approach to leadership development is proven across industries and cultures, continuously refined through our dedicated R&D division.", isText: true }
        },
        {
            id: 2,
            tl: { label: "WHY TRUSTED LEADERSHIP MATTERS", title: "Why Trusted Leadership Matters Now More Than Ever", isText: true },
            tr: { type: "stat", value: "50%", text: "Of employees have left a job to get away from their manager.", source: "- Gallup Workplace Studies" },
            bl: { type: "stat", value: "23%", text: "Of employees strongly trust their leaders.", source: "- Edelman Trust Barometer, 2024" },
            br: { text: "The data is clear: organizations worldwide are facing a trust deficit in leadership, and it's costing them dearly in engagement, retention, innovation and performance.", isText: true }
        }
    ];

    useGSAP(() => {
        const totalSlides = slides.length;
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                setScrollProgress(progress);
                const index = Math.min(totalSlides - 1, Math.floor(progress * totalSlides));
                setActiveSlide(index);
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className={`
                relative w-full text-white overflow-hidden h-dvh
                transition-[height] duration-500 ease-in-out 
            `}
        >
            {/* svgsssssssssssssss don't change broo, this gonaaa spoill everyyythingggg */}
            <div className='absolute h-full w-full bottom-0 left-0'>
                <svg width="2480" height="1391" viewBox="0 0 2480 1391" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_94_3118)">
                        <path d="M1987.76 891.892L540.439 896.801C601.697 719.258 821.063 712.399 1011.11 799.503C1155.11 865.503 1398.71 874.92 1563.61 719.503C1650.61 637.503 1711.11 480 1848.11 480C2032.58 480 2073.54 692.395 1987.76 891.892Z" fill="#1A0099" />
                    </g>
                    <g filter="url(#filter1_f_94_3118)">
                        <path d="M1945.26 891H500C572.957 738.803 779.738 736.834 960.106 819.503C1104.11 885.503 1347.71 894.92 1512.61 739.503C1599.61 657.503 1660.11 500 1797.11 500C1975.15 500 2019.51 697.851 1945.26 891Z" fill="#008000" />
                    </g>
                    <defs>
                        <filter id="filter0_f_94_3118" x="340.439" y="280" width="1890.23" height="816.801" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_94_3118" />
                        </filter>
                        <filter id="filter1_f_94_3118" x="0" y="0" width="2479.67" height="1391" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_94_3118" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="relative z-10 w-full h-full flex flex-col pt-4 px-4 md:px-0">
                <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 w-full border-b border-[#FFFFFF14]">
                    <div className={`border-b border-r border-[#FFFFFF14] p-8 md:p-12 flex flex-col justify-center relative transition-all duration-200 ${activeSlide === 1 ? "bg-[#FFFFFF0F]" : "bg-transparent"}`}>
                        <div className="animate-fadeInKey" key={`tl-${activeSlide}`}>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 bg-white inline-block"></span>
                                <span className="font-sans text-xs tracking-[0.2em] uppercase text-white">{slides[activeSlide].tl.label}</span>
                            </div>
                            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight">{slides[activeSlide].tl.title}</h2>
                        </div>
                    </div>
                    <div className={`border-b border-[#FFFFFF14] flex flex-col justify-center relative overflow-hidden transition-all duration-200 ${activeSlide === 0 || activeSlide === 2 ? "bg-[#FFFFFF0F]" : "bg-transparent"}`}>
                        <div className="w-full h-full animate-fadeInKey flex flex-col justify-center" key={`tr-${activeSlide}`}>
                            {slides[activeSlide].tr.type === 'image' && (
                                <img src={slides[activeSlide].tr.src} alt={slides[activeSlide].tr.alt} className="w-full h-full object-contain" />
                            )}
                            {slides[activeSlide].tr.type === 'stat' && (
                                <div className="text-center p-4">
                                    <span className="font-sans font-medium text-5xl md:text-6xl block mb-4">{slides[activeSlide].tr.value}</span>
                                    <p className="font-sans text-base text-[#FFFFFFA3] max-w-sm mx-auto">{slides[activeSlide].tr.text}</p>
                                    <p className="font-sans text-xs font-bold mt-4 text-white uppercase tracking-[0.2em]">{slides[activeSlide].tr.source}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`border-r border-[#FFFFFF14] p-8 md:p-12 flex flex-col justify-center relative transition-all duration-200 ${activeSlide === 0 || activeSlide === 2 ? "bg-[#FFFFFF0F]" : "bg-transparent"}`}>
                        <div className="w-full h-full animate-fadeInKey flex flex-col justify-center" key={`bl-${activeSlide}`}>
                            {slides[activeSlide].bl.isText && (
                                <p className="font-sans font-light text-lg text-white leading-relaxed whitespace-pre-line overflow-y-auto max-h-full">
                                    {slides[activeSlide].bl.text}
                                </p>
                            )}
                            {slides[activeSlide].bl.type === 'stat' && (
                                <div className="text-center p-4">
                                    <span className="font-sans font-medium text-5xl md:text-6xl block mb-4">{slides[activeSlide].bl.value}</span>
                                    <p className="font-sans text-base text-[#FFFFFFA3] max-w-sm mx-auto">{slides[activeSlide].bl.text}</p>
                                    <p className="font-sans text-xs font-bold mt-4 text-white uppercase tracking-[0.2em]">{slides[activeSlide].bl.source}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`p-8 md:p-12 flex flex-col justify-center relative transition-all duration-200 ${activeSlide === 1 ? "bg-[#FFFFFF0F]" : "bg-transparent"}`}>
                        <div className="w-full h-full animate-fadeInKey flex flex-col justify-start" key={`br-${activeSlide}`}>
                            {slides[activeSlide].br.isText && (
                                <p className="font-sans font-light text-lg text-white leading-relaxed whitespace-pre-line overflow-y-auto max-h-full">
                                    {slides[activeSlide].br.text}
                                </p>
                            )}
                            {slides[activeSlide].br.type === 'link' && (
                                <a href={slides[activeSlide].br.href} className="group flex items-center gap-2 text-4xl md:text-5xl font-serif cursor-pointer">
                                    {slides[activeSlide].br.text}
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.5 12V31.5C37.5 31.8978 37.3419 32.2794 37.0606 32.5607C36.7793 32.842 36.3978 33 36 33C35.6022 33 35.2206 32.842 34.9393 32.5607C34.658 32.2794 34.5 31.8978 34.5 31.5V15.6206L13.0612 37.0613C12.7798 37.3427 12.398 37.5008 12 37.5008C11.6019 37.5008 11.2202 37.3427 10.9387 37.0613C10.6573 36.7798 10.4991 36.398 10.4991 36C10.4991 35.602 10.6573 35.2202 10.9387 34.9388L32.3794 13.5H16.5C16.1022 13.5 15.7206 13.342 15.4393 13.0607C15.158 12.7794 15 12.3978 15 12C15 11.6022 15.158 11.2206 15.4393 10.9393C15.7206 10.658 16.1022 10.5 16.5 10.5H36C36.3978 10.5 36.7793 10.658 37.0606 10.9393C37.3419 11.2206 37.5 11.6022 37.5 12Z" fill="white" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-full h-16 flex items-center justify-center gap-4 text-2xl font-sans text-[#FFFFFF4D] mt-auto py-4">
                    <span className={`transition-colors duration-300 ${activeSlide >= 0 ? "text-white font-bold" : ""}`}>01</span>
                    <div className="relative w-[200px] h-[10px]">
                        <svg width="200" height="10" className="absolute top-0 left-0 opacity-80 z-0">
                            <line x1="0" y1="1" x2="200" y2="1" stroke="#FFFFFF52" strokeWidth="4" strokeDasharray="4 4" />
                            <line x1="0" y1="9" x2="200" y2="9" stroke="#FFFFFF52" strokeWidth="4" strokeDasharray="4 4" />
                        </svg>
                        <div className="absolute top-0 left-0 h-full overflow-hidden z-10"
                            style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 3 * 100))}%` }}>
                            <svg width="200" height="10" className="min-w-[200px]">
                                <line x1="0" y1="1" x2="200" y2="1" stroke="white" strokeWidth="4" strokeDasharray="4 4" />
                                <line x1="0" y1="9" x2="200" y2="9" stroke="white" strokeWidth="4" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>

                    <span className={`transition-colors duration-300 ${activeSlide >= 1 ? "text-white font-bold" : ""}`}>02</span>
                    <div className="relative w-[200px] h-[10px]">
                        <svg width="200" height="10" className="absolute top-0 left-0 opacity-80 z-0">
                            <line x1="0" y1="1" x2="200" y2="1" stroke="#FFFFFF52" strokeWidth="4" strokeDasharray="4 4" />
                            <line x1="0" y1="9" x2="200" y2="9" stroke="#FFFFFF52" strokeWidth="4" strokeDasharray="4 4" />
                        </svg>
                        <div className="absolute top-0 left-0 h-full overflow-hidden z-10"
                            style={{ width: `${Math.min(100, Math.max(0, (scrollProgress * 3 - 1) * 100))}%` }}>
                            <svg width="200" height="10" className="min-w-[200px]">
                                <line x1="0" y1="1" x2="200" y2="1" stroke="white" strokeWidth="4" strokeDasharray="4 4" />
                                <line x1="0" y1="9" x2="200" y2="9" stroke="white" strokeWidth="4" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>

                    <span className={`transition-colors duration-300 ${activeSlide >= 2 ? "text-white font-bold" : ""}`}>03</span>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInKey {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInKey {
                    animation: fadeInKey 0.2s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default InfoSlider;