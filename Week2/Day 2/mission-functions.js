// ==========================================================
// Week 2 — Day 2: Reusable functions for Orbit Log
//
// These are meant to be actually used — once the DOM is covered
// on Day 4, these functions plug straight into rendering the
// mission-data.js data onto the page. Written now so the logic
// is already tested before it touches any HTML.
// ==========================================================

/**
 * Turns a raw status code into the label shown on the page.
 * Uses a switch since there's a small, fixed set of options.
 */
function getStatusLabel(status) {
    switch (status) {
        case "go":
            return "Go";
        case "review":
            return "Under Review";
        case "hold":
            return "Hold";
        default:
            return "Unknown";
    }
}

/**
 * Formats a date like "2026-09-14" into "Sep 14, 2026",
 * which reads a lot better on the actual page.
 */
function formatLaunchDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

/**
 * Returns only the launches matching a given status.
 * Built for the "filter by status" idea for the schedule table later.
 */
function filterLaunchesByStatus(launches, status) {
    return launches.filter((launch) => launch.status === status);
}

/**
 * Returns a new array of launches sorted soonest-first.
 * Uses a copy of the array (the [...launches] part) so it doesn't
 * accidentally rearrange the original data.
 */
function sortLaunchesByDate(launches) {
    return [...launches].sort((a, b) => new Date(a.date) - new Date(b.date));
}

/**
 * Builds the confirmation message for the sign-up form.
 * Not wired into the actual form yet — that needs form events,
 * which is Day 4 territory.
 */
function buildAlertMessage(name, method) {
    return `Hi ${name}, you're on the list! We'll notify you by ${method} before the next launch.`;
}

// ---- quick manual tests, just to prove these actually work ----
console.log(getStatusLabel("review"));               // "Under Review"
console.log(formatLaunchDate("2026-09-14"));          // "Sep 14, 2026"
console.log(buildAlertMessage("Mishal", "email"));    // greeting message

const testLaunches = [
    { mission: "Kepler Reach Probe", date: "2026-11-19", status: "hold" },
    { mission: "Helios-3", date: "2026-09-14", status: "go" },
    { mission: "Aurora Relay", date: "2026-09-28", status: "go" },
];

console.log(filterLaunchesByStatus(testLaunches, "go"));
console.log(sortLaunchesByDate(testLaunches));
