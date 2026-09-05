// Same logic as Week 2's mission-functions.js — carried over almost
// word for word, just exported as real functions instead of globals.

export function getStatusLabel(status) {
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

export function formatLaunchDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

export function filterLaunchesByStatus(launchList, status) {
    if (status === "all") return launchList;
    return launchList.filter((launch) => launch.status === status);
}

export function sortLaunchesByDate(launchList) {
    return [...launchList].sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function buildAlertMessage(name, method) {
    return `Hi ${name}, you're on the list! We'll notify you by ${method} before the next launch.`;
}
