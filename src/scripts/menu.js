const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

function onHamburgerClick() {
	if (navLinks) navLinks.classList.toggle('expanded')
}

if (hamburger) {
	hamburger.addEventListener('click', onHamburgerClick)
}

// document.querySelector('.hamburger').addEventListener('click', () => {
// 	document.querySelector('.nav-links').classList.toggle('expanded');
// });
