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

 var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	slidesPerView: 1.5,

	   centeredSlides: true,
	speed: 600,
	   loop: true,


});

function copyEmail() {
	var textarea = document.createElement('textarea');
	textarea.value = 'Ann.desi.d@gmail.com';
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
	alert('Email copied');
}