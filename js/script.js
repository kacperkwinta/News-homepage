"use strict";

const mobileBtn = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".menu-links");
const mobileMenuLinks = document.querySelectorAll("nav a");
const mobileOpenIcon = document.querySelector(".mobile-menu--open");
const mobileCloseIcon = document.querySelector(".mobile-menu--close");
const mobileOverlay = document.querySelector(".overlay");

function toggleMenu() {
	mobileOpenIcon.classList.toggle("hidden");
	mobileCloseIcon.classList.toggle("hidden");
	mobileMenu.classList.toggle("menu-links--active");
	mobileOverlay.classList.toggle("hidden");
}

mobileBtn.addEventListener("click", toggleMenu);

mobileMenuLinks.forEach((mobileMenuLinks) => {
	mobileMenuLinks.addEventListener("click", toggleMenu);
});
