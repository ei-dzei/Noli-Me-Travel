<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>

    <link rel="stylesheet" href="css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">

    <title>Noli Me Travel: Rizal’s Voyage</title>
</head>
<body>

    <!--Welcome-->
    <div id="welcomeModal" class="modal active">
        <div class="modal-content book-pages">
            <button class="modal-close" onclick="closeWelcome()">&times;</button>
            
            <!-- Page 1 -->
            <div class="book-page active" data-page="1">
                <div class="book-wrapper">
                    <h1>Welcome to Noli Me Travel!</h1>
                    <h2>Rizal's Voyage from the Philippines to Spain</h2>
                    
                    <div class="modal-body">
                        <p>
                            Jose Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna, into an educated and deeply religious family that deeply valued learning. Since childhood, he has shown remarkable talent in reading, writing, and the arts. He excelled in his studies at the Ateneo Municipal and the University of Santo Tomas (UST), but he also encountered discrimination, intellectual frustration, and the harsh realities of the Spanish colonial rule that shaped his sense of injustice and his desire to understand the wider world.
                        </p>
                    </div>
                    
                    <button class="page-nav next-page" onclick="nextPage()">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            
            <!-- Page 2 -->
            <div class="book-page" data-page="2">
                <div class="book-wrapper">
                    <h1>Welcome to Noli Me Travel!</h1>                    
                    <div class="modal-body">
                        <p>
                            In 1882, after finishing his 4th year of medical course in UST, Rizal was disgusted with the antiquated method of instruction in the Dominican-owned university and the racial prejudice of Dominican professors against Filipino students. Hence, he decided to complete his studies in Spain. This was his "secret mission," encouraged and quietly supported by his brother Paciano and close friends, to observe the life and culture, languages and customs, industries and commerce, and governments and laws of the European nations to prepare himself for the task of liberating the Filipinos from Spanish tyranny. Rizal left the Philippines under the name "Jose Mercado" to continue his medical and intellectual training in Spain. This was kept a secret, even to his own parents, to avoid detection by the Spanish authorities and the friars.
                        </p>
                    </div>
                    <div class="modal-body">
                        <p>
                            Rizal's voyage from the Philippines to Spain was a major turning point. As he passed through different foreign ports and finally reached the liberal atmosphere of Barcelona and Madrid, he encountered new political ideas, scientific thinking, and a freer public life that deepened his understanding of liberty, rights, and national dignity. The journey you are about to embark reveals his experiences, observations, and studies that converged into the critical vision that would later influence his writings and beliefs that helped shape the sense of Filipino nationhood ignited during his time that continues to this day. 
                        </p>
                    </div>
                    
                    <button class="btn-primary" onclick="closeWelcome()">Begin the Journey</button>

                    <button class="page-nav prev-page" onclick="prevPage()">
                        <i class="fas fa-arrow-left"></i>
                    </button>

                </div>
            </div>
        </div>
    </div>

    <div id="aboutModal" class="modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeAbout()">&times;</button>
            <div class="book-wrapper">
                <h1>About Noli Me Travel</h1>
                <div class="modal-body">
                    <p>
                        This is an interactive map that invites users to retrace Jose Rizal’s first voyage from the Philippines to Spain through a hand-drawn 2D world. Designed as a digital learning space, it turns Rizal’s travel route into an exploratory experience to see where he went, what he encountered, and how those experiences contributed to his growth.
                    </p>
                    <p>
                        This project was developed by the group of Gabryelle Doreen Amador, Duncan Red Benedict De Guzman, Angeline Joy Miguel, and Jessica Bea Novesteras as a course requirement for the subject PI 100: Life and Works of Rizal.
                    </p>
                    <p>
                        Each country on Rizal’s route is marked with clickable elements you are to discover, containing historical information, facts, and anecdotes linked to that specific stopover. A timeline displays the proper order of his travels, helping the users to maintain chronology while freely exploring the map. Books by Guerrero and Zaide are used as references for this project.
                    </p>
                    <p>
                        After closing this card, glide across Rizal’s world with your mouse or trackpad. Click, drag, and zoom around to open moments in his first travel, and trace the beginnings of his intellectual awakening. Look out for an easter egg! 
                    </p>
                </div>
            </div>
        </div>
    </div>

    <button class="btn-about" onclick="openAbout()">
        <i class="fas fa-info-circle"></i>
        How It Works
    </button>

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
