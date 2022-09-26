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

// let dropdownMenu = document.getElementById("dropdown-menu");
// let dropdownToggle = document.getElementById("dropdown-toggle");
// function openSubmenu() {
// 	dropdownMenu.classList.toggle("active");
// 	dropdownToggle.classList.toggle("active");
// }

// interaction with dropdown
const navBar = document.getElementById("navbar-nav");
const navDropdown = navBar.querySelectorAll(".nav_item.dropdown");
navDropdown.forEach((element) => {
	let link = element.getElementsByClassName("nav_link")[0];
	let dropdown = element.getElementsByClassName("dropdown_menu")[0];
	let arrow = link.getElementsByClassName("dropdown_toggle")[0];

	link.addEventListener("click", () => {
		// Check all dropdown if it open an close it
		// navDropdown.forEach((elements, index) => {
		// 	let links = elements.getElementsByClassName("nav_link")[0];
		// 	let arrows = links.getElementsByClassName("dropdown_toggle")[0];
		// 	let dropdowns = elements.getElementsByClassName("dropdown_menu")[0];
		// 	if (dropdowns.classList.contains("active")) {
		// 		console.log("element Dropdown " + index + " contain");
		// 		dropdowns.classList.remove("active");
		// 		arrows.classList.remove("active");
		// 	}
		// });

		//open selected dropdown menu and
		dropdown.classList.toggle("active");
		arrow.classList.toggle("active");
	});
});
