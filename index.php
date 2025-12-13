<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

    <link rel="stylesheet" href="css/styles.css">

    <title>Noli Me Travel: Rizal’s Voyage</title>
</head>
<body>

    <!--Welcome Box on first visit-->
    <dialog id="welcomeDialog">
        <h2>Noli Me Travel: Rizal's Voyage</h2>
        <p>This is an interactive map that invites users to retrace Jose Rizal’s first voyage from the Philippines to Spain through a hand-drawn 2D world. Designed as a digital learning space, it turns Rizal’s travel route into an exploratory experience to see where he went, what he encountered, and how those experiences contributed to his growth.
	
	This project was developed by the group of Gabryelle Doreen Amador, Duncan Red Benedict De Guzman, Angeline Joy Miguel, and Jessica Bea Novesteras as a course requirement for the subject PI 100: Life and Works of Rizal. 

Each country on Rizal’s route is marked with clickable elements you are to discover, containing historical information, facts, and anecdotes linked to that specific stopover. A timeline displays the proper order of his travels, helping the users to maintain chronology while freely exploring the map. Books by Guerrero and Zaide are used as references for this project.

	After closing this card, glide across Rizal’s world with your mouse or trackpad. Click, drag, and zoom around to open moments in his first travel, and trace the beginnings of his intellectual awakening. Look out for an easter egg!
</p>
        <button id="closeDialog">Close</button>
    </dialog>

    <div class="world-map">
        <div class="map-container">
            <?php 
            // Map created by Simplemaps.com
            include 'world-map.php';
            ?>
        </div>
    </div>


    <!--Simple Popup muna hehe-->
    <div class="side-panel">
        <div class="container">
            <h1 class="country-name">Philippines</h1>
            <img src="./flag.png" class="country-flag">
            <ul>
                <li>
                    <strong>Capital City:</strong>
                    <span class="city"></span>
                </li>
                <li>
                    <strong>Area:</strong>
                    <span class="area"></span>
                </li>
                <li>
                    <strong>Currencies:</strong>
                    <span class="currencies"></span>
                </li>
                <li>
                    <strong>Languages:</strong>
                    <span class="languages"></span>
                </li>
            </ul>
        </div>
        <button class="close-btn">
            <i class="fas fa-times"></i>
        </button>
        <h2 class="loading">San ka kaya pumunta si Rizal?</h2>
    </div>

    <!--Mapagpanggap na zoom controls bonkers-->
    <div class="zoom-controls">
        <button class="zoom-in">+</button>
        <button class="zoom-out">-</button>
        <p class="zoom-value">100%</p>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
