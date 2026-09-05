import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import MissionList from "./components/MissionList";
import LaunchTable from "./components/LaunchTable";
import LiveAstronauts from "./components/LiveAstronauts";
import LogbookForm from "./components/LogbookForm";
import Footer from "./components/Footer";

import { missions } from "./data/missions";
import { launches } from "./data/launches";
import { useSavedMissions } from "./hooks/useSavedMissions";

export default function App() {
    // "State lifting": the saved-missions state lives here, in the
    // common parent, instead of inside MissionList or MissionCard.
    // That's what lets it survive even if MissionList's search/filter
    // state resets — the saved state doesn't belong to the list,
    // it belongs to the whole app.
    const { isSaved, toggleSaved } = useSavedMissions();

    return (
        <div id="top">
            <Header />
            <main>
                <Hero />
                <Stats missions={missions} launches={launches} />
                <HowItWorks />
                <MissionList missions={missions} isSaved={isSaved} onToggleSave={toggleSaved} />
                <LaunchTable launches={launches} />
                <LiveAstronauts />
                <LogbookForm />
            </main>
            <Footer />
        </div>
    );
}
