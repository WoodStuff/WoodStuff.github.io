var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}
var curArray = {
		current: 0,
		pClick: [1, 2],
		cost: [0, 3, 4],
		names: ["Normal Cursor", "Wooden Cursor"],
		descs: ["Your average cursor.", "A stronger material for a stronger hit."],
		img: ["normal.png", "wooden.png"]
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
	if (points.total > 49 && clickPoints.total > 0) {
		document.getElementById("vault").style.display = "block";
		action();
	}
}

// convert 10 points to 1 cursor point
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
	}, 1000)
}

// buy a new cursor
function buyCursor() {
	clickPoints.current -= curArray.cost[curArray.current + 1];
	curArray.current += 1;
	document.getElementById("curname").innerHTML = curArray.names[curArray.current];
	document.getElementById("curdesc").innerHTML = curArray.descs[curArray.current];
	document.getElementById("curimg").src = "img/cursors/" + curArray.img[curArray.current];
	document.getElementById("curimg").alt = curArray.names[curArray.current];
	document.getElementById("cursorShop").innerHTML = `Buy cursor (${curArray.cost[curArray.current + 1]} CP)`;
	document.getElementById("incrementButton").innerHTML = `+${curArray.pClick[curArray.current]}`;
	action();
}
// things done on every action
function action() {
	// disable cp button
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
	
	// update new cursor button
	if (clickPoints.current >= curArray.cost[curArray.current + 1]) {
		document.getElementById("cursorShop").disabled = false;
	}
	else {
		document.getElementById("cursorShop").disabled = true;
	}
	changeCounters();
}

// change the visual counters
function changeCounters() {
	document.getElementById("counter").innerHTML = points.current;
	document.getElementById("cpCounter").innerHTML = clickPoints.current;
}
