import { useState } from "react";

// This is what yesterday's generic Card component grows into once
// it needs real, specific data. Every piece of content here comes
// from props — nothing is hard-coded — which is what makes the same
// component work for four completely different missions.
//
// isSaved lives here as local state (Day 2 level). onSaveToggle is
// a callback passed down from the parent — clicking the button
// changes this component's own look AND tells the parent it happened.
// That's "parent-child communication": the child doesn't change the
// parent directly, it just calls the function the parent gave it.

export default function MissionCard({ name, category, icon, summary, onSaveToggle }) {
    const [isSaved, setIsSaved] = useState(false);

    function handleClick() {
        const nextValue = !isSaved;
        setIsSaved(nextValue);
        onSaveToggle(name, nextValue);
    }

    return (
        <li className="mission-card">
            <div className="mission-card-top">
                <span className="mission-category">{category}</span>
                <button
                    type="button"
                    className={`mission-save-btn ${isSaved ? "is-saved" : ""}`}
                    onClick={handleClick}
                >
                    {isSaved ? "★" : "☆"}
                </button>
            </div>
            <img src={icon} alt={`${category} icon`} />
            <h3>{name}</h3>
            <p>{summary}</p>
        </li>
    );
}
