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

const $ = selector => document.querySelector(selector);

let startX, endX;

const list = $(".list");
const swipeZone = $(".swipe");

function next() {
    if ($(".hide")) {
        $(".hide").remove();
    }

    if ($(".prev")) {
        $(".prev").classList.add("hide");
        $(".prev").classList.remove("prev");
    }

    $(".act").classList.add("prev");
    $(".act").classList.remove("act");

    $(".next").classList.add("act");
    $(".next").classList.remove("next");

    $(".new-next").classList.remove("new-next");

    const addedEl = document.createElement('li');
    addedEl.innerHTML = '<img src="3.png" alt="">'; // Assurez-vous que le chemin de l'image est correct
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next", "new-next");
}

function prev() {
    $(".new-next").remove();

    $(".next").classList.add("new-next");

    $(".act").classList.add("next");
    $(".act").classList.remove("act");

    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");

    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");

    const addedEl = document.createElement('li');
    addedEl.innerHTML = '<img src="1.png" alt="">'; // Assurez-vous que le chemin de l'image est correct
    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
}

const slide = element => {
    if (element.classList.contains('next')) {
        next();
    } else if (element.classList.contains('prev')) {
        prev();
    }
}

list.onclick = event => {
    slide(event.target.closest('li')); // Utilise closest pour s'assurer que le clic est sur un <li>
}

swipeZone.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX;
});

swipeZone.addEventListener('touchmove', event => {
    endX = event.touches[0].clientX;
});

swipeZone.addEventListener('touchend', () => {
    if (startX - endX > 100) {
        next();
    } else if (startX - endX < -100) {
        prev();
    }
});






