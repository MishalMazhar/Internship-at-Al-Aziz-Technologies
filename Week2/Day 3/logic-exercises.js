// ==========================================================
// Week 2 — Day 2: Conditions, Loops & Functions
// Practice exercises. Run in the browser console or with Node.
// ==========================================================

// ---- if / else if / else ----
function checkLaunchWindow(status) {
    if (status === "go") {
        return "Cleared for launch.";
    } else if (status === "review") {
        return "Still under review.";
    } else {
        return "Launch on hold.";
    }
}

console.log(checkLaunchWindow("go"));     // "Cleared for launch."
console.log(checkLaunchWindow("review")); // "Still under review."
console.log(checkLaunchWindow("hold"));   // "Launch on hold."

// ---- switch ----
function agencyShortCode(agency) {
    switch (agency) {
        case "Meridian Aerospace":
            return "MER";
        case "Northgate Exploration":
            return "NGX";
        case "Skyline Orbital":
            return "SKY";
        default:
            return "UNK";
    }
}

console.log(agencyShortCode("Skyline Orbital")); // "SKY"
console.log(agencyShortCode("Some New Agency"));  // "UNK"

// ---- logical operators ----
const hasFuel = true;
const hasClearance = false;
console.log(hasFuel && hasClearance); // false — both need to be true
console.log(hasFuel || hasClearance); // true — only one needs to be true
console.log(!hasClearance);           // true — flips it

// ---- for loop ----
for (let i = 1; i <= 5; i++) {
    console.log(`Countdown: T-minus ${5 - i + 1}`);
}

// ---- while loop ----
let fuel = 100;
while (fuel > 80) {
    fuel -= 5;
    console.log(`Fuel at ${fuel}%`);
}

// ---- for...of loop ----
const missionNames = ["Helios-3", "Vega Surface Rover", "Aurora Relay"];
for (const name of missionNames) {
    console.log(`Tracking: ${name}`);
}

// ---- functions vs arrow functions ----
function double(n) {
    return n * 2;
}

const doubleArrow = (n) => n * 2; // same thing, shorter syntax

console.log(double(21));      // 42
console.log(doubleArrow(21)); // 42

// ---- callback functions ----
// A callback is just a function you hand to another function to run later.
// forEach takes a callback and runs it once per item in the array.
missionNames.forEach((name) => {
    console.log(`Now tracking: ${name}`);
});
