// Simplified from Day 2: the save state now lives in the parent
// (MissionList) instead of inside each card, since the list needs
// to know which missions are saved to filter/display correctly.
// The card itself is back to being a "dumb" display component.

export default function MissionCard({ mission, isSaved, onToggleSave }) {
    return (
        <li className="mission-card">
            <div className="mission-card-top">
                <span className="mission-category">{mission.category}</span>
                <button
                    type="button"
                    className={`mission-save-btn ${isSaved ? "is-saved" : ""}`}
                    onClick={() => onToggleSave(mission.id)}
                >
                    {isSaved ? "★" : "☆"}
                </button>
            </div>
            <img src={mission.icon} alt={`${mission.category} icon`} />
            <h3>{mission.name}</h3>
            <p>{mission.summary}</p>
        </li>
    );
}
