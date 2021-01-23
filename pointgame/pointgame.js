var points = {current: 0, total: 0}

function increment() {
	points.current += 1;
	points.total += 1;
	document.getElementById("counter").innerHTML = points.current;
	attemptUnlock();
}

function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		document.getElementById("cursors").style.display = "block";
	}
}
