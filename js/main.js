let menuBtn = document.getElementById("nav-collapse-menu"),
	navCollapse = document.getElementById("navbar-collapse"),
	overlay = document.getElementById("overlay");
const element = [navCollapse, overlay];
function openNav() {
	element.forEach((e) => {
		e.classList.add("active");
	});
}

function closeNav() {
	element.forEach((e) => {
		e.classList.remove("active");
	});
}
