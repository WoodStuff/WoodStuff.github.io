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

function updateCps() {
	cps = new Decimal(1);
	return cps;
}

const updateStats = setInterval(() => {
	player.cps = updateCps();
	player.coins = player.coins.add(player.cps.times(0.05));

	document.getElementById('coins').innerHTML = formatWhole(player.coins);
	document.getElementById('cps').innerHTML = formatWhole(player.cps);
}, 50);

const autoSave = setInterval(() => {
	save();
}, 15000);