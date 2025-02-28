const nav = document.getElementById("nav");

// Ajoute une classe au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // Seuil de 100px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


function toggleButton(button) {
    if (button.classList.contains('expanded')) {
        // Réduire le bouton
        button.classList.remove('expanded');
    } else {
        // Agrandir le bouton
        button.classList.add('expanded');
    }
}
