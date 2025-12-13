//Get needed elements from the DOM
const map = document.querySelector("svg");
const countries = document.querySelectorAll("path");
const sidePanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const loading = document.querySelector(".loading");
const zoomInBtn = document.querySelector(".zoom-in");
const zoomOutBtn = document.querySelector(".zoom-out");
const zoomValueOutput = document.querySelector(".zoom-value");

//Data Outputs
const countryNameOutput = document.querySelector(".country-name");
const countryFlagOutput = document.querySelector(".country-flag");
const dateOutput = document.querySelector(".date"); 
const locationOutput = document.querySelector(".location"); 
const storyOutput = document.querySelector(".story"); 

//Mga naresearch
const rizalTravels = [
  {
    countryKey: "Philippines", 
    title: "Philippines - Departure",
    location: "Manila, Philippines",
    date: "May 3, 1882",
    story: "Rizal secretly leaves the Philippines for the first time on the Spanish steamer Salvadora, bound for Singapore, traveling under the name 'Jose Mercado' to avoid suspicion from Spanish authorities and friars. His secret mission is to study in Spain, observe European societies, and prepare himself intellectually to work for reforms in the Philippines. Before his departure, he wrote a farewell letter for his beloved parents and sweetheart Leonor Rivera."
  },
  {
    countryKey: "Singapore",
    title: "Singapore (British Colony)",
    location: "Singapore",
    date: "May 9-11, 1882",
    story: "During the voyage, the ship captain Donato Lecha befriended Rizal. On May 9, the Salvadora docks in Singapore. Rizal checks into Hotel de la Paz and spends two days observing the busy harbor, the Botanical Garden, Buddhist temples, and the statue of Sir Thomas Stanford Raffles. On May 11, Rizal transferred to the French steamer Djemnah, which left Singapore for Europe."
  },
  {
    countryKey: "Sri Lanka",
    title: "Sri Lanka (Ceylon)",
    location: "Point Galle and Colombo",
    date: "May 17-18, 1882",
    story: "Rizal found the Djemnah larger and cleaner. He attempted to converse in French but found his book-learning insufficient. On May 17, they reached Point Galle, which he described as picturesque but lonely. On May 18, they reached Colombo. Rizal was enamored by Colombo's scenic beauty and elegant buildings, noting it was more beautiful than Singapore, Point Galle, and Manila."
  },
  {
    countryKey: "Egypt",
    title: "Egypt & The Suez Canal",
    location: "Suez Canal & Africa",
    date: "Late May 1882",
    story: "Crossing the Indian Ocean, Rizal sighted the barren coast of Africa. At Aden, he was amused to see camels for the first time. At the City of Suez, the moonlight reminded him of Calamba. The Djemnah took five days to traverse the Suez Canal. At Port Said, he was fascinated by the multi-racial inhabitants speaking a babel of tongues."
  },
  {
    countryKey: "Italy",
    title: "Italy - Panoramic Beauty",
    location: "Naples, Italy",
    date: "June 11, 1882",
    story: "Rizal reached Naples, which pleased him because of its business activity, lively people, and panoramic beauty. He was captivated by Mount Vesuvius, the Castle of St. Telmo, and other historic sights of the city."
  },
  {
    countryKey: "France",
    title: "France - The Château d’If",
    location: "Marseilles, France",
    date: "June 12-15, 1882",
    story: "The Djemnah docked at Marseilles. Rizal visited the famous Château d’If, where Dantes, hero of The Count of Monte Cristo, was imprisoned. He stayed for two and a half days before leaving by train on the afternoon of June 15."
  },
  {
    countryKey: "Spain",
    title: "Spain - Arrival",
    location: "Barcelona, Spain",
    date: "June 16, 1882",
    story: "After crossing the Pyrenees, Rizal reached Barcelona by rail. His first impression was that the city was ugly and dirty, and he stayed at a dim inn. However, he later found the city great with an atmosphere of freedom and liberalism. He enjoyed promenading along Las Ramblas and was welcomed by his Ateneo schoolmates at a cafe in Plaza de Cataluña."
  }
];

