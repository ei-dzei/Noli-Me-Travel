//Get needed elements from the DOM
const mapContainer = document.querySelector(".map-container"); 
const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");
const mapElement = document.querySelector("svg"); 
const timelineBar = document.querySelector(".timeline-bar");
const timelineScrollArea = document.querySelector(".timeline-scroll-area");
const timelineCloseBtn = document.querySelector(".timeline-close-btn");

//Data Outputs
const countryNameOutput = document.querySelector(".country-name");
const countryFlagOutput = document.querySelector(".country-flag");
const dateOutput = document.querySelector(".date"); 
const locationOutput = document.querySelector(".location"); 
const storyOutput = document.querySelector(".story"); 

//Mga naresearch
//nabago yung countryKey kasi nabago yung map svg okay pero di ko mahanap ang singapore wth haufhsdjfjkjadgfijedagfv pero sa svg meron naman pero sa map wala like hello gdfajgoja
const rizalTravels = [
  {
    countryKey: "PH", 
    title: "Philippines - Departure",
    location: "Manila, Philippines",
    month: "May", 
    date: "May 3, 1882",
    story: "Rizal secretly leaves the Philippines for the first time on the Spanish steamer Salvadora, bound for Singapore, traveling under the name “Jose Mercado” to avoid suspicion from Spanish authorities and friars. <br></br> His “secret mission” is to study in Spain, observe European societies, and prepare himself intellectually to work for reforms in the Philippines. <br></br> Before his departure, he wrote a farewell letter for his beloved parents and sweetheart Leonor Rivera. <br></br> His departure was only known by his brother Paciano, his uncle Antonio Rivera, his sisters Neneng and Lucia, the Valenzuela family, Pedro A. Paterno, his compadre Mateo Evangelista, the Ateneo Jesuit fathers, and some intimate friends, including Chengoy or Jose M. Cecilio. <br></br> The Jesuit priests gave him letters of recommendation to the members of their Society in Barcelona."
  },
  {
    countryKey: "SG",
    title: "Singapore (British Colony)",
    location: "Singapore",
    month: "May",
    date: "May 9-11, 1882",
    story: "During the voyage to Singapore, there were sixteen passengers including Rizal. There were five or six ladies, many children, and the rest were gentlemen. He was the only Filipino, others were Spaniards, British, and Indian Negroes. <br></br> The ship captain, Donato Lecha from Asturias, Spain, befriended Rizal, whom he described as an affable man. However, he was peeved by some Spaniards who spoke ill of the Philippines. <br></br> To relieve his boredom, Rizal played chess with older passengers and won many times as he was a good chess player. <br></br> On May 8, 1882, while the steamer was approaching Singapore, Rizal saw a beautiful island that reminded him of “Talim Island with the Susong Dalaga”. <br></br> On May 9, 1882, the Salvadora docks in Singapore, where Rizal checks into Hotel de la Paz and spends about two days walking around the city, observing its busy harbor and multicultural streets. <br></br> Rizal saw the famous Botanical Garden, the beautiful Buddhist temples, the busy shopping district, and the statue of Sir Thomas Stanford Raffles, the founder of Singapore. <br></br> On May 11, 1882, Rizal transferred to the French steamer Djemnah, which left Singapore for Europe."
  },
  {
    countryKey: "LK",
    title: "Sri Lanka (British Ceylon)",
    location: "Point Galle and Colombo",
    month: "May",
    date: "May 17-18, 1882",
    story: "Rizal found the Djemnah larger and cleaner, which carried more passengers; they were British, French, Dutch, Spaniards, Malays, Siamese, and Filipinos. <br></br> The Filipinos who were with Rizal were Mr. and Mrs. Salazar and Mr. Vicente Pardo. <br></br> Rizal attempted to converse in French, but to his surprise and embarrassment, he found out that his book on French, which he learned at Ateneo, could not be understood. He had to speak in mixed Spanish-Latin supplemented by gesticulations and sketching on paper. Later, he gradually improved his knowledge of the French language. <br></br> On May 17, 1882, Djemnah reached Point Galle, a seacoast town in southern Ceylon (now Sri Lanka). He described the town as picturesque but lonely, quiet, and sad. <br></br> On May 18, 1882, Djemnah weighed anchor and resumed voyage towards Colombo, capital of Ceylon. Rizal was enamored by Colombo because of its scenic beauty and elegant buildings. He noted that it was more beautiful, smart, and elegant than Singapore, Point Galle and Manila."
  },
  {
    countryKey: "EG",
    title: "Egypt (Somalia & British Aden [Yemen])",
    location: "Suez Canal & Africa",
    month: "May",
    date: "Late May 1882",
    story: "While crossing the Indian Ocean to the Cape of Guardafui, Africa (Somalia), Rizal sighted the barren coast of Africa, which he called an inhospitable land but famous. <br></br> At the British Aden (Yemen), Rizal went ashore to see the sights. He found the city hotter than Manila. He was amused to see the camels for the first time. <br></br> At the City of Suez, which is the Red Sea terminal of the Suez Canal, Rizal disembarked and went sightseeing, and was most impressed by the beautiful moonlight, which reminded him of Calamba and his family. <br></br>  Djemnah took five days to traverse through the Suez Canal, which was built by Ferdinand de Lesseps, a French diplomat-engineer, and was inaugurated on November 17, 1869. <br></br> Finally, at the Port Said, Rizal landed in Port Said, the Mediterranean terminal of the Suez Canal, to see the interesting sights. He was fascinated by the multi-racial inhabitants, speaking a babel of tongues like Arabic, Egyptian, Greek, French, Italian, Spanish, etc."
  },
  {
    countryKey: "IT",
    title: "Italy",
    location: "Naples, Italy",
    month: "June",
    date: "June 11, 1882",
    story: "On June 11, 1882, Rizal reached Naples, which pleased him because of its business activity, lively people, and its panoramic beauty. He was captivated by Mount Vesuvius, the Castle of St. Telmo, and other historic sights of the city."
  },
  {
    countryKey: "FR",
    title: "France",
    location: "Marseilles, France",
    month: "June",
    date: "June 12-15, 1882",
    story: "On the night of June 12, 1882, Djemnah docked at the French harbor of Marseilles. Rizal visited the famous Château d’lf, where Dantes, hero of The Count of Monte Cristo, was imprisoned. <br></br> Rizal stayed for two and a half days in Marseilles."
  },
  {
    countryKey: "ES",
    title: "Spain - Arrival",
    location: "Barcelona, Spain",
    month: "June",
    date: "June 16, 1882",
    story: "On the afternoon of June 15, 1882, Rizal left Marseille by train. <br></br> Rizal crossed the Pyrenees and stopped for a day at the frontier town of Port Bou, where he noticed the indifference of Spanish immigration officers to tourists, unlike the French immigration officers. <br></br> On June 16, 1882, Rizal reached his destination, Barcelona, by rail. <br></br> Rizal’s first impression of Barcelona, the greatest city of Cataluña and Spain’s second largest city, was ugly and dirty due to the little inns and inhospitable residents. <br></br> Rizal happened to stay upon his arrival at a dark and dirty inn located on an unimpressive narrow street in the town’s most ugly side, where staff and guests were indifferent to him. <br></br> Later, Rizal found the city to be great with its atmosphere of freedom and liberalism. Its people were open-hearted, hospitable, and courageous. <br></br>Rizal enjoyed promenading along Las Ramblas, the most famous street in Barcelona. <br></br> Rizal was welcomed by his schoolmates in Ateneo. They gave him a party at their favorite cafe in Plaza de Cataluña, where they had an exchange of toasts and told him about the attractions of Barcelona and the customs of the Spanish people."
  }
];

