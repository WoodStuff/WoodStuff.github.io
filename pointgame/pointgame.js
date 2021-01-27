var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}
var curArray = {
		current: 0,
		pClick: [1, 2],
		cost: [3, 4],
		names: ["Normal Cursor", "Wooden Cursor"],
		descs: ["Your average cursor.", "A stronger material for a stronger hit."]
	       }

// give a point
function increment() {
	points.current += curArray.pClick[curArray.current];
	points.total += curArray.pClick[curArray.current];
	
	changeCounters();
	attemptUnlock();
	action();
}

// attempt to unlock features of the game
function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		document.getElementById("cursors").style.display = "block";
		action();
	}
	// vault
	if (points.total > 59 && clickPoints.total > 0) {
		document.getElementById("vault").style.display = "block";
		action();
	}
}

// convert 10 points to 1 click point
function clickPoint() {
	points.current -= 10;
	clickPoints.current += 1;
	clickPoints.total += 1;
	changeCounters();
	document.getElementById("cpButton").disabled = true;
	document.getElementById("cpButton").innerHTML = "+0";
	clickPoints.onCooldown = true;
	document.getElementById("cpButton").title = "On cooldown";
	action();
	setTimeout(function() {
		clickPoints.onCooldown = false;
		document.getElementById("cpButton").disabled = false;
		action();
	}, 5000)
}

// things done on every action
function action() {
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

// change the visual counters
function changeCounters() {
	document.getElementById("counter").innerHTML = points.current;
	document.getElementById("cpCounter").innerHTML = clickPoints.current;
}
