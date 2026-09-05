import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import { filterLaunchesByStatus, formatLaunchDate, getStatusLabel } from "../utils/missionHelpers";

export default function LaunchTable({ launches }) {
    const [activeFilter, setActiveFilter] = useState("all");

    const visibleLaunches = filterLaunchesByStatus(launches, activeFilter);

    // A small, real side effect: keep the browser tab title in sync
    // with how many launches are currently showing. This is the
    // useEffect + dependency array topic from Day 3 — it only reruns
    // when visibleLaunches.length actually changes, not on every render.
    useEffect(() => {
        const previousTitle = document.title;
        document.title =
            activeFilter === "all"
                ? "Orbit Log — Mission Dashboard"
                : `Orbit Log — ${visibleLaunches.length} ${getStatusLabel(activeFilter)} launch(es)`;

        // Cleanup: restore the title if this component ever unmounts.
        return () => {
            document.title = previousTitle;
        };
    }, [activeFilter, visibleLaunches.length]);

    return (
        <section id="schedule" className="schedule">
            <h2>Upcoming Launch Schedule</h2>
            <p className="table-note">Sample data for practice purposes.</p>

            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <div className="table-scroll">
                <table className="launch-table">
                    <thead>
                        <tr>
                            <th>Mission</th>
                            <th>Agency</th>
                            <th>Vehicle</th>
                            <th>Launch Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleLaunches.map((launch) => (
                            <tr key={launch.missionId}>
                                <td>{launch.mission}</td>
                                <td>{launch.agency}</td>
                                <td>{launch.vehicle}</td>
                                <td>{formatLaunchDate(launch.date)}</td>
                                <td>
                                    <span className={`status status-${launch.status}`}>
                                        {getStatusLabel(launch.status)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {visibleLaunches.length === 0 && (
                <p className="table-empty">No launches match this filter right now.</p>
            )}
        </section>
    );
}
