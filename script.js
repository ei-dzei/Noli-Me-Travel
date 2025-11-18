document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('viewport');
    const content = document.getElementById('content');
    const mapImage = document.getElementById('map-image');
    const timelineList = document.getElementById('timeline-list');
    const progressFill = document.getElementById('progress').querySelector('div');
    const overlay = document.getElementById('info-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    let isDragging = false;
    let startX = 0, startY = 0, currentX = 0, currentY = 0, scale = 1;
    const MAX_SCALE = 4, ZOOM_SPEED = 0.001, TOTAL_STEPS = 3;
    let VIEWPORT_WIDTH = viewport.clientWidth, VIEWPORT_HEIGHT = viewport.clientHeight;
    const CONTENT_WIDTH = parseFloat(mapImage.getAttribute('data-content-width'));
    const CONTENT_HEIGHT = parseFloat(mapImage.getAttribute('data-content-height'));
    let MIN_SCALE = calculateMinScale();

    // Target Coordinates (stopovers)
    const STOPOVER_COORDS = {
        "philippines": { 
            x: -800, 
            y: 1500,
            scale: 2.5,
            anecdote: "Rizal secretly left the Philippines." 
        },
        "singapore": { 
            x: -100,
            y: 250,
            scale: 3.0, 
            anecdote: "In Singapore, Rizal was deeply impressed by the botanical gardens and the beauty of the city." 
        },
    };

    // Functions
    function calculateMinScale() {
        return Math.max(VIEWPORT_WIDTH / CONTENT_WIDTH, VIEWPORT_HEIGHT / CONTENT_HEIGHT);
    }

    function clampPosition() {
        const minX = VIEWPORT_WIDTH - (CONTENT_WIDTH * scale);
        const minY = VIEWPORT_HEIGHT - (CONTENT_HEIGHT * scale);
        currentX = Math.min(currentX, 0);
        currentX = Math.max(currentX, minX);
        currentY = Math.min(currentY, 0);
        currentY = Math.max(currentY, minY);
    }

    function updateTransform(useTransition = false) {
        clampPosition();
        content.style.transition = useTransition ? 'transform 0.8s ease-in-out' : 'none';
        content.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;

        if (useTransition) {
            setTimeout(() => content.style.transition = 'none', 900);
        }
    }

    function updateTimeline(locationId) {
        let currentStep = 0;

        timelineList.querySelectorAll('li').forEach(li => {
            const step = parseInt(li.dataset.step);
            li.classList.remove('active-stopover', 'completed-stopover');

            if (li.dataset.location === locationId) {
                li.classList.add('active-stopover');
                currentStep = step;
            }

            if (step < currentStep) {
                li.classList.add('completed-stopover');
            }
        });

        const progressPercentage = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;
        if (progressFill) progressFill.style.width = `${progressPercentage}%`;
    }

    function zoomToLocation(locationId) {
        const target = STOPOVER_COORDS[locationId];
        if (!target) return;

        scale = target.scale;
        currentX = target.x;
        currentY = target.y;

        updateTimeline(locationId);
        updateTransform(true);

        modalTitle.textContent = `Rizal in ${locationId.toUpperCase()}`;
        modalContent.innerHTML = `
            <strong>Historical Note:</strong> ${target.anecdote}
            <br><br>
            <p>Click on interactive elements near this location to learn more!</p>
        `;
        overlay.classList.remove('hidden');
    }

    function resetMapPosition() {
        scale = MIN_SCALE;
        currentX = (VIEWPORT_WIDTH - (CONTENT_WIDTH * scale)) / 2;
        currentY = (VIEWPORT_HEIGHT - (CONTENT_HEIGHT * scale)) / 2;
        updateTransform(false);
        updateTimeline("philippines");
    }

    function initializeMapState() {
        MIN_SCALE = calculateMinScale();
        scale = MIN_SCALE;
        currentX = (VIEWPORT_WIDTH - (CONTENT_WIDTH * scale)) / 2;
        currentY = (VIEWPORT_HEIGHT - (CONTENT_HEIGHT * scale)) / 2;
        updateTransform(true);
        updateTimeline("philippines");
    }

    // Event Listeners

    // Marker Click
    document.getElementById('marker-ph').addEventListener('click', () => {
        zoomToLocation("philippines");
    });
    
    document.getElementById('marker-sg').addEventListener('click', () => {
        zoomToLocation("singapore");
    });

    // Timeline Click
    timelineList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') zoomToLocation(e.target.dataset.location);
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        resetMapPosition();
    });

    // Panning (Dragging)
    let lastX = 0, lastY = 0;
    
    // Trackpad / Mouse Dragging
    const handleDrag = (e) => {
        if (e.touches && e.touches.length === 2) { // Trackpad
            const newX = e.touches[0].clientX - lastX;
            const newY = e.touches[0].clientY - lastY;
            currentX = newX;
            currentY = newY;
            updateTransform(false);
        } else if (e.buttons === 1) { // Mouse Dragging
            const newX = e.clientX - lastX;
            const newY = e.clientY - lastY;
            currentX = newX;
            currentY = newY;
            updateTransform(false);
        }
    };

    const startDrag = (e) => {
        if (e.touches && e.touches.length === 2) { // Trackpad Two-finger start
            lastX = e.touches[0].clientX - currentX;
            lastY = e.touches[0].clientY - currentY;
            isDragging = true;
            viewport.style.cursor = 'grabbing';
        } else if (e.button === 0) { // Mouse Dragging start
            lastX = e.clientX - currentX;
            lastY = e.clientY - currentY;
            isDragging = true;
            viewport.style.cursor = 'grabbing';
        }
    };

    const stopDrag = () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    };

    // Panning Events for Touch and Mouse
    viewport.addEventListener('touchstart', startDrag);
    viewport.addEventListener('touchmove', handleDrag);
    viewport.addEventListener('touchend', stopDrag);
    viewport.addEventListener('mousedown', startDrag);
    viewport.addEventListener('mousemove', handleDrag);
    viewport.addEventListener('mouseup', stopDrag);

    // Zooming (Trackpad and Mouse Wheel)
    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        content.style.transition = 'none';

        const delta = -e.deltaY;
        let newScale = scale + delta * ZOOM_SPEED;
        const newScaleClamped = Math.min(Math.max(MIN_SCALE, newScale), MAX_SCALE);
        if (newScaleClamped === scale) return;

        const rect = viewport.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        const deltaScale = newScaleClamped / scale;

        currentX = (currentX - cursorX) * deltaScale + cursorX;
        currentY = (currentY - cursorY) * deltaScale + cursorY;

        scale = newScaleClamped;
        updateTransform(false);
    });

    // Start at the Philippines, centered and at MIN_SCALE
    initializeMapState();
});
