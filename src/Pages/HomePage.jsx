import React from 'react';
import AboutSection from "../components/Home/About";
import Hero from "../components/Home/Hero";
import InfoSlider from "../components/Home/InfoSlider";
import SolutionSection from "../components/Home/SolutionSection";
import MethodologySection from "../components/Home/MethodologySection";
import VisionSection from "../components/Home/VisionSection";
import LeadershipSection from "../components/Home/LeadershipSection";
import RipplesSection from "../components/Home/RipplesSection";
import InsightsSection from "../components/Home/InsightsSection";
import JoinMovementSection from "../components/Home/JoinMovementSection";

export default function HomePage() {
    return (
        <>
            <div className="relative w-full h-full">
                <Hero />
            </div>
            <div className="relative w-full h-full">
                <AboutSection />
            </div>
            <div className="relative w-full h-full">
                <InfoSlider />
            </div>
            <div className="relative w-full h-full">
                <SolutionSection />
            </div>
            <div className="relative w-full h-full">
                <MethodologySection />
            </div>
            <div className="relative w-full h-full">
                <VisionSection />
            </div>
            <div className="relative w-full h-full">
                <LeadershipSection />
            </div>
            <div className="relative w-full h-full">
                <RipplesSection />
            </div>
            <div className="relative w-full h-full">
                <InsightsSection />
            </div>
            <div className="relative w-full h-full">
                <JoinMovementSection />
            </div>
        </>
    )
}