		document.getElementById("menuButton").addEventListener("click", function(event) {
		var menuItems = document.getElementById("menuItems");
		if (menuItems.style.display === "none" || menuItems.style.display === "") {
				menuItems.style.display = "block";
				document.getElementById("menuButton").classList.add("close");
		} else {
				menuItems.style.display = "none";
				document.getElementById("menuButton").classList.remove("close");
		}
		event.stopPropagation();
});

document.addEventListener("click", function(event) {
		var menuItems = document.getElementById("menuItems");
		if (event.target !== menuItems && event.target !== document.getElementById("menuButton")) {
				menuItems.style.display = "none";
				document.getElementById("menuButton").classList.remove("close");
		}
});