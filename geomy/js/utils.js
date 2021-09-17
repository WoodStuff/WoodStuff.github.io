// the average of the array numbers
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

// get direction of pointing
function pointing(first, second) { // using scratch workaround code because i suck at math lmao
	let deltax = first.x - second.x;
	let deltay = first.y - second.y;
	if (deltay == 0) {
		if (deltax < 0) {
			return -90;
		}
		else {
			return 90;
		}
	}
	else {
		if (deltay < 0) {
			return 180 + Math.atan(deltax / deltay);
		}
		else {
			return Math.atan(deltax / deltay);
		}
	}
}