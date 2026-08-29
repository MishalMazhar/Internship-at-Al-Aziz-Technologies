// ==========================================================
// Week 2 — Day 1: Working with arrays and objects
// (updated Day 4 with an `icon` field per mission, now that
// this data actually gets rendered onto the page)
//
// This is the actual Orbit Log mission and launch data, written
// as plain JavaScript arrays of objects — this is what js/main.js
// uses on Day 4 to build the page instead of typing the HTML by hand.
// ==========================================================

const missions = [
    {
        id: 1,
        name: "Helios-3",
        category: "Rocket",
        icon: "images/rocket.svg",
        summary: "Heavy-lift test flight validating a new reusable booster stage.",
    },
    {
        id: 2,
        name: "Vega Surface Rover",
        category: "Rover",
        icon: "images/rover.svg",
        summary: "Six-wheeled rover mapping surface minerals across a 40km transect.",
    },
    {
        id: 3,
        name: "Aurora Relay",
        category: "Satellite",
        icon: "images/satellite.svg",
        summary: "Communications satellite extending deep-space relay coverage.",
    },
    {
        id: 4,
        name: "Kepler Reach Probe",
        category: "Probe",
        icon: "images/probe.svg",
        summary: "Flyby probe gathering atmospheric data on the outer moons.",
    },
];

const launches = [
    {
        missionId: 1,
        mission: "Helios-3",
        agency: "Meridian Aerospace",
        vehicle: "Helios Heavy",
        date: "2026-09-14",
        status: "go",
    },
    {
        missionId: 2,
        mission: "Vega Surface Rover",
        agency: "Northgate Exploration",
        vehicle: "Vega-IX",
        date: "2026-10-02",
        status: "review",
    },
    {
        missionId: 3,
        mission: "Aurora Relay",
        agency: "Skyline Orbital",
        vehicle: "Falcon Nine-class",
        date: "2026-09-28",
        status: "go",
    },
    {
        missionId: 4,
        mission: "Kepler Reach Probe",
        agency: "Meridian Aerospace",
        vehicle: "Odyssey-II",
        date: "2026-11-19",
        status: "hold",
    },
];
