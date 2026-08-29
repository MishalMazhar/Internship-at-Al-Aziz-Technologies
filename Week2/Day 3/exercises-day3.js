// ==========================================================
// Week 2 — Day 3: Modern JavaScript & Data Handling
// Practice exercises. Run in the browser console or with Node.
// ==========================================================

const sampleLaunch = {
    mission: "Helios-3",
    agency: "Meridian Aerospace",
    vehicle: "Helios Heavy",
    date: "2026-09-14",
    status: "go",
};

// ---- Destructuring ----
// Instead of sampleLaunch.mission, sampleLaunch.agency, etc,
// pull the fields straight out into their own variables.
const { mission, agency, status } = sampleLaunch;
console.log(mission, agency, status); // "Helios-3 Meridian Aerospace go"

// works on arrays too
const topAgencies = ["Meridian Aerospace", "Northgate Exploration", "Skyline Orbital"];
const [first, second] = topAgencies;
console.log(first, second); // "Meridian Aerospace Northgate Exploration"

// ---- Spread operator ----
// Copies items out of an array/object instead of referencing the original.
const moreAgencies = [...topAgencies, "Vantage Systems"];
console.log(moreAgencies); // original 3 plus the new one, original array untouched
console.log(topAgencies);  // still just the original 3

const launchWithNotes = { ...sampleLaunch, notes: "Weather looks clear" };
console.log(launchWithNotes);

// ---- Rest operator ----
// Same ...syntax, opposite job: gathers leftover items instead of spreading them out.
function listAgencies(primary, ...others) {
    console.log("Primary:", primary);
    console.log("Others:", others);
}
listAgencies("Meridian Aerospace", "Northgate Exploration", "Skyline Orbital");

// ---- Default parameters ----
function describeMission(name, status = "unknown") {
    return `${name} is currently marked as ${status}.`;
}
console.log(describeMission("Aurora Relay"));           // uses the default
console.log(describeMission("Aurora Relay", "go"));      // overrides it

// ---- Array methods: map, filter, find, some, every, reduce ----
const launches = [
    { mission: "Helios-3", status: "go" },
    { mission: "Vega Surface Rover", status: "review" },
    { mission: "Aurora Relay", status: "go" },
    { mission: "Kepler Reach Probe", status: "hold" },
];

const missionNames = launches.map((l) => l.mission);
console.log(missionNames); // just the names, same order

const goLaunches = launches.filter((l) => l.status === "go");
console.log(goLaunches); // only the two "go" launches

const firstHold = launches.find((l) => l.status === "hold");
console.log(firstHold); // the Kepler Reach Probe object

const anyOnHold = launches.some((l) => l.status === "hold");
console.log(anyOnHold); // true

const allGo = launches.every((l) => l.status === "go");
console.log(allGo); // false, not all of them are

const statusCounts = launches.reduce((counts, l) => {
    counts[l.status] = (counts[l.status] || 0) + 1;
    return counts;
}, {});
console.log(statusCounts); // { go: 2, review: 1, hold: 1 }

// ---- Object methods ----
console.log(Object.keys(sampleLaunch));   // ["mission", "agency", "vehicle", "date", "status"]
console.log(Object.values(sampleLaunch)); // the actual values, same order
console.log(Object.entries(sampleLaunch)); // [key, value] pairs — useful for looping

// ---- Optional chaining ----
// Safely reach into a property that might not exist, without crashing.
const partialLaunch = { mission: "Unknown Mission" };
console.log(partialLaunch.agency?.toUpperCase()); // undefined, no crash
console.log(sampleLaunch.agency?.toUpperCase());  // "MERIDIAN AEROSPACE"

// ---- Nullish coalescing ----
// Only falls back if the value is null or undefined — NOT for 0 or "".
const crewCount = 0;
console.log(crewCount || 5);  // 5 — wrong! 0 is treated as falsy here
console.log(crewCount ?? 5);  // 0 — correct, 0 is a real value, not "missing"
