var player;
const decimals = ['coins', 'cps'];
const objdecimals = {};
const allobjdec = [];

function start() {
	player = {
		coins: new Decimal(0),
		cps: new Decimal(0),
	};
};

const updateStats = setInterval(() => {
	document.getElementById('coins').innerHTML = formatWhole(player.coins);
}, 50);

const autoSave = setInterval(() => {
	save();
}, 15000);