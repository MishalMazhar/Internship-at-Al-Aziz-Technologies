// ==========================================================
// Week 2 — Day 4: DOM, Events & Async JavaScript
//
// This is where everything from Day 1–3 actually gets used.
// Depends on mission-data.js, mission-functions.js, and
// data-processing.js being loaded first (see index.html).
// ==========================================================

const SAVED_MISSIONS_KEY = "orbitlog_saved_missions";

// ----------------------------------------------------------
// 1. Rendering the quick stats (uses Day 3's data-processing.js)
// ----------------------------------------------------------
function renderStats() {
    const stats = buildDashboardStats(missions, launches);

    // Selecting elements by id and modifying their text content —
    // the most basic form of DOM manipulation.
    document.getElementById("statMissions").textContent = stats.missionCount;
    document.getElementById("statAgencies").textContent = stats.agencyCount;
    document.getElementById("statLaunches").textContent = stats.upcomingCount;
    document.getElementById("statNextLaunch").textContent = stats.nextLaunch;
}

// ----------------------------------------------------------
// 2. Reading/writing "saved missions" to Local Storage
// ----------------------------------------------------------
function getSavedMissionIds() {
    const raw = localStorage.getItem(SAVED_MISSIONS_KEY);
    // localStorage only stores strings, so saved data has to be
    // turned back into a real array with JSON.parse. If nothing's
    // been saved yet, default to an empty array instead of crashing.
    return raw ? JSON.parse(raw) : [];
}

function toggleSavedMission(missionId) {
    const saved = getSavedMissionIds();
    const index = saved.indexOf(missionId);

    if (index === -1) {
        saved.push(missionId);
    } else {
        saved.splice(index, 1);
    }

    // JSON.stringify turns the array back into a string, since
    // that's the only type localStorage can hold.
    localStorage.setItem(SAVED_MISSIONS_KEY, JSON.stringify(saved));
    return saved;
}

// ----------------------------------------------------------
// 3. Creating the mission cards from scratch (Creating elements)
// ----------------------------------------------------------
function renderMissions() {
    const container = document.getElementById("missionList");
    const savedIds = getSavedMissionIds();

    // Clear out anything already there before rendering fresh.
    container.innerHTML = "";

    missions.forEach((mission) => {
        const isSaved = savedIds.includes(mission.id);

        const card = document.createElement("li");
        card.className = "mission-card";

        card.innerHTML = `
            <div class="mission-card-top">
                <span class="mission-category">${mission.category}</span>
                <button
                    type="button"
                    class="mission-save-btn ${isSaved ? "is-saved" : ""}"
                    data-mission-id="${mission.id}"
                    aria-label="${isSaved ? "Remove from saved missions" : "Save this mission"}"
                >${isSaved ? "★" : "☆"}</button>
            </div>
            <img src="${mission.icon}" alt="${mission.category} icon">
            <h3>${mission.name}</h3>
            <p>${mission.summary}</p>
            <a href="#schedule" class="mission-link">View in schedule →</a>
        `;

        container.appendChild(card);
    });

    // Event delegation: one listener on the container instead of
    // one per button, since the buttons get recreated every render.
    container.addEventListener("click", handleSaveButtonClick);
}

function handleSaveButtonClick(event) {
    const button = event.target.closest(".mission-save-btn");
    if (!button) return; // click was somewhere else in the card, ignore it

    const missionId = Number(button.dataset.missionId);
    const savedIds = toggleSavedMission(missionId);
    const isSaved = savedIds.includes(missionId);

    button.classList.toggle("is-saved", isSaved);
    button.textContent = isSaved ? "★" : "☆";
    button.setAttribute("aria-label", isSaved ? "Remove from saved missions" : "Save this mission");
}

