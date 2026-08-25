// ==========================================================
// Week 2 — Day 1: Working with arrays and objects
//
// This is the actual Orbit Log mission and launch data, written
// as plain JavaScript arrays of objects — the same information
// currently sitting hard-coded in index.html.
//
// Not connected to the page yet. That's Day 4, once we cover the
// DOM and can actually render this data into the HTML instead of
// typing it out by hand.
// ==========================================================

const missions = [
    {
        id: 1,
        name: "Helios-3",
        category: "Rocket",
        summary: "Heavy-lift test flight validating a new reusable booster stage.",
    },
    {
        id: 2,
        name: "Vega Surface Rover",
        category: "Rover",
        summary: "Six-wheeled rover mapping surface minerals across a 40km transect.",
    },
    {
        id: 3,
        name: "Aurora Relay",
        category: "Satellite",
        summary: "Communications satellite extending deep-space relay coverage.",
    },
    {
        id: 4,
        name: "Kepler Reach Probe",
        category: "Probe",
        summary: "Flyby probe gathering atmospheric data on the outer moons.",
    },
];

const launches = [
    {
        mission: "Helios-3",
        agency: "Meridian Aerospace",
        vehicle: "Helios Heavy",
        date: "2026-09-14",
        status: "go",
    },
    {
        mission: "Vega Surface Rover",
        agency: "Northgate Exploration",
        vehicle: "Vega-IX",
        date: "2026-10-02",
        status: "review",
    },
    {
        mission: "Aurora Relay",
        agency: "Skyline Orbital",
        vehicle: "Falcon Nine-class",
        date: "2026-09-28",
        status: "go",
    },
    {
        mission: "Kepler Reach Probe",
        agency: "Meridian Aerospace",
        vehicle: "Odyssey-II",
        date: "2026-11-19",
        status: "hold",
    },
];

// quick sanity check that the data reads correctly
console.log(`There are ${missions.length} missions and ${launches.length} scheduled launches.`);
console.log(missions[0].name);        // "Helios-3"
console.log(launches[2].agency);      // "Skyline Orbital"
