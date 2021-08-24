var player = {
	currency: new Decimal(50),
	xp: {
		level: new Decimal(1),
		current: new Decimal(0),
		max: new Decimal(25),
		total: new Decimal(0),
	},
	rbu: new Decimal(0),
	sword: 1,
	shield: 0,
	battles: {
		total: 0,
		won: 0,
		tied: 0,
		lost: 0,
	},
	areas: {
		total: 0,
		won: 0,
		lost: 0,
	},
	spawner: 0,
	buffs: [
		[],
		[],
		[],
		[],
	],
	allbuffs: [],
	tab: 'main',
};

function load(save = 'agpSave') {
	if (localStorage.getItem(save) == null) return false;
	player = JSON.parse(localStorage.getItem(save));
	return true;
}
function save(save = 'agpSave') {
	localStorage.setItem('agpSave', JSON.stringify(player));
	return player;
}
function hardReset(save = 'agpSave') {
	const p = player;
	localStorage.removeItem('agpSave');
	return p;
}

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = player.currency.toString();
	document.getElementById('rbuDisplay').innerHTML = player.rbu.toString();
	player.allbuffs = player.buffs[new Decimal(0)].concat(player.buffs[1], player.buffs[2], player.buffs[3])
}, 100/6);

const autoSave = setInterval(() => {
	save();
}, 15000);