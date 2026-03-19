import React, { useState } from 'react';
import Hero from '../components/Ecosystem/Hero';
import EcosystemOrbitSection from '../components/Ecosystem/EcosystemOrbitSection';
import EcosystemTabsSection from '../components/Ecosystem/EcosystemTabsSection';
import FindEntryPointSection from '../components/Ecosystem/FindEntryPointSection';
import JoinMovementSection from '../components/Ecosystem/JoinMovementSection';

const EcosystemPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Hero />
            <EcosystemOrbitSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <EcosystemTabsSection activeTab={activeTab} />
            <FindEntryPointSection />
            <JoinMovementSection />
        </div>
    );
};

export default EcosystemPage;
