// ========== CAROUSEL LOGIC ==========
const track = document.getElementById('collegeCarouselTrack');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.getElementById('carouselDots');

let currentIndex = 0;
let visibleCards = 3;
let totalCards = track.children.length;
let cardWidth = 0;
const gap = 20; // match CSS gap

function updateVisibleCards() {
    const width = window.innerWidth;
    if (width <= 600) visibleCards = 1;
    else if (width <= 992) visibleCards = 2;
    else visibleCards = 3;

    const containerWidth = track.parentElement.clientWidth;
    const totalGap = gap * (visibleCards - 1);
    cardWidth = (containerWidth - totalGap) / visibleCards;

    // set fixed width for each card
    Array.from(track.children).forEach(card => {
        card.style.width = `${cardWidth}px`;
    });

    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateCarousel();
    updateDots();
}

function updateCarousel() {
    const shift = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${shift}px)`;
    updateDots();
}

function updateDots() {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    const dotCount = maxIndex + 1;

    dotsContainer.innerHTML = '';
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}

function nextSlide() {
    const maxIndex = Math.max(0, totalCards - visibleCards);
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', () => {
    updateVisibleCards();
    updateCarousel();
});

// Initialize
updateVisibleCards();

// Optional: preserve original card hover effect (already in CSS)
console.log("College Life Carousel Loaded");