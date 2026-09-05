import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Card from "./components/Card";

// Day 1 is just proving the React + Vite setup works, and that
// components can be built once and reused with different content.
// No real app data yet, no state, no props doing anything dynamic —
// that all starts tomorrow.
export default function App() {
    return (
        <div id="top">
            <Header />

            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Orbit Log is moving to React</h1>
                        <p>Day 1: project scaffolded with Vite, first components built and reused.</p>
                        <div className="hero-actions">
                            <Button variant="primary" href="#top">Primary Button</Button>
                            <Button variant="secondary" href="#top">Secondary Button</Button>
                        </div>
                    </div>
                </section>

                <section className="how-it-works">
                    <h2>Same Card component, different content</h2>
                    <p className="section-intro">
                        Proving the Card component is genuinely reusable — same component,
                        three completely different pieces of content passed in as children.
                    </p>
                    <div className="steps-grid">
                        <Card title="Reusable">One component, rendered three times below.</Card>
                        <Card title="Composable">Each usage gets its own title and text via props.</Card>
                        <Card title="Simple">No state yet — that's tomorrow's topic.</Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
