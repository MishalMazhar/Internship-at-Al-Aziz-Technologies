/**
 * A "dumb" reusable component — it doesn't know anything about
 * localStorage or how saving works. It just displays a mission and
 * calls onToggleSave when the button is clicked. The parent decides
 * what that actually does. This is the parent-child communication
 * pattern from Day 2.
 */
export default function MissionCard({ mission, isSaved, onToggleSave }) {
    return (
        <li className="mission-card">
            <div className="mission-card-top">
                <span className="mission-category">{mission.category}</span>
                <button
                    type="button"
                    className={`mission-save-btn ${isSaved ? "is-saved" : ""}`}
                    aria-label={isSaved ? "Remove from saved missions" : "Save this mission"}
                    onClick={() => onToggleSave(mission.id)}
                >
                    {isSaved ? "★" : "☆"}
                </button>
            </div>
            <img src={mission.icon} alt={`${mission.category} icon`} />
            <h3>{mission.name}</h3>
            <p>{mission.summary}</p>
            <a href="#schedule" className="mission-link">View in schedule →</a>
        </li>
    );
}
