document.addEventListener("DOMContentLoaded", () => {
    const tabButton1 = document.getElementById("tab-button1");
    const tabButton2 = document.getElementById("tab-button2");
    const tabHighlight = document.getElementById("tab-button-highlight");
    const tabHighlight2 = document.getElementById("token-container");

    tabButton1.addEventListener("click", () => {
        tabHighlight.classList.remove("swipe");
        tabHighlight2.classList.remove("swiper");
    });
    tabButton2.addEventListener("click", () => {
        tabHighlight.classList.add("swipe");
        tabHighlight2.classList.add("swiper");
    });
});


const body = document.querySelector("body");
const hamburger = document.getElementById('hamburger');
const hamburger2 = document.getElementById("close");
hamburger2.addEventListener("click", () => {
    body.classList.toggle("active");
});
hamburger.addEventListener("click", ()=>{
    body.classList.toggle('active');
})

function copyToClipboard() {
    var copyText = document.getElementById("textToCopy");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("Unable to copy text to clipboard", err);
        alert("Unable to copy text to clipboard. Please try manually.");
    }
}

const container = document.querySelector(".card-container");
const cards = Array.from(document.querySelectorAll(".card"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

let currentCardIndex = 0;
const totalCards = cards.length;

// Scroll smoothly to center the card at index
function scrollToCard(index) {
    const card = cards[index];
    if (!card) return;
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const containerScrollLeft = container.scrollLeft;

    // Calculate the offset to center the card in the container
    const offset =
        cardRect.left -
        containerRect.left -
        containerRect.width / 2 +
        cardRect.width / 2;

    container.scrollTo({
        left: containerScrollLeft + offset,
        behavior: "smooth",
    });
}

// Update progress bar based on currentCardIndex
function updateProgressBar() {
    const progressPercent = ((currentCardIndex + 1) / totalCards) * 100;
    progress.style.width = `${progressPercent}%`;

    const progressWrapper = document.querySelector(".progress-wrapper");
    const dot = document.getElementById("progress-dot");

    const wrapperWidth = progressWrapper.clientWidth;
    const dotLeft = (progressPercent / 100) * wrapperWidth;

    dot.style.left = `${dotLeft}px`;
}


// Handle click on Prev button
prevBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    scrollToCard(currentCardIndex);
    updateProgressBar();
});

// Handle click on Next button
nextBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    scrollToCard(currentCardIndex);
    updateProgressBar();
});

// Initialize progress bar and scroll position on page load
window.addEventListener("load", () => {
    scrollToCard(currentCardIndex);
    updateProgressBar();
});

// Auto-scroll functionality every 300ms with looping
let autoScrollIndex = 0;
let autoScrollInterval;

function autoScrollCards() {
    scrollToCard(autoScrollIndex);
    currentCardIndex = autoScrollIndex;
    updateProgressBar();

    autoScrollIndex++;
    if (autoScrollIndex >= totalCards) {
        autoScrollIndex = 0;
    }
}

// Start auto scroll interval
function startAutoScroll() {
    autoScrollInterval = setInterval(autoScrollCards, 3000);
}

// Stop auto scroll interval
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Start auto scroll when page loads
window.addEventListener("load", () => {
    startAutoScroll();
});

// Pause auto scroll on user interaction (hover over container or buttons)
container.addEventListener("mouseenter", stopAutoScroll);
container.addEventListener("mouseleave", startAutoScroll);
prevBtn.addEventListener("mouseenter", stopAutoScroll);
prevBtn.addEventListener("mouseleave", startAutoScroll);
nextBtn.addEventListener("mouseenter", stopAutoScroll);
nextBtn.addEventListener("mouseleave", startAutoScroll);