//Gets country name from element
function getCountryIdentifier(element) {
    //May id kasi may id na fljarsjgvierjsgijsrgk
    if (element.hasAttribute("id")) return element.getAttribute("id");
    if (element.hasAttribute("name")) return element.getAttribute("name");
    if (element.classList.length > 0) return element.classList[0];
    return null;
}

//Highlight the countries on the map
function highlightVisitedCountries() {
    // Get all unique country keys from our data
    const visitedKeys = [...new Set(rizalTravels.map(t => t.countryKey.toLowerCase()))];
    // Check every path in the map
    const allPaths = document.querySelectorAll("path");
    allPaths.forEach(path => {
        const id = getCountryIdentifier(path);
        if (id && visitedKeys.includes(id.toLowerCase())) {
            path.classList.add("visited-country");
        }
    });
}

//Generate the Timeline HTML
function generateTimeline() {
    //Groups by Month
    const months = {};
    rizalTravels.forEach(item => {
        if (!months[item.month]) months[item.month] = [];
        months[item.month].push(item);
    });
    //Build HTML
    let html = "";
    for (const [month, events] of Object.entries(months)) {
        html += `<div class="month-group"><span class="month-label">${month}</span>`;
        events.forEach(event => {
            html += `
            <div class="timeline-item" onclick="triggerCountryClick('${event.countryKey}')">
                <h4>${event.title}</h4>
                <span>${event.date}</span>
                <span>${event.location}</span>
            </div>`;
        });
        html += `</div>`;
    }
    timelineScrollArea.innerHTML = html;
}

