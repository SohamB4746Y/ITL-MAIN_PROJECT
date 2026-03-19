import Hero from "../components/About/Hero";
import VisionOriginSection from "../components/About/VisionOriginSection";
import FounderSection from "../components/About/FounderSection";
import PrinciplesSection from "../components/About/PrinciplesSection";
import GuidingPrinciplesSection from "../components/About/GuidingPrinciplesSection";
import JourneySection from "../components/About/JourneySection";
import JoinMovementSection from "../components/About/JoinMovementSection";

export default function AboutPage() {
    return (
        <div>
            <Hero />
            <VisionOriginSection />
            <FounderSection />
            <PrinciplesSection />
            <GuidingPrinciplesSection />
            <JourneySection />
            <JoinMovementSection />
        </div>
    );
}