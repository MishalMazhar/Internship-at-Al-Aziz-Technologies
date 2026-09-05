// The same mission data from Week 2's mission-data.js, now living
// as a proper ES module import instead of a global <script> variable.

export const missions = [
    {
        id: 1,
        name: "Helios-3",
        category: "Rocket",
        icon: "/images/rocket.svg",
        summary: "Heavy-lift test flight validating a new reusable booster stage.",
    },
    {
        id: 2,
        name: "Vega Surface Rover",
        category: "Rover",
        icon: "/images/rover.svg",
        summary: "Six-wheeled rover mapping surface minerals across a 40km transect.",
    },
    {
        id: 3,
        name: "Aurora Relay",
        category: "Satellite",
        icon: "/images/satellite.svg",
        summary: "Communications satellite extending deep-space relay coverage.",
    },
    {
        id: 4,
        name: "Kepler Reach Probe",
        category: "Probe",
        icon: "/images/probe.svg",
        summary: "Flyby probe gathering atmospheric data on the outer moons.",
    },
];
