import { useState } from "react";
import MissionCard from "./MissionCard";

export default function MissionList({ missions, isSaved, onToggleSave }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");

    // Unique category list built from the actual data — if a new
    // mission category ever gets added, this list updates itself,
    // no hard-coded array to remember to update.
    const categories = ["all", ...new Set(missions.map((m) => m.category))];

    const filteredMissions = missions.filter((mission) => {
        const matchesSearch = mission.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "all" || mission.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

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
                    aria-label="Search missions"
                />

                <div className="category-filter" role="group" aria-label="Filter by category">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`filter-btn ${categoryFilter === category ? "is-active" : ""}`}
                            aria-pressed={categoryFilter === category}
                            onClick={() => setCategoryFilter(category)}
                        >
                            {category === "all" ? "All" : category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Conditional rendering: show the list, or a "no results" message,
                never both — this is the ternary-in-JSX pattern from Day 3. */}
            {filteredMissions.length > 0 ? (
                <ul className="mission-list">
                    {filteredMissions.map((mission) => (
                        // key is required on every list item so React can tell
                        // items apart when the list re-renders — using the
                        // mission's own id, never the array index.
                        <MissionCard
                            key={mission.id}
                            mission={mission}
                            isSaved={isSaved(mission.id)}
                            onToggleSave={onToggleSave}
                        />
                    ))}
                </ul>
            ) : (
                <p className="table-empty">
                    {categoryFilter === "all"
                        ? `No missions match "${searchTerm}".`
                        : `No ${categoryFilter} missions match "${searchTerm}".`}
                </p>
            )}
        </section>
    );
}
