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

function chapterMenu() {
	document.getElementById("menu").style.display = "none";
	document.getElementById("chapters").style.display = "block";
}

function updateTopbar() {
	document.getElementById("tbcoins").innerHTML = "Coins: " + coins.normal.current + <br /> + "testo"
}
