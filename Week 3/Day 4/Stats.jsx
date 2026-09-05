import { buildDashboardStats } from "../utils/statsHelpers";

export default function Stats({ missions, launches }) {
    // Calculated on every render straight from the real data —
    // no hard-coded numbers anywhere.
    const stats = buildDashboardStats(missions, launches);

    return (
        <section className="stats">
            <div className="stat-card">
                <span className="stat-number">{stats.missionCount}</span>
                <span className="stat-label">Active Missions</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{stats.agencyCount}</span>
                <span className="stat-label">Partner Agencies</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{stats.upcomingCount}</span>
                <span className="stat-label">Upcoming Launches</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{stats.nextLaunch}</span>
                <span className="stat-label">Next Launch</span>
            </div>
        </section>
    );
}
