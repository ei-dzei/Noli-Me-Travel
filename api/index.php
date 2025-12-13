<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
    <link rel="stylesheet" href="../public/css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Pinyon+Script&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
    <script src="<?=$_ENV['FONT_AWESOME'];?>"></script>
    <title>Noli Me Travel: Rizal's Voyage</title>
</head>
<body>

    <div class="top-ui-layer">
        <div class="nav-item-wrapper">
            <button class="btn-vintage-tag" onclick="openAbout()">
                <span class="tag-text">How It Works</span>
                <span class="tag-sub">User Guide</span>
            </button>
        </div>

        <div class="top-disclaimer">
            <p>PI 100: Life and Works of Rizal &bull; For Educational Purposes Only</p>
        </div>

        <div class="top-disclaimer tag-text">
            <p>Noli Me Travel</p>
        </div>

        <div class="nav-item-wrapper right-corner">
            <button class="btn-vintage-tag" onclick="toggleTimeline()">
                <span class="tag-text">Itinerary</span>
                <span class="tag-sub">Show Timeline</span>
            </button>
        </div>
    </div>

    <div id="welcomeModal" class="modal active">
        <div class="modal-backdrop"></div>
        <div class="vintage-paper-modal">
                       
            <div class="book-page active" data-page="1">
                <div class="paper-content">
                    <h1 class="elegant-title">Welcome to Noli Me Travel</h1>
                    <h2 class="vintage-subtitle">Rizal’s Voyage from the Philippines to Spain</h2>
                    
                    <div class="text-columns">
                        <p>
                            <span class="drop-cap">J</span>ose Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. From a young age, he showed remarkable intellect and artistic talent.</p>
                        <p>
                            In 1882, after finishing his 4th year of medical course in UST, Rizal was disgusted with the antiquated method of instruction in the Dominican-owned university and the racial prejudice of Dominican professors against Filipino students. Hence, he decided to complete his studies in Spain. This was his “secret mission,” encouraged and quietly supported by his brother Paciano and close friends, to observe the life and culture, languages and customs, industries and commerce, and governments and laws of the European nations to prepare himself for the task of liberating the Filipinos from Spanish tyranny. Rizal left the Philippines under the name “Jose Mercado” to continue his medical and intellectual training in Spain. This was kept a secret, even to his own parents, to avoid detection by the Spanish authorities and the friars.
                        </p>
                    </div>
                    
                    <div class="nav-controls">
                        <button class="ink-btn next" onclick="nextPage()">Next Page &rarr;</button>
                    </div>
                </div>
            </div>

            <div class="book-page" data-page="2">
                <div class="paper-content">
                    <h1 class="elegant-title">The Journey Begins</h1>
                    <div class="text-columns single-col">
                        <p>
                            Rizal’s voyage from the Philippines to Spain was a major turning point. As he passed through different foreign ports and finally reached the liberal atmosphere of Barcelona and Madrid, he encountered new political ideas, scientific thinking, and a freer public life that deepened his understanding of liberty, rights, and national dignity. The journey you are about to embark reveals his experiences, observations, and studies that converged into the critical vision that would later influence his writings and beliefs that helped shape the sense of Filipino nationhood ignited during his time that continues to this day. 
                        </p>
                        <br>
                        <p>
                            You are about to retrace the steps of the First Filipino. As he passed through foreign ports like Singapore, Colombo, and Marseilles, finally reaching Barcelona, his worldview expanded.
                        </p>
                        <p>Use your mouse to <strong>Drag</strong> the map and explore. Click on highlighted countries to find out what happened from that location.</p>
                    </div>
                    
                    <div class="nav-controls centered">
                        <button class="ink-btn back" onclick="prevPage()">&larr; Back</button>
                        <button class="btn-primary-vintage" onclick="closeWelcome()">Start Exploration</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- how it fucking works -->
    <div id="aboutModal" class="modal">
        <div class="modal-backdrop"></div>
        <div class="vintage-paper-modal">
            <button class="modal-close-wax" onclick="closeAbout()">&times;</button>
            <div class="paper-content">
                <h1 class="elegant-title">About the Project</h1>
                <div class="text-columns single-col">
                    <p>
                        This is an interactive map that invites users to retrace Jose Rizal’s first voyage from the Philippines to Spain through a hand-drawn 2D world. Designed as a digital learning space, it turns Rizal’s travel route into an exploratory experience to see where he went, what he encountered, and how those experiences contributed to his growth.
                    </p>
                    <br>
                    <p>
                        Each country on Rizal's route is marked with clickable elements you are to discover, containing historical information, facts, and anecdotes linked to that specific stopover. A timeline displays the proper order of his travels, helping the users to maintain chronology while freely exploring the map.
                        Books by <a target="_blank" href="https://www.researchgate.net/publication/360619128_The_First_Filipino_by_Leon_Ma_Guerrero_1974">Guerrero</a>
                        and <a target="_blank" href ="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.google.com.ph%2Fbooks%2Fedition%2F_%2FS1JwAAAAMAAJ%3Fhl%3Den%26sa%3DX%26ved%3D2ahUKEwj05KKirrqRAxUYna8BHRK_At8Q8fIDegQILBAe&h=AT2BAER5TIoG5oCIH08CfxDGOSwrt1lmIKG7ExsciNkc618P_clxfTJ7oXmUKGRncjnws2FAY_1maBVVDLGYB9wADfuPbn7_nXFHMFZBHq5QL9SztDO-8N7-krEoieU">Zaide</a> are used as references for this project.
                    </p>
                    <br>
                    <p>
                        <strong>Developed by:
                        <br> Gabryelle Doreen Amador, Duncan Red Benedict De Guzman,<br> Angeline Joy Miguel, and Jessica Bea Novesteras.</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="countryModal" class="modal">
        <div class="modal-backdrop"></div>
        <div class="vintage-paper-modal" style="min-height: 600px;">
            <button class="modal-close-wax" onclick="closeCountryModal()">&times;</button>
            <div class="paper-content" id="countryContent">
                <div class="loading-spinner">
                    <h2 class="vintage-subtitle">Opening archives...</h2>
                </div>
            </div>
        </div>
    </div>

    <div id="assetsModal" class="modal">
        <div class="modal-backdrop" onclick="closeassetsModal()"></div>
        <div class="assets-card">
            <button class="modal-close-wax" onclick="closeassetsModal()" style="top:-15px; right:-15px;">&times;</button>
            <img id="assetsImg" class="assets-image-large" src="" alt="">
            <h2 id="assetsTitle" class="assets-title"></h2>
            <p id="assetsDesc" class="assets-desc"></p>
        </div>
    </div>

    <div class="world-map">
        <div class="map-container">
            <?php include 'world-map.php'; ?>
        </div>
    </div>

    <div class="side-panel">
        <div class="journal-texture"></div>
        <div class="container">
            <h1 class="country-name">Philippines</h1>
            <div class="photo-slot">
                <img src="./flag.png" class="country-flag" style="display:none;">
            </div>
            <div class="handwritten-notes">
                <p><strong>Date:</strong> <span class="date"></span></p>
                <p><strong>Location:</strong> <span class="location"></span></p>
                <div class="story-content">
                    <strong>Story:</strong> <span class="story"></span>
                </div>
            </div>
        </div>
        <button class="close-btn"><i class="fas fa-times"></i></button>
        <h2 class="loading">Saan kaya pumunta si Rizal?</h2>
    </div>

    <div class="timeline-bar">
        <button class="timeline-close-btn">&times;</button>
        <div class="timeline-header">The 1882 Itinerary</div>
        <div class="timeline-scroll-area"></div>
    </div>

    <div class="zoom-controls">
        <button class="zoom-in">+</button>
        <button class="zoom-out">-</button>
        <p class="zoom-value">100%</p>
    </div>
    
    <script src="../public/js/script.js"></script>
</body>
</html>