const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu");

function toggleHandler() {
	menu.classList.toggle("hidden");
	cross.classList.toggle("hidden");
	hamburger.classList.toggle("hidden");
}
