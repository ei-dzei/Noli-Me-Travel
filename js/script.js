// --- DOM ELEMENTS ---
const mapContainer = document.querySelector(".map-container");
const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");
const timelineBar = document.querySelector(".timeline-bar");
const timelineScrollArea = document.querySelector(".timeline-scroll-area");
const timelineCloseBtn = document.querySelector(".timeline-close-btn");

// Data Outputs
const countryNameOutput = document.querySelector(".country-name");
const countryFlagOutput = document.querySelector(".country-flag");
const dateOutput = document.querySelector(".date");
const locationOutput = document.querySelector(".location");
const storyOutput = document.querySelector(".story");

// --- DATA ---
const rizalTravels = [
  { countryKey: "PH", title: "Philippines", location: "Manila", month: "May", date: "May 3, 1882", story: "Rizal secretly leaves the Philippines for the first time on the Spanish steamer Salvadora..." },
  { countryKey: "SG", title: "Singapore", location: "Singapore", month: "May", date: "May 9-11, 1882", story: "Rizal checked into Hotel de la Paz and spent two days observing the busy harbor..." },
  { countryKey: "LK", title: "Sri Lanka", location: "Colombo", month: "May", date: "May 17-18, 1882", story: "Rizal reached Point Galle, later moving to Colombo which he found elegant." },
  { countryKey: "EG", title: "Egypt", location: "Suez Canal", month: "May", date: "Late May 1882", story: "At the City of Suez, Rizal disembarked and went sightseeing." },
  { countryKey: "IT", title: "Italy", location: "Naples", month: "June", date: "June 11, 1882", story: "Rizal reached Naples and was captivated by Mount Vesuvius." },
  { countryKey: "FR", title: "France", location: "Marseilles", month: "June", date: "June 12-15, 1882", story: "Djemnah docked at Marseilles. Rizal visited the Château d’If." },
  { countryKey: "ES", title: "Spain", location: "Barcelona", month: "June", date: "June 16, 1882", story: "Rizal reached Barcelona and later Madrid to study." }
];

// --- LOGIC ---
function getCountryIdentifier(element) {
    if (element.hasAttribute("id")) return element.getAttribute("id");
    if (element.hasAttribute("name")) return element.getAttribute("name");
    return element.classList.length > 0 ? element.classList[0] : null;
}

function highlightVisitedCountries() {
    const visitedKeys = [...new Set(rizalTravels.map(t => t.countryKey.toLowerCase()))];
    const allPaths = document.querySelectorAll("path");
    allPaths.forEach(path => {
        const id = getCountryIdentifier(path);
        if (id && visitedKeys.some(k => id.toLowerCase().includes(k))) {
            path.classList.add("visited-country");
        }
    });
}

function generateTimeline() {
    const months = {};
    rizalTravels.forEach(item => {
        if (!months[item.month]) months[item.month] = [];
        months[item.month].push(item);
    });
    let html = "";
    for (const [month, events] of Object.entries(months)) {
        html += `<div style="display:flex;gap:5px;border-right:1px dashed #b8860b;padding-right:10px;"><div style="writing-mode:vertical-rl;color:#b8860b;font-weight:bold;">${month}</div>`;
        events.forEach(event => {
            html += `<div class="timeline-item" onclick="triggerCountryClick('${event.countryKey}')"><h4>${event.title}</h4><span>${event.date}</span></div>`;
        });
        html += `</div>`;
    }
    timelineScrollArea.innerHTML = html;
}

window.triggerCountryClick = function(countryKey) {
    let target = document.getElementById(countryKey) || document.querySelector(`path[name="${countryKey}"]`) || document.querySelector(`path.${countryKey}`);
    if (target) handleCountryClick({ target: target, tagName: "path" });
};

// Map Drag & Zoom
let currentScale = 1, currentTranslateX = 0, currentTranslateY = 0;
let isDragging = false, startX = 0, startY = 0, initialTranslateX = 0, initialTranslateY = 0, hasMoved = false;
const zoomTarget = mapContainer; const maxZoom = 4; const minZoom = 1;

function updateTransform() { zoomTarget.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`; zoomValueOutput.innerText = Math.round(currentScale * 100) + "%"; }

mapContainer.addEventListener("mousedown", (e) => { if(e.button !== 0) return; isDragging = true; hasMoved = false; startX = e.clientX; startY = e.clientY; initialTranslateX = currentTranslateX; initialTranslateY = currentTranslateY; mapContainer.classList.add("grabbing"); });
window.addEventListener("mousemove", (e) => { if (!isDragging) return; const dx = e.clientX - startX; const dy = e.clientY - startY; if (Math.abs(dx) > 5 || Math.abs(dy) > 5) hasMoved = true; currentTranslateX = initialTranslateX + dx; currentTranslateY = initialTranslateY + dy; updateTransform(); });
window.addEventListener("mouseup", () => { isDragging = false; mapContainer.classList.remove("grabbing"); });

// Click Handler
function handleCountryClick(e) {
    if (hasMoved && e.tagName !== "path") return;
    let target = e.target.tagName !== "path" && e.tagName === "path" ? e.target : e.target;
    if (target.tagName !== "path") return;
    const clickedID = getCountryIdentifier(target);
    if (!clickedID) return;

    timelineBar.classList.remove("timeline-open");
    sidePanel.classList.add("side-panel-open");
    container.classList.add("hide");
    loading.classList.remove("hide");
    
    const result = rizalTravels.find(item => clickedID.toLowerCase().includes(item.countryKey.toLowerCase()));
    
    setTimeout(() => {
        if (result) {
            countryNameOutput.innerText = result.title;
            dateOutput.innerText = result.date;
            locationOutput.innerText = result.location;
            storyOutput.innerHTML = result.story;
            container.classList.remove("hide"); loading.classList.add("hide");
        } else {
            loading.innerText = "Rizal did not stop here.";
        }
    }, 300);
}
mapContainer.addEventListener("click", handleCountryClick);

// Controls
closeBtn.addEventListener("click", () => { sidePanel.classList.remove("side-panel-open"); timelineBar.classList.add("timeline-open"); });
timelineCloseBtn.addEventListener("click", () => timelineBar.classList.remove("timeline-open"));
zoomInBtn.addEventListener("click", () => { if (currentScale < maxZoom) { currentScale += 0.2; updateTransform(); } });
zoomOutBtn.addEventListener("click", () => { if (currentScale > minZoom) { currentScale -= 0.2; updateTransform(); } });

// Modal
let currentPage = 1;
function openAbout() { document.getElementById("aboutModal").classList.add("active"); }
function closeAbout() { document.getElementById("aboutModal").classList.remove("active"); }
function closeWelcome() { document.getElementById("welcomeModal").classList.remove("active"); setTimeout(() => timelineBar.classList.add("timeline-open"), 500); }
function nextPage() { document.querySelector(`.book-page[data-page="1"]`).classList.remove("active"); document.querySelector(`.book-page[data-page="2"]`).classList.add("active"); }
function prevPage() { document.querySelector(`.book-page[data-page="2"]`).classList.remove("active"); document.querySelector(`.book-page[data-page="1"]`).classList.add("active"); }

window.addEventListener('DOMContentLoaded', () => { highlightVisitedCountries(); generateTimeline(); updateTransform(); });