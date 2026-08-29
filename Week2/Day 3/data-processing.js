// ==========================================================
// Week 2 — Day 3: Data processing for the actual project
//
// This is the hands-on task done for real: "build data-processing
// exercises using arrays and objects." These functions take the
// missions/launches data from mission-data.js and turn it into the
// numbers currently just typed by hand into the "quick stats" row
// on the page (4 missions, 3 agencies, 4 launches, next launch date).
//
// Depends on mission-data.js being loaded first (needs `missions`
// and `launches` to already exist). Not wired into the page yet —
// that's Day 4.
// ==========================================================

/**
 * Counts how many missions exist. Trivial with .length, but written
 * as its own function so main.js doesn't need to know how the stat
 * is calculated, just that it can ask for it.
 */
function countMissions(missionList) {
    return missionList.length;
}

/**
 * Counts unique agencies across all launches.
 * A Set automatically drops duplicates, so mapping every launch's
 * agency into a Set and checking its size gives the unique count.
 */
function countUniqueAgencies(launchList) {
    const agencySet = new Set(launchList.map((launch) => launch.agency));
    return agencySet.size;
}

/**
 * Counts how many launches are upcoming — right now that's just
 * every launch in the list, but written as a real filter so it's
 * ready for when the data includes past launches too.
 */
function countUpcomingLaunches(launchList) {
    return launchList.filter((launch) => launch.status !== "past").length;
}

/**
 * Finds the soonest launch date out of the whole list and returns
 * it formatted for display, e.g. "Sep 14".
 */
function getNextLaunchLabel(launchList) {
    if (launchList.length === 0) return "TBD";

    const sorted = [...launchList].sort((a, b) => new Date(a.date) - new Date(b.date));
    const next = sorted[0];

    const date = new Date(next.date);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

/**
 * Groups launches by status, e.g. { go: 2, review: 1, hold: 1 }.
 * Handy for a filter bar that shows a count next to each option.
 */
function groupLaunchesByStatus(launchList) {
    return launchList.reduce((groups, launch) => {
        const key = launch.status;
        groups[key] = (groups[key] || 0) + 1;
        return groups;
    }, {});
}

/**
 * Pulls together every stat the "quick stats" row on the page needs,
 * in one call, so main.js just asks for this once.
 */
function buildDashboardStats(missionList, launchList) {
    return {
        missionCount: countMissions(missionList),
        agencyCount: countUniqueAgencies(launchList),
        upcomingCount: countUpcomingLaunches(launchList),
        nextLaunch: getNextLaunchLabel(launchList),
    };
}

// ---- quick manual test using the real project data ----
if (typeof missions !== "undefined" && typeof launches !== "undefined") {
    console.log(buildDashboardStats(missions, launches));
    console.log(groupLaunchesByStatus(launches));
}
