var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}
var cursorArray = {pClick: [1, 2],
		   names: ["Normal Cursor", "Wooden Cursor"],
		   descs: ["Your average cursor.", "A stronger material for a stronger hit."]}

function increment() {
	points.current += 1;
	points.total += 1;
	if (points.current)
	changeCounters();
	attemptUnlock();
	cpDisable();
}

function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		document.getElementById("cursors").style.display = "block";
		cpDisable();
	}
}

function clickPoint() {
	points.current -= 10;
	clickPoints.current += 1;
	clickPoints.total += 1;
	changeCounters();
	document.getElementById("cpButton").disabled = true;
	document.getElementById("cpButton").innerHTML = "+0";
	clickPoints.onCooldown = true;
	document.getElementById("cpButton").title = "On cooldown";
	setTimeout(function() {
		clickPoints.onCooldown = false;
		document.getElementById("cpButton").disabled = false;
		cpDisable();
	}, 5000)
}

function cpDisable() {
	if (points.current < 10) {
		document.getElementById("cpButton").disabled = true;
		document.getElementById("cpButton").innerHTML = "+0";
		if (!clickPoints.onCooldown) {
			document.getElementById("cpButton").title = "Not enough points";
		}
	}
	else if (!clickPoints.onCooldown) {
		document.getElementById("cpButton").disabled = false;
		document.getElementById("cpButton").innerHTML = "+1";
		document.getElementById("cpButton").title = "Get 1 CP";
	}
}

function changeCounters() {
	document.getElementById("counter").innerHTML = points.current;
	document.getElementById("cpCounter").innerHTML = clickPoints.current;
}
