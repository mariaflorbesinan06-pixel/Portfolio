console.log("Certificates Loaded");

const cards = document.querySelectorAll(".certificate-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img").src;
        window.open(img, "_blank");
    });
});