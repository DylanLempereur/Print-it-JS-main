const left = document.getElementById("left");
const right = document.getElementById("right");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const slides = document.getElementById("slides")
const tagLine = document.getElementById("tagLine")

let i = 0


//================RIGHT====================


right.addEventListener("click", () => {
	if(i === 0) {
		i++;
	dot2.classList.add("dot_selected")
	dot1.classList.remove("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide2.jpg")
	tagLine.innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
	console.log(i);
}else { 
	if(i === 1) {
		i++;
	dot2.classList.remove("dot_selected")
	dot3.classList.add("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide3.jpg")
	tagLine.innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	console.log(i);
}else { 
	if(i === 2) {
		i++;
	dot4.classList.add("dot_selected")
	dot3.classList.remove("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide4.png")
	tagLine.innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
	console.log(i);
}else { 
	if(i === 3) {
		i++;
	dot4.classList.remove("dot_selected")
    dot1.classList.add("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide1.jpg")
	tagLine.innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>"
}else {
	if(i === 4) {
		i++;
		i = 0;
console.log(i);

	

}}}}}});

 //===============LEFT=======================

 left.addEventListener("click", () => {
	
	if(i === 0) {
		i--;
	dot4.classList.add("dot_selected")
	dot1.classList.remove("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide4.png")
	tagLine.innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>"
	console.log(i);
}else { 
	if(i === -1) {
		i--;
	dot4.classList.remove("dot_selected")
	dot3.classList.add("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide3.jpg")
	tagLine.innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	console.log(i);
}else { 
	if(i === -2) {
		i--;
	dot2.classList.add("dot_selected")
	dot3.classList.remove("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide2.jpg")
	tagLine.innerHTML = "Tirages haute définition grand format <span>pour vos bureaux et events</span>";
	console.log(i);
}else { 
	if(i === -3) {
		i--;
	dot2.classList.remove("dot_selected")
    dot1.classList.add("dot_selected")
	slides.setAttribute("src","./assets/images/slideshow/slide1.jpg")
	tagLine.innerHTML = "Impressions tous formats <span>en boutique et en ligne</span>"
}else {
	if(i === -4) {
		i--;
		i = 0;
console.log(i);

}}}}}});








