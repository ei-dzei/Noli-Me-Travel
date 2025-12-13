//Get needed element rom the DOM
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
const cityOutput = document.querySelector(".city");
const areaOutput = document.querySelector(".area");
const currencyOutput = document.querySelector(".currency");
const languagesOutput = document.querySelector(".languages");

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
    //Add click event to each country
    country.addEventListener("click", function(e) {
        e.preventDefault(); 
        e.stopPropagation();

        //Set loading text
        loading.innerText = "Naliligaw ka. Hindi dumaan si Rizal dito. 😉";
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
        //Open the side panel
        sidePanel.classList.add("side-panel-open");
        //Use fetch to get data from the API fuck this shit
        fetch(`https://restcountries.com/v3.1/name/${clickedCountryName}?fullText=true`)
        .then(response => {
            //Check if the response is okay
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            //Parse the response as JSON
            return response.json();
        })
        .then(data => {
            console.log(data);
            //Delay the code inside for half a second
            setTimeout(() => {
                //Extract data and output to the side panel (country name)
                countryNameOutput.innerText = data[0].name.common;
                //Flag image
                countryFlagOutput.src = data[0].flags.png;
                //Capital city
                cityOutput.innerText = data[0].capital;
                //Area
                const formatedNumber = data[0].area.toLocaleString('de-DE');
                areaOutput.innerHTML = formatedNumber + ` km<sup>2</sup>`;
                //Currency
                const currencies = data[0].currencies;
                //Set currency to empty string
                currencyOutput.innerText = "";
                //Loop through each object key
                Object.keys(currencies).forEach(key => {
                    //Output the name of each currency
                    currencyOutput.innerHTML += `<li>${currencies[key].name}</li>`;
                });
                //Languages
                const languages = data[0].languages;
                languagesOutput.innerText = "";
                Object.keys(languages).forEach(key => {
                    languagesOutput.innerHTML += `<li>${languages[key]}</li>`;
                });
                //Wait new flag image to load
                countryFlagOutput.onload = () => {
                    //Show container with country data
                    container.classList.remove("hide");
                    //Hide loading screen
                    loading.classList.add("hide");
                };
            }, 500);
        })
        //Handle errors
        .catch(error => {
            //Output explanatory text
            loading.innerText = "Boneks! No data found.";
            console.error('There has been a problem with your fetch operation:', error);
        });
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

// closing events
closeBtn.addEventListener("click", () => {
  sidePanel.classList.remove("side-panel-open")
})

function openAbout() {
  document.getElementById("aboutModal").classList.add("active")
}

function closeAbout() {
  document.getElementById("aboutModal").classList.remove("active")
}

let currentPage = 1
const totalPages = 3

function nextPage() {
  if (currentPage < totalPages) {
    const currentPageEl = document.querySelector(`.book-page[data-page="${currentPage}"]`)
    currentPage++
    const nextPageEl = document.querySelector(`.book-page[data-page="${currentPage}"]`)

    currentPageEl.classList.remove("active")
    nextPageEl.classList.add("active")
  }
}

function prevPage() {
  if (currentPage > 1) {
    const currentPageEl = document.querySelector(`.book-page[data-page="${currentPage}"]`)
    currentPage--
    const prevPageEl = document.querySelector(`.book-page[data-page="${currentPage}"]`)

    currentPageEl.classList.remove("active")
    prevPageEl.classList.add("active")
  }
}

document.addEventListener("keydown", (e) => {
  const welcomeModal = document.getElementById("welcomeModal")
  const aboutModal = document.getElementById("aboutModal")

  if (welcomeModal.classList.contains("active") && !aboutModal.classList.contains("active")) {
    if (e.key === "ArrowRight") {
      nextPage()
    } else if (e.key === "ArrowLeft") {
      prevPage()
    }
  }
})

function closeWelcome() {
  const modal = document.getElementById("welcomeModal");
  modal.classList.remove("active");
  
  setTimeout(() => {
      modal.style.zIndex = "-1"; 
  }, 500);

  currentPage = 1;
  document.querySelectorAll(".book-page").forEach((page) => page.classList.remove("active"));
  document.querySelector('.book-page[data-page="1"]').classList.add("active");
}