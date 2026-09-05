import { useState, useEffect, useRef } from "react";
import FilterBar from "./FilterBar";
import { filterLaunchesByStatus, formatLaunchDate, getStatusLabel } from "../utils/missionHelpers";

export default function LaunchTable({ launches }) {
    const [activeFilter, setActiveFilter] = useState("all");
    const visibleLaunches = filterLaunchesByStatus(launches, activeFilter);

    // Captured once, when the component first mounts — a ref instead
    // of state because reading it never needs to trigger a re-render.
    const originalTitle = useRef(document.title);

    // Updates the tab title whenever the filter (or result count)
    // changes. This effect has no cleanup function, on purpose —
    // see the note below about why the earlier version was wrong.
    useEffect(() => {
        document.title =
            activeFilter === "all"
                ? originalTitle.current
                : `Orbit Log — ${visibleLaunches.length} ${getStatusLabel(activeFilter)} launch(es)`;
    }, [activeFilter, visibleLaunches.length]);

    // Restoring the title on unmount is a *separate* effect with an
    // empty dependency array, so its cleanup only runs once, when
    // this component actually goes away — not every time the filter
    // changes. Combining the two in one effect was today's actual bug:
    // React runs a cleanup function before every re-run of its effect,
    // not just on unmount, so the old version was quietly resetting
    // and re-setting the title on every click. It never looked broken
    // because the reset happened synchronously before the real update,
    // but it wasn't doing what the comment claimed.
    useEffect(() => {
        return () => {
            document.title = originalTitle.current;
        };
    }, []);

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
