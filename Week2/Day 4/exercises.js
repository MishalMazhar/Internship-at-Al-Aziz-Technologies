// ==========================================================
// Week 2 — Day 1: JavaScript Fundamentals
// Practice exercises. Run this in the browser console or with
// Node (`node exercises.js`) — nothing here touches the page yet,
// that starts on Day 4 once we cover the DOM.
// ==========================================================

// ---- Variables: let, const, var ----
let missionName = "Helios-3";   // can change later
const maxCrew = 4;               // won't change
var isLive = true;               // old-style, using it once just to see it

console.log(typeof missionName); // "string"
console.log(typeof maxCrew);     // "number"
console.log(typeof isLive);      // "boolean"

// ---- Template literals ----
const announcement = `Mission ${missionName} is currently ${isLive ? "active" : "inactive"}.`;
console.log(announcement);
// -> "Mission Helios-3 is currently active."

// ---- Type conversion ----
const daysAsString = "14";
const daysAsNumber = Number(daysAsString);
console.log(daysAsNumber + 1);        // 15 (a real number)
console.log(daysAsString + 1);        // "141" (string concatenation — the trap!)

// ---- Truthy / falsy values ----
const emptyNotes = "";
const notes = "Launch window confirmed";
console.log(Boolean(emptyNotes)); // false — empty strings are falsy
console.log(Boolean(notes));      // true
console.log(Boolean(0));          // false
console.log(Boolean(missionName)); // true — any non-empty string is truthy

// ---- Arrays ----
const agencies = ["Meridian Aerospace", "Northgate Exploration", "Skyline Orbital"];
console.log(agencies.length); // 3
console.log(agencies[0]);     // "Meridian Aerospace"

agencies.push("Vantage Systems"); // adds to the end
console.log(agencies);

// ---- Objects ----
const mission = {
    name: "Helios-3",
    agency: "Meridian Aerospace",
    vehicle: "Helios Heavy",
    status: "go",
};

console.log(mission.name);      // dot notation
console.log(mission["status"]); // bracket notation — useful when the key is a variable

mission.crew = 0; // objects can get new properties added after creation
console.log(mission);
