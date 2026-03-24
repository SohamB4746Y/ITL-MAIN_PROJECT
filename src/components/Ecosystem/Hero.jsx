import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col pt-32">
            {/* Ambient blob background — DO NOT CHANGE */}
            <div className='absolute h-full w-full bottom-full left-0 z-[-1]'>
                <svg width="100%" height="1500" className="min-h-[190vh]" viewBox="0 0 1280 1607" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_eco_hero)">
                        <path d="M467.322 658.503C274.221 569.998 50.8455 578.503 -6.17874 764.503C-46.8001 897 22.2139 1017.31 125.321 1061.5C422.846 1189 1094.82 1157.5 1317.82 936.5C1541.15 715.177 1549.82 339 1304.32 339C1167.32 339 1106.82 496.503 1019.82 578.503C854.929 733.92 611.321 724.503 467.322 658.503Z" fill="#0000FF" />
                    </g>
                    <g filter="url(#filter1_f_eco_hero)">
                        <path d="M417.322 678.503C224.221 589.998 0.845512 598.503 -56.1787 784.503C-96.8001 917 -27.7861 1037.31 75.3215 1081.5C372.846 1209 1044.82 1177.5 1267.82 956.5C1491.15 735.177 1499.82 359 1254.32 359C1117.32 359 1056.82 516.503 969.822 598.503C804.929 753.92 561.321 744.503 417.322 678.503Z" fill="#008000" />
                    </g>
                    <defs>
                        <filter id="filter0_f_eco_hero" x="-218" y="139" width="1904.89" height="1197.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
                        </filter>
                        <filter id="filter1_f_eco_hero" x="-518" y="-91" width="2404.89" height="1697.32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="container mx-auto flex flex-col flex-grow relative z-10 w-full px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 w-full flex-grow py-10">
                    <div className="flex flex-col justify-start">
                        <span className="flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
                            <span className="w-2 h-2 bg-white inline-block"></span>
                            ECOSYSTEM
                        </span>
                        <h1 className="font-serif text-3xl md:text-4xl xl:text-6xl leading-[1.1] text-white mt-6">
                            One Vision.<br />
                            Four Pathways to Impact.
                        </h1>
                    </div>
                    <div className="flex flex-col justify-start lg:justify-end pb-8 lg:pb-32">
                        <p className="font-sans text-base leading-relaxed text-white max-w-md text-left lg:text-right lg:ml-auto">
                            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each addressing different aspects of leadership development and organizational transformation.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-6 md:bottom-10 left-0 w-full px-4 md:px-8 border-t-[0.5px] border-[#FFFFFF3D] pt-5 flex justify-between items-center text-white font-serif text-sm">
                    <span className="tracking-wide">Scroll to Discover</span>
                    <span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.85403 7.35375L5.35403 11.8537C5.30759 11.9002 5.25245 11.9371 5.19175 11.9623C5.13105 11.9874 5.06599 12.0004 5.00028 12.0004C4.93457 12.0004 4.86951 11.9874 4.80881 11.9623C4.74811 11.9371 4.69296 11.9002 4.64653 11.8537L0.146528 7.35375C0.0527077 7.25993 0 7.13268 0 7C0 6.86732 0.0527077 6.74007 0.146528 6.64625C0.240348 6.55243 0.367596 6.49972 0.500278 6.49972C0.63296 6.49972 0.760208 6.55243 0.854028 6.64625L4.50028 10.2931V0.5C4.50028 0.367392 4.55296 0.240215 4.64672 0.146447C4.74049 0.0526785 4.86767 0 5.00028 0C5.13289 0 5.26006 0.0526785 5.35383 0.146447C5.4476 0.240215 5.50028 0.367392 5.50028 0.5V10.2931L9.14653 6.64625C9.24035 6.55243 9.3676 6.49972 9.50028 6.49972C9.63296 6.49972 9.76021 6.55243 9.85403 6.64625C9.94785 6.74007 10.0006 6.86732 10.0006 7C10.0006 7.13268 9.94785 7.25993 9.85403 7.35375Z" fill="white" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
