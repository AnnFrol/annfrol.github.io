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
	// Создаем элемент textarea для временного хранения текста
	var textarea = document.createElement('textarea');
	// Устанавливаем значение элемента textarea как email адрес
	textarea.value = 'Ann.desi.d@gmail.com';
	// Добавляем элемент textarea на страницу
	document.body.appendChild(textarea);
	// Выделяем текст в textarea
	textarea.select();
	// Копируем выделенный текст в буфер обмена
	document.execCommand('copy');
	// Удаляем элемент textarea с страницы
	document.body.removeChild(textarea);
	// Показываем всплывающее уведомление
	alert('Email скопирован в буфер обмена');
}