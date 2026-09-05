import Header from "./components/Header";
import Footer from "./components/Footer";
import MissionList from "./components/MissionList";
import LaunchTable from "./components/LaunchTable";
import { missions } from "./data/missions";
import { launches } from "./data/launches";

export default function App() {
    return (
        <div id="top">
            <Header />
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Lists, filtering, and hooks</h1>
                        <p>Day 3: real data now renders with .map(), search and filtering actually work.</p>
                    </div>
                </section>

                <MissionList missions={missions} />
                <LaunchTable launches={launches} />
            </main>
            <Footer />
        </div>
    );
}
