// the average of the array numbers
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

// get direction of pointing
function pointing(first, second) {
	let x = first.x - second.x;
	let y = first.y - second.y;
	return (Math.atan2(y, x) / Math.PI * 180);
}

// get distance of 2 points
function distance(first, second) {
	var x = first.x - second.x;
	var y = first.y - second.y;
	return Math.hypot(x, y);
}

// limit
function limit(first, thing, second) {
	return Math.min(Math.max(thing, first), second);
}