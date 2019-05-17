var offX;
var offY;

function onLoad() {
	alert("lanching os");
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function openWindow(name) {
	$("#main").append($('<div class="myWindow" tabindex="0"></div>').resizable().draggable()
	.append($('<div class="myWindowTitle" tabindex="0">'+name+'</div>')
		.append($('<button class="myWindowClose" onClick="$(this).parent().parent().remove()">X</button>')))
	.append($('<div class="myWindowMenu">Menu</div>'))
	.append($('<div class="myWindowContent">Content</div>'))
	.append($('<div class="myWindowStatus">Status</div>'))
	);
}