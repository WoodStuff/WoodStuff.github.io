var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}
var curArray = {
		current: 0,
		pClick: [1, 2, 3, 5],
		cost: [0, 3, 4, 10],
		names: ["Normal Cursor", "Wooden Cursor", "Plastic Cursor", "Stone Cursor"],
		descs: ["Your average cursor.", "A stronger material for a stronger hit.", "The world's waste material.", "Hard enough to do critical hits."],
		img: ["normal.png", "wooden.png", "plastic.png", "stone.png"],
		ability: ["", "", "", "crit"]
	       }

// the rng function, outpts a random number from min to max
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// hide or show an object           oid to not conflict with id which is probably a property of many objects
// vis: a boolean, true = show      oid: id of the object to toggle visibility      mode: if show, choose block, inline-block or inline, if hide, 0 (many objects are either block or i-b)
function visible(vis, oid, mode) {
	if (vis) {
		document.getElementById(oid).style.display = mode;
	}
	else {
		document.getElementById(oid).style.display = "none";
	}
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// give a point
function increment() {
	var pointsGained = curArray.pClick[curArray.current];
	if (curArray.ability[curArray.current] == "crit") {
		if (rng(1, 20) == 14) {
			pointsGained = pointsGained * 2;
		}
	} 
	points.current += pointsGained;
	points.total += pointsGained;
	
	changeCounters();
	attemptUnlock();
	action();
}

// attempt to unlock features of the game
function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		visible(true, "cursors", "block")
		action();
	}
	// vault
	if (points.total > 49 && clickPoints.total > 0) {
		visible(true, "vault", "block")
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
	if (curArray.ability[curArray.current] != "") {
		document.getElementById("abilityimage").style.display = "inline"
		if (curArray.ability[curArray.current] == "crit") {
			document.getElementById("abilityimage").title = "Crit\nHas a 10% chance to do a critical hit, doubling the point input.";
		}
	}
	else (
		document.getElementById("abilityimage").style.display = "none"
	)
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
