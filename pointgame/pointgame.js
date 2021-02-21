var points = {current: 0, total: 0}
var clickPoints = {current: 0, total: 0, onCooldown: false}
var curArray = {
		current: 0,
		pClick: [1, 2, 3, 5, 8, 12],
		cost: [0, 3, 5, 10, 20, 50],
		names: ["Normal Cursor", "Wooden Cursor", "Plastic Cursor", "Stone Cursor", "Blue-wooden Cursor", "Copper Cursor"],
		descs: ["Your average cursor.", "A stronger material for a stronger hit.", "The world's waste material.", "Hard enough to do critical hits.", "From very rare islands, this special wood is designed to click.", "Compressed into a cursor so it won't turn green."],
		img: ["normal.png", "wooden.png", "plastic.png", "stone.png", "bluewood.png", ""],
		ability: ["", "", "", "crit", "", ""]
	       }
var vault = {
	fastcp: false,
	maxcp: false
}
document.cookie = "a-pg=true; expires:Sat, 20 Apr 2069 12:00:00 UTC;"
// multiple-use functions

// the rng function, outpts a random number from min to max
function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// hide or show an object      oid to not conflict with id which is probably a property of many objects
// oid: id of the object to toggle visibility      vis: a boolean, true = show      mode: if show, choose block, inline-block or inline, if hide, 0 (many objects are either block or i-b)
function visible(oid, vis, mode) {
	if (vis) {
		document.getElementById(oid).style.display = mode;
	}
	else {
		document.getElementById(oid).style.display = "none";
	}
}

// make a vault item buyable
// oid: id of the div that has the item      rpoints/rcpoints: cost in points/cpoints      reqpoints/reqcpoints/requp: required points/cpoints/upgrade for the upgrade to show up
function newItem(oid, rpoints, rcpoints, reqpoints, reqcpoints, requp) {
	if (document.getElementById(oid).style.display == "none" && vault[oid] == false) {
		if (points.current > reqpoints && clickPoints.current > reqcpoints && (vault[requp] == true || requp == 0)) {
			visible(oid, true, "inline-block")
		}
	}
	if (points.current > (rpoints - 1) && clickPoints.current > (rcpoints - 1)) {
		document.getElementById("b" + oid).disabled = false;
	}
	else {
		document.getElementById("b" + oid).disabled = true;
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
	
	attemptUnlock();
	action();
}

// attempt to unlock features of the game
function attemptUnlock() {
	// cursors
	if (points.total > 14) {
		visible("cursors", true, "block")
		action();
	}
	// vault
	if (points.total > 49 && clickPoints.total > 0) {
		visible("vault", true, "block")
		action();
	}
}

// convert 10 points to 1 cursor point
function clickPoint() {
	points.current -= 10;
	clickPoints.current += 1;
	clickPoints.total += 1;
	changeCounters();
	action();
	if (!vault.fastcp) {
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
	
	attemptUnlock();
	action();
}

// buy a new cursor
function buyCursor() {
	clickPoints.current -= curArray.cost[curArray.current + 1];
	curArray.current += 1;
	document.getElementById("curname").innerHTML = curArray.names[curArray.current];
	document.getElementById("curdesc").innerHTML = curArray.descs[curArray.current];
	
	if (curArray.img[curArray.current] != "") {
		document.getElementById("curimg").src = "img/cursors/" + curArray.img[curArray.current];
	}
	else {
		document.getElementById("curimg").src = "img/cursors/none.png";
	}
	
	document.getElementById("curimg").alt = curArray.names[curArray.current];
	
	if (curArray.cost[curArray.current + 1] != undefined) {
		document.getElementById("cursorShop").innerHTML = `Buy cursor (${curArray.cost[curArray.current + 1]} CP)`;
	}
	else {
		document.getElementById("cursorShop").innerHTML = "Max cursor reached";
	}
	
	document.getElementById("incrementButton").innerHTML = `+${curArray.pClick[curArray.current]}`;
	
	if (curArray.ability[curArray.current] != "") {
		visible("abilityimage", true, "inline")
		if (curArray.ability[curArray.current] == "crit") {
			document.getElementById("abilityimage").title = "Crit\nHas a 10% chance to do a critical hit, doubling the point input.";
		}
	}
	else (
		document.getElementById("abilityimage").style.display = "none"
	)
	action();
}

// buy from the vault
function buy() {
	switch(up) {
		case 1: {
			vault.fastcp = true;
			visible("fastcp", false, 0)
			points.current -= 50;
			clickPoints.current -= 3;
		}
	}
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
	newItem("fastcp", 50, 3);
	newItem("maxcp", 10, 8);
}

// change the visual counters
function changeCounters() {
	document.getElementById("counter").innerHTML = points.current;
	document.getElementById("cpCounter").innerHTML = clickPoints.current;
}
