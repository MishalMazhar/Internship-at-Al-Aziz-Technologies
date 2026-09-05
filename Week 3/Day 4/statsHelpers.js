// Same logic as Week 2's data-processing.js.

export function countUniqueAgencies(launchList) {
    return new Set(launchList.map((launch) => launch.agency)).size;
}

export function getNextLaunchLabel(launchList) {
    if (launchList.length === 0) return "TBD";

    const sorted = [...launchList].sort((a, b) => new Date(a.date) - new Date(b.date));
    const date = new Date(sorted[0].date);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function buildDashboardStats(missionList, launchList) {
    return {
        missionCount: missionList.length,
        agencyCount: countUniqueAgencies(launchList),
        upcomingCount: launchList.length,
        nextLaunch: getNextLaunchLabel(launchList),
    };
}
