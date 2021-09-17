// the average of the array numbers
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

// get direction of pointing
function pointing(first, second) { // using scratch workaround code because i suck at math lmao
	let x = first.x - second.x;
	let y = first.y - second.y;
	return Math.atan2(y, x) / Math.PI * 180;
}