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
 * Used for real starting Day 4, once form events are wired up.
 */
function buildAlertMessage(name, method) {
    return `Hi ${name}, you're on the list! We'll notify you by ${method} before the next launch.`;
}
