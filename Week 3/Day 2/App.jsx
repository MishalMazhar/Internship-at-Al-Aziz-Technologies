import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MissionCard from "./components/MissionCard";
import Counter from "./components/Counter";
import { missions } from "./data/missions";

export default function App() {
    // Lives in the parent so multiple children (any MissionCard) can
    // report into the same place — a small taste of state lifting,
    // which becomes the real pattern on Day 4.
    const [savedCount, setSavedCount] = useState(0);

    function handleSaveToggle(name, isNowSaved) {
        setSavedCount((current) => (isNowSaved ? current + 1 : current - 1));
    }

    // Still rendering each card by hand instead of with .map() —
    // that's tomorrow's topic. Four cards, four copies, on purpose.
    return (
        <div id="top">
            <Header />

            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Props, state, and events</h1>
                        <p>Day 2: MissionCard is now a real reusable component driven by props.</p>
                    </div>
                </section>

                <section className="stats">
                    <div className="stat-card">
                        <span className="stat-number">{savedCount}</span>
                        <span className="stat-label">Missions Saved (this session)</span>
                    </div>
                    <Counter />
                </section>

                <section className="missions">
                    <h2>Featured Missions</h2>
                    <ul className="mission-list">
                        <MissionCard
                            name={missions[0].name}
                            category={missions[0].category}
                            icon={missions[0].icon}
                            summary={missions[0].summary}
                            onSaveToggle={handleSaveToggle}
                        />
                        <MissionCard
                            name={missions[1].name}
                            category={missions[1].category}
                            icon={missions[1].icon}
                            summary={missions[1].summary}
                            onSaveToggle={handleSaveToggle}
                        />
                        <MissionCard
                            name={missions[2].name}
                            category={missions[2].category}
                            icon={missions[2].icon}
                            summary={missions[2].summary}
                            onSaveToggle={handleSaveToggle}
                        />
                        <MissionCard
                            name={missions[3].name}
                            category={missions[3].category}
                            icon={missions[3].icon}
                            summary={missions[3].summary}
                            onSaveToggle={handleSaveToggle}
                        />
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
}