// ----------------------------------------------------------
// 4. Rendering the launch table, with filtering
// ----------------------------------------------------------
function renderLaunchTable(filter = "all") {
    const tbody = document.getElementById("launchTableBody");
    const emptyMessage = document.getElementById("tableEmptyMessage");

    const visibleLaunches =
        filter === "all" ? launches : filterLaunchesByStatus(launches, filter);

    tbody.innerHTML = "";

    visibleLaunches.forEach((launch) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${launch.mission}</td>
            <td>${launch.agency}</td>
            <td>${launch.vehicle}</td>
            <td>${formatLaunchDate(launch.date)}</td>
            <td><span class="status status-${launch.status}">${getStatusLabel(launch.status)}</span></td>
        `;
        tbody.appendChild(row);
    });

    // Show a friendly message instead of just an empty table
    // when a filter matches nothing.
    emptyMessage.hidden = visibleLaunches.length > 0;
}

function setupFilterButtons() {
    const filterBar = document.getElementById("filterBar");

    filterBar.addEventListener("click", (event) => {
        const button = event.target.closest(".filter-btn");
        if (!button) return;

        // Move the active state to whichever button was clicked.
        filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.remove("is-active");
            btn.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");

        renderLaunchTable(button.dataset.filter);
    });
}

// ----------------------------------------------------------
// 5. Form validation (Join the Log)
// ----------------------------------------------------------
function validateLogbookForm(form) {
    let isValid = true;

    const fullNameInput = form.querySelector("#fullName");
    const emailInput = form.querySelector("#email");
    const fullNameError = form.querySelector("#fullNameError");
    const emailError = form.querySelector("#emailError");

    // reset previous state first
    [fullNameInput, emailInput].forEach((input) => {
        input.classList.remove("is-invalid");
        input.setAttribute("aria-invalid", "false");
    });
    fullNameError.textContent = "";
    emailError.textContent = "";

    if (fullNameInput.value.trim() === "") {
        fullNameInput.classList.add("is-invalid");
        fullNameInput.setAttribute("aria-invalid", "true");
        fullNameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // A simple, readable email check — not perfect, but catches the
    // obvious mistakes like a missing @ or no domain.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        emailInput.setAttribute("aria-invalid", "true");
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    return isValid;
}

function setupLogbookForm() {
    const form = document.getElementById("logbookForm");
    const successMessage = document.getElementById("formSuccessMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // stop the page from actually reloading/submitting anywhere

        if (!validateLogbookForm(form)) {
            successMessage.hidden = true;
            return;
        }

        const name = form.querySelector("#fullName").value.trim();
        const method = form.querySelector('input[name="notify"]:checked').value;

        successMessage.textContent =
            method === "none"
                ? `Thanks, ${name} — you're on the list, no notifications.`
                : buildAlertMessage(name, method);
        successMessage.hidden = false;

        form.reset();
    });
}

// ----------------------------------------------------------
// 6. Auto-close the mobile menu after tapping a nav link
// ----------------------------------------------------------
function setupMobileNavAutoClose() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.checked = false;
        });
    });
}

// ----------------------------------------------------------
// 7. Live public API pull — astronauts currently in space
//    (Promises, async/await, fetch, JSON, error handling)
// ----------------------------------------------------------
async function fetchAstronauts() {
    const container = document.getElementById("astroContainer");

    try {
        const response = await fetch("https://api.open-notify.org/astros.json");

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json(); // parses the JSON response body

        const names = data.people.map((person) => person.name);

        container.innerHTML = `
            <p class="astro-count">${data.number}</p>
            <ul class="astro-list">
                ${names.map((name) => `<li>${name}</li>`).join("")}
            </ul>
        `;
    } catch (error) {
        // Network issues, the API being down, or ad-blockers can all
        // land here — show something useful instead of a blank section.
        container.innerHTML = `<p class="astro-status is-error">Couldn't load live data right now. (${error.message})</p>`;
    }
}

// ----------------------------------------------------------
// Run everything once the page is ready
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderStats();
    renderMissions();
    renderLaunchTable();
    setupFilterButtons();
    setupLogbookForm();
    setupMobileNavAutoClose();
    fetchAstronauts();
});
