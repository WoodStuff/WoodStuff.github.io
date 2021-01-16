var circle = 3;

function toRight() {
circle = circle + 1;
circlePosition();
}

function toLeft() {
circle = circle - 1;
circlePosition();
}

function circlePosition() {
	if (circle = 1) {
		document.getElementById("leftButton").disabled = true;
		document.getElementById("circleText").innerHTML = '🞄----';
	}
	else {
		document.getElementById("leftButton").disabled = false;
	}
	
	if (circle = 2) {
		document.getElementById("circleText").innerHTML = '-🞄---';
	}
	
	if (circle = 3) {
		document.getElementById("circleText").innerHTML = '--🞄--';
	}
	
	if (circle = 4) {
		document.getElementById("circleText").innerHTML = '---🞄-';
	}
	
	if (circle = 5) {
		document.getElementById("rightButton").disabled = true;
		document.getElementById("circleText").innerHTML = '----🞄';
	}
	else {
		document.getElementById("rightButton").disabled = false;
	}
}
