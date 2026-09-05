// Day 1 version: purely static, no interactivity yet. The mobile
// menu doesn't actually open — that needs useState, which is
// tomorrow's topic.

export default function Header() {
    return (
        <header className="site-header">
            <a href="#top" className="logo">
                <span className="mission-patch">
                    <img src="/images/rocket.svg" alt="Orbit Log rocket logo" className="logo-icon" />
                </span>
                ORBIT LOG
            </a>

            <nav>
                <ul className="nav-links">
                    <li><a href="#missions">Missions</a></li>
                    <li><a href="#schedule">Launch Schedule</a></li>
                </ul>
            </nav>
        </header>
    );
}
