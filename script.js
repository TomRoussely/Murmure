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

const textarea = document.getElementById("modernTextarea");

        // Changer la couleur de la bordure en tapant
        textarea.addEventListener("input", () => {
            let colors = ["#00c8ff", "#ff00c8", "#00ff88", "#ffc800"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            textarea.style.borderColor = randomColor;
            textarea.style.boxShadow = `0 0 20px ${randomColor}`;
        });




  
