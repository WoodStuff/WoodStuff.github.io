var player;
const decimals = ['coins', 'cps'];
const objdecimals = {};
const allobjdec = [];

function start() {
	player = {
		coins: new Decimal(5),
		cps: new Decimal(0),
		settings: {
			autoSave: true,
			autoSaveDuration: 15,
		},
	};
};

function updateCps() {
	cps = new Decimal(0);
	return cps;
}

const updateStats = setInterval(() => {
	player.cps = updateCps();
	player.coins = player.coins.add(player.cps.times(0.05));

	el('coins').innerHTML = formatWhole(player.coins);
	el('cps').innerHTML = formatWhole(player.cps);
}, 50);

const updateTitle = setInterval(() => {
	document.title = `${player.coins} coins | Coin Fields`;
}, 5000);

function autoSave() {
	if (player.settings.autoSave) save();
	setTimeout(autoSave, player.settings.autoSaveDuration);
}



function el(element) {
	return document.getElementById(element);
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}