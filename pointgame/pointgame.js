var points = {current: 0, total: 0}

function increment() {
	points.current += 1;
	document.getElementById("counter").innerHTML = points.current;
}
