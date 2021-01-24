var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}

function increment() {
	points.current += 1;
	points.total += 1;
	if (points.current)
	changeCounters();
	attemptUnlock();
}

function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		document.getElementById("cursors").style.display = "block";
	}
}

function clickPoint() {
	points.current -= 10;
	clickPoints.current =+ 1;
	clickPoints.total =+ 1;
	changeCounters();
	document.getElementById("cpButton").disabled = true;
	setTimeout(function() {
		clickPoints.onCooldown = true;
		document.getElementById("cpButton").disabled = false;
	}, 5000)
}

function changeCounters() {
	document.getElementById("counter").innerHTML = points.current;
	document.getElementById("cpCounter").innerHTML = clickPoints.current;
}
