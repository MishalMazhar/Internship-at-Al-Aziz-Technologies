export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="#top" className="logo">
                        <span className="mission-patch">
                            <img src="/images/rocket.svg" alt="Orbit Log rocket logo" className="logo-icon" />
                        </span>
                        ORBIT LOG
                    </a>
                    <p className="footer-tagline">Track every launch. Log every mission.</p>
                </div>

                <nav className="footer-links">
                    <h4>Dashboard</h4>
                    <ul>
                        <li><a href="#missions">Missions</a></li>
                        <li><a href="#schedule">Launch Schedule</a></li>
                        <li><a href="#logbook">Join the Log</a></li>
                    </ul>
                </nav>

                <div className="footer-status">
                    <h4>System Status</h4>
                    <p><span className="status status-go">Go</span> All systems nominal</p>
                    <p className="footer-updated">Built with React — Week 3</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Orbit Log. Mission data shown is sample data for practice purposes.</p>
            </div>
        </footer>
    );
}