//Allow Timeline items to trigger map clicks
window.triggerCountryClick = function(countryKey) {
    //Try finding by ID first (since new SVG uses IDs na)
    let targetElement = document.getElementById(countryKey);
    
    //Fallback to name or class if ID not found
    if(!targetElement) targetElement = document.querySelector(`path[name="${countryKey}"]`);
    if(!targetElement) targetElement = document.querySelector(`path.${countryKey}`);

    if (targetElement) {
        //Manually trigger the click logic
        //We create a fake event object to pass to our main handler
        const fakeEvent = { target: targetElement, tagName: "path" }; 
        handleCountryClick(fakeEvent); 
    } else {
        console.log("Could not find map element for: " + countryKey); 
    }
};

//Zoom and pan logic (control yung parang frame ng map which is map container)
const zoomTarget = document.querySelector(".map-container"); 
let currentScale = 1; //normal size - 100%
let currentTranslateX = 0;
let currentTranslateY = 0;

//dragging variables
let isDragging = false;
let startX = 0;
let startY = 0;
let initialTranslateX = 0;
let initialTranslateY = 0;
let hasMoved = false; //Flag to distinguish click vs drag

//Zoom functions
const zoomStep = 0.2; //zoom per click ay 20%
const maxZoom = 3; //max zoom is 300%
const minZoom = 1; //min zoom is 100%

function updateTransform() {
    //Apply both translate (pan) and scale (zoom)
    zoomTarget.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
    updateZoomUI();
}

function updateZoomUI() {
    zoomValueOutput.innerText = Math.round(currentScale * 100) + "%";
    zoomInBtn.disabled = (currentScale >= maxZoom);
    zoomOutBtn.disabled = (currentScale <= minZoom);
}

//Drag event listeners
//Mouse down so start dragging
mapContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    hasMoved = false; //Reset move flag
    startX = e.clientX;
    startY = e.clientY;
    initialTranslateX = currentTranslateX;
    initialTranslateY = currentTranslateY;
    
    mapContainer.classList.add("grabbing"); //Change cursor
});

//Mouse move, it now calculate new position
window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    //Check if user actually moved mouse more than 5px
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        hasMoved = true;
    }

    //Update coordinates
    currentTranslateX = initialTranslateX + dx;
    currentTranslateY = initialTranslateY + dy;

    updateTransform();
});

