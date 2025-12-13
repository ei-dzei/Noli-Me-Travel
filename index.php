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
        <p>Description dito soon to come haha.</p>
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
