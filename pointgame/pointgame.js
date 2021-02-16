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

// var autoSave = setInterval(save, 10000)

// set a cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get a cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/* if (getCookie("pg_played") != "Hi.") {
	setCookie("pg_played", "Hi.");
	setCookie("pg_points", 0);
} */

// the rng function, outpts a random number from min to max
function rng(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min) ) + min;
}

function save() {
	
}

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
