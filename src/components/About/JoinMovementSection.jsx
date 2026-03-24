import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const JoinMovementSection = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".join-animate",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-32 px-4 md:px-8 flex flex-col items-center justify-center text-center bg-bg-dark">
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                <div className="join-animate flex items-center justify-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 bg-white inline-block" />
                    <span className="text-white font-sans text-xs font-bold tracking-[0.2em] uppercase shadow-black drop-shadow-md">
                        JOIN THE MOVEMENT
                    </span>
                </div>

                <h2 className="join-animate font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                    Be Part of Building Leadership <br className="hidden md:block" />
                    the World Can Trust
                </h2>

                <p className="join-animate font-sans text-[#FFFFFF52] text-lg md:text-xl leading-relaxed mb-12">
                    Whether you are an individual, an organization, or a collaborator, meaningful change begins with a conversation.
                </p>

                <button className="join-animate group bg-[#006AFF] text-white font-sans font-bold py-4 px-8 flex items-center gap-3 cursor-pointer">
                    Join the Movement
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4849 9.70417L13.3287 17.8604C13.1586 18.0305 12.928 18.126 12.6875 18.126C12.447 18.126 12.2164 18.0305 12.0463 17.8604C11.8763 17.6904 11.7807 17.4597 11.7807 17.2193C11.7807 16.9788 11.8763 16.7481 12.0463 16.5781L18.6563 9.96925H0.90625C0.665898 9.96925 0.43539 9.87377 0.265435 9.70382C0.0954798 9.53386 0 9.30336 0 9.063C0 8.82265 0.0954798 8.59214 0.265435 8.42219C0.43539 8.25223 0.665898 8.15675 0.90625 8.15675H18.6563L12.0463 1.54793C11.8763 1.37788 11.7807 1.14724 11.7807 0.906754C11.7807 0.666268 11.8763 0.435631 12.0463 0.265582C12.2164 0.0955326 12.447 0 12.6875 0C12.928 0 13.1586 0.0955326 13.3287 0.265582L21.4849 8.42183C21.5692 8.506 21.636 8.60595 21.6816 8.71596C21.7272 8.82598 21.7507 8.94391 21.7507 9.063C21.7507 9.1821 21.7272 9.30002 21.6816 9.41004C21.636 9.52006 21.5692 9.62001 21.4849 9.70417Z" fill="white" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default JoinMovementSection;
