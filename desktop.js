var count = 0;
function onLoad() {
	alert("lanching os");
	addListeners();

}

function getTime(type) {
	var d = new Date();
	switch(type){
		case hours:
			return d.getHours();
			break;
		case minutes:
			return d.getMinutes();
			break;
	}
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

// v for dragable windows
var offX;
var offY;


function addListeners() {
	document.querySelector('.myWindowTitle').addEventListener('mousedown', mouseDown, false);
	window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp() {
	window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
	var div = document.querySelector('.myWindow');
	offY = e.clientY - parseInt(div.offsetTop);
	offX = e.clientX - parseInt(div.offsetLeft);
	window.addEventListener('mousemove', divMove, true);
}

function divMove(e) {
	var div = document.querySelector('.myWindow');
	div.style.position = 'absolute';
	div.style.top = (e.clientY - offY) + 'px';
	div.style.left = (e.clientX - offX) + 'px';
}

function mouseGrab(e){
	var value = e.getElementById(this);
	alert(value);
}

function doSomething(id){
	var div = document.querySelector(id);
	offY = e.clientY - parseInt(div.offsetTop);
	offX = e.clientX - parseInt(div.offsetLeft);
}

function openWindow(name) {
		count += 1;
		$("#main").append($('<div class="myWindow"></div>').resizable().draggable()
		.append($('<div class="myWindowTitle" tabindex="'+count+'">'+name+'</div>')
			.append($('<button class="myWindowClose" onClick="$(this).parent().parent().remove()">X</button>')))
		.append($('<div class="myWindowMenu">Menu</div>'))
		.append($('<div class="myWindowContent">Content</div>'))
		.append($('<div class="myWindowStatus">Status</div>'))
		);
}