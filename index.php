<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Pinyon+Script&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
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
            <p>PI 100 Project: Life and Works of Rizal &bull; Educational Purpose Only</p>
        </div>
    </div>

    <div id="welcomeModal" class="modal active">
        <div class="modal-backdrop"></div>
        <div class="vintage-paper-modal">
            <button class="modal-close-wax" onclick="closeWelcome()">&times;</button>
            
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

    <div id="aboutModal" class="modal">
        <div class="modal-backdrop"></div>
        <div class="vintage-paper-modal">
            <button class="modal-close-wax" onclick="closeAbout()">&times;</button>
            <div class="paper-content">
                <h1 class="elegant-title">About the Project</h1>
                <div class="text-columns single-col">
                    <p>This interactive map invites users to retrace Jose Rizal's first voyage from the Philippines to Spain (1882) through a hand-drawn 2D world.</p>
                    <p><strong>Developed by:</strong><br> Gabryelle Doreen Amador, Duncan Red Benedict De Guzman, Angeline Joy Miguel, and Jessica Bea Novesteras.</p>
                </div>
            </div>
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
        <h2 class="loading">Consulting the archives...</h2>
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
    
    <script src="js/script.js"></script>
</body>
</html>