import { useState } from "react";

// Day 2 upgrade: the mobile menu button now actually does something.
// useState holds whether the menu is open, and clicking the button
// flips it. This is the first real event handling + state in the project.

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={isMenuOpen ? "nav-open" : ""}>
                <ul className="nav-links">
                    <li><a href="#missions">Missions</a></li>
                    <li><a href="#schedule">Launch Schedule</a></li>
                </ul>
            </nav>
        </header>
    );
}
