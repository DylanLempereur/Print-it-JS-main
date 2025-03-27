const slidesData = [
    {
        image: "./assets/images/slideshow/slide1.jpg",
        description: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    { 
        image: "./assets/images/slideshow/slide2.jpg",
        description: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {   
        image: "./assets/images/slideshow/slide3.jpg",
        description: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "./assets/images/slideshow/slide4.png",
        description: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const left = document.getElementById("left");
const right = document.getElementById("right");
const slides = document.getElementById("slides");
const tagLine = document.getElementById("tagLine");
const dotsContainer = document.getElementById("dots-container"); 

let currentIndex = 0;

function createDots() {
    slidesData.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("dot_selected"); 
        dot.dataset.index = index;
        dot.addEventListener("click", () => updateSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateSlide(index) {
    currentIndex = (index + slidesData.length) % slidesData.length; 
    slides.setAttribute("src", slidesData[currentIndex].image);
    tagLine.innerHTML = slidesData[currentIndex].description;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === currentIndex);
    });
}

right.addEventListener("click", () => updateSlide(currentIndex + 1));
left.addEventListener("click", () => updateSlide(currentIndex - 1));

createDots();
updateSlide(currentIndex);
