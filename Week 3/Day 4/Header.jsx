import { useState } from "react";

export default function Header() {
    // Replaces Week 2's checkbox-hack mobile menu — now it's real
    // React state instead of a CSS-only trick.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="site-header">
            <a href="#top" className="logo">
                <span className="mission-patch">
                    <img src="/images/rocket.svg" alt="Orbit Log rocket logo" className="logo-icon" />
                </span>
                ORBIT LOG
            </a>

            <button
                type="button"
                className={`nav-toggle-label ${isMenuOpen ? "is-open" : ""}`}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={isMenuOpen ? "nav-open" : ""}>
                <ul className="nav-links">
                    <li><a href="#missions" onClick={closeMenu}>Missions</a></li>
                    <li><a href="#schedule" onClick={closeMenu}>Launch Schedule</a></li>
                    <li><a href="#live-data" onClick={closeMenu}>Live Data</a></li>
                    <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
                    <li className="mobile-only"><a href="#logbook" onClick={closeMenu}>Get Notified</a></li>
                </ul>
            </nav>

            <a href="#logbook" className="nav-cta">Get Notified</a>
        </header>
    );
}
