import { useState } from "react";
import MissionCard from "./MissionCard";

// This is today's real hands-on task: "build a searchable and
// filterable React application." Everything here is new as of today —
// .map() to turn the data array into JSX, keys so React can track
// each item, and conditional rendering to show either the list or
// a "no results" message.

export default function MissionList({ missions }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [savedIds, setSavedIds] = useState([]); // not persisted yet — that's Day 4

    function toggleSave(missionId) {
        setSavedIds((current) =>
            current.includes(missionId)
                ? current.filter((id) => id !== missionId)
                : [...current, missionId]
        );
    }

    const filteredMissions = missions.filter((mission) =>
        mission.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="missions" className="missions">
            <h2>Featured Missions</h2>

            <div className="mission-controls">
                <input
                    type="search"
                    className="mission-search"
                    placeholder="Search missions…"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            {/* Conditional rendering: the ternary decides between the
                real list and a "no results" message — never both. */}
            {filteredMissions.length > 0 ? (
                <ul className="mission-list">
                    {filteredMissions.map((mission) => (
                        // key is required so React can match items correctly
                        // between renders — using the mission's own id, not
                        // its position in the array.
                        <MissionCard
                            key={mission.id}
                            mission={mission}
                            isSaved={savedIds.includes(mission.id)}
                            onToggleSave={toggleSave}
                        />
                    ))}
                </ul>
            ) : (
                <p className="table-empty">No missions match "{searchTerm}".</p>
            )}
        </section>
    );
}