//Mouse up so stop dragging
window.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        mapContainer.classList.remove("grabbing");
    }
});

//run on load immediately
window.addEventListener('DOMContentLoaded', () => {
    highlightVisitedCountries();
    generateTimeline();
    updateZoomUI();
    setTimeout(() => {
        timelineBar.classList.add("timeline-open");
    }, 100); //delay
});

//Main function
function handleCountryClick(e) {
    //If user was dragging the map, ignore
    if (hasMoved && e.tagName !== "path") { //Allow fake events (timeline clicks) to pass
        return; 
    }

    let target = e.target;
    //Handle fake event object passed from timeline
    if (e.target.tagName !== "path" && e.tagName === "path") target = e; 
    if (target.tagName !== "path") return;

    const clickedCountryName = getCountryIdentifier(target);
    if (!clickedCountryName) return; 

    //For every country clicked ay the following happens ano logically depende if timeline or side panel
    //Hides the timeline immediately
    timelineBar.classList.remove("timeline-open");
    //Opens the side panel immediately
    sidePanel.classList.add("side-panel-open");
    sidePanel.scrollTop = 0; 
    //Reset to loading states
    container.classList.add("hide"); 
    loading.classList.remove("hide");
    //Temporary loading text
    loading.innerText = "Checking pagiging gala ni Rizal 🧐..."; 

    //Local search
    //We look for the country in our 'rizalTravels' array
    //We use .find() to check if the 'countryKey' includes the clicked name
    const result = rizalTravels.find(item => 
        //Check against ID or Name
        clickedCountryName.toLowerCase() === item.countryKey.toLowerCase()
    );

    //Display match found or not
    if (result) {
        //If match found then show story
        setTimeout(() => {
            //Map the data to your existing HTML elements
                //Title
                countryNameOutput.innerText = result.title; 
                //Date
                dateOutput.innerText = result.date;
                //Location
                locationOutput.innerHTML = `${result.location}`;
                //Story
                storyOutput.innerHTML = `<p style="text-align: justify; line-height: 1.5;">${result.story}</p>`;
                //Flag (Optional)
                //if ever man siguro add path to assets nalang or countries idk
                countryFlagOutput.style.display = "none"; //Hide flag if no image available by default
                //Show container with country data
                loading.classList.add("hide");
                //Hide loading screen
                container.classList.remove("hide");
        }, 300); //delay 
    } else {
        //If no data like Rizal didn't go here
        loading.innerText = "Naliligaw ka. Hindi dumaan si Rizal dito. 😉";
        //Keep container hidden, keep loading text visible
    }
}

//Map click listener
mapContainer.addEventListener("click", handleCountryClick);

//Hover effects
mapContainer.addEventListener("mouseover", function(e) {
    if (e.target.tagName === "path" && !isDragging) { //Don't highlight while dragging
        e.target.style.fill = "#c99aff";
    }
});

mapContainer.addEventListener("mouseout", function(e) {
    if (e.target.tagName === "path") {
        //If it's a visited country, revert to visited color, else default
        if (e.target.classList.contains("visited-country")) {
            e.target.style.fill = ""; // Revert to CSS class color
        } else {
            e.target.style.fill = "#443d4b"; // Revert to default
        }
    }
});


//Button event listeners
//side panel close, timeline open
closeBtn.addEventListener("click", () => {
    sidePanel.classList.remove("side-panel-open");
    timelineBar.classList.add("timeline-open");
});

//timeline only close
timelineCloseBtn.addEventListener("click", () => {
    timelineBar.classList.remove("timeline-open");
});

//zoom event listeners
zoomInBtn.addEventListener("click", () => {
    if (currentScale < maxZoom) {
        currentScale += zoomStep;
        updateTransform();
    }
});

zoomOutBtn.addEventListener("click", () => {
    if (currentScale > minZoom) {
        currentScale -= zoomStep;
        updateTransform();
    }
});