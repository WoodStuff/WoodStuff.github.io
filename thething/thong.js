var level = {
	current: {
		xp: 0,
		level: 0,
	},
	req: [50, 100]
}

var coins = {
	normal: {
		current: 50,
		total: 50,
	}
}

var player = {
	hp: 20,
	damage: 3,
	speed: 750,
}
var enemies = {
	angletri: {
		id: 1,
		name: "Angletri",
		hp: 6,
		damage: 3,
		speed: 800,
	}
}

function chapterMenu() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("chapters").style.display = "block";
}
function chapter(ch) {
	document.getElementById("chapters").style.display = "none";
	document.getElemenyById("chapter" + ch).style.display = "block";
}

function updateTopbar() {
	document.getElementById("tbcoins").innerHTML = "Coins: " + coins.normal.current + "<br />" + "testo"
}
