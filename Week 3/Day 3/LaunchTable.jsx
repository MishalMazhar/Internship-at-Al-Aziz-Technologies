import { useState, useEffect } from "react";

const statusLabels = { go: "Go", review: "Under Review", hold: "Hold" };

export default function LaunchTable({ launches }) {
    const [activeFilter, setActiveFilter] = useState("all");

    const visibleLaunches =
        activeFilter === "all" ? launches : launches.filter((l) => l.status === activeFilter);

    // useEffect: a "side effect" is anything that reaches outside
    // the component — here, changing the browser tab's title. The
    // dependency array [visibleLaunches.length] means this only runs
    // again when that number actually changes, not on every render.
    useEffect(() => {
        document.title = `Orbit Log — ${visibleLaunches.length} launch(es) shown`;
    }, [visibleLaunches.length]);

    return (
        <section id="schedule" className="schedule">
            <h2>Upcoming Launch Schedule</h2>

            <div className="filter-bar">
                {["all", "go", "review", "hold"].map((status) => (
                    <button
                        key={status}
                        type="button"
                        className={`filter-btn ${activeFilter === status ? "is-active" : ""}`}
                        onClick={() => setActiveFilter(status)}
                    >
                        {status === "all" ? "All" : statusLabels[status]}
                    </button>
                ))}
            </div>

            <div className="table-scroll">
                <table className="launch-table">
                    <thead>
                        <tr>
                            <th>Mission</th>
                            <th>Agency</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleLaunches.map((launch) => (
                            <tr key={launch.missionId}>
                                <td>{launch.mission}</td>
                                <td>{launch.agency}</td>
                                <td>
                                    <span className={`status status-${launch.status}`}>
                                        {statusLabels[launch.status]}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {visibleLaunches.length === 0 && (
                <p className="table-empty">No launches match this filter.</p>
            )}
        </section>
    );
}