//Loop through all countries on the map
countries.forEach((country) => {
    //Add mouse enter event to each country (cursor enters a country)
    country.addEventListener("mouseenter", function() {
        //Get all classes of element the mouse enters
        const classList = [...this.classList].join('.');
        console.log(classList);
        //Create a selector for matching classes
        const selector = '.' + classList;
        //Select all matching elements /
        //Select all pieces of land (svg paths) 
        //that belong to the same country
        const matchingElements = document.querySelectorAll(selector);
        //Add hover effect to all matching elements
        matchingElements.forEach(el => el.style.fill = "#c99aff");
    });
    //Add a mouse out event (cursor leaves a country)
    country.addEventListener("mouseout", function() {
        //Remove hovered styles from matching elements
        const classList = [...this.classList].join('.');
        const selector = '.' + classList;
        const matchingElements = document.querySelectorAll(selector);
        matchingElements.forEach(el => el.style.fill = "#443d4b");
    });

    //Click event
    country.addEventListener("click", function(e) {
        //Hide country data container
        container.classList.add("hide");
        //Show loading screen
        loading.classList.remove("hide");
        //Variable to hold the country name
        let clickedCountryName;
        //If the clicked svg path (country) has a name attribute
        if(e.target.hasAttribute("name")) {
            //Get the value of the name attribute (country name)
            clickedCountryName = e.target.getAttribute("name");
        //If it doesn't have a name attribute
        } else {
            //Get the class name (country name)
            clickedCountryName = e.target.classList.value;
        }
        // Open the side panel
        sidePanel.classList.add("side-panel-open");

        //Local search
        //We look for the country in our 'rizalTravels' array
        //We use .find() to check if the 'countryKey' includes the clicked name
        const result = rizalTravels.find(item => 
             clickedCountryName.toLowerCase().includes(item.countryKey.toLowerCase()) || 
             item.countryKey.toLowerCase().includes(clickedCountryName.toLowerCase())
        );

        //Display logic
        if (result) {
            //If may data sa country
            //Delay
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
                    container.classList.remove("hide");
                    //Hide loading screen
                    loading.classList.add("hide");
            }, 300); //Small 300ms delay

        } else {
            //If no data like Rizal didn't go here
            loading.innerText = "Naliligaw ka. Hindi dumaan si Rizal dito. 😉";
            //Keep container hidden, keep loading text visible
        }
    });
});

//Add click event to close button
closeBtn.addEventListener("click", () => {
    //Close the side panel
    sidePanel.classList.remove("side-panel-open");
});

//Variable to contain the current zoom value
let zoomValue = 100;
//Disable zoom out button on load
zoomOutBtn.disabled = true;
//Add click event to zoom in button
zoomInBtn.addEventListener("click", () => {
    //Enable zoom out button
    zoomOutBtn.disabled = false;
    //Increase zoom value by 50
    zoomValue += 50;
    //If zoom value is under 500
    if(zoomValue < 500) {
        //Enable zoom in button
        zoomInBtn.disabled = false;
    } else {
        //Disable zoom in button
        zoomInBtn.disabled = true;
    }
    //Set map width and height according to zoom value
    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";
    //Output zoom value percentage
    zoomValueOutput.innerText = zoomValue + "%";
});
//Zoom out button click event
zoomOutBtn.addEventListener("click", () => {
    //Enable zoom in button
    zoomInBtn.disabled = false;
    //Decrease zoom value by 50
    zoomValue -= 50;
    //If zoom value is above 100
    if(zoomValue > 100) {
        //Enable zoom out button
        zoomOutBtn.disabled = false;
    } else {
        //Disable zoom out button
        zoomOutBtn.disabled = true;
    }
    //Set map width and height according to zoom value
    map.style.width = zoomValue + "vw";
    map.style.height = zoomValue + "vh";
    //Output zoom value percentage
    zoomValueOutput.innerText = zoomValue + "%";
});