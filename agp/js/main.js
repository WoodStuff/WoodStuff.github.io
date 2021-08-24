var player = {
	currency: 50,
	xp: {
		level: 1,
		current: 0,
		max: 25,
		total: 0,
	},
	rbu: 0,
	sword: 1,
	shield: 0,
	battles: {
		total: 0,
		won: 0,
		tied: 0,
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
};

var tab = 'main';

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = player.currency.toString();
	document.getElementById('rbuDisplay').innerHTML = player.rbu.toString();
	player.allbuffs = player.buffs[0].concat(player.buffs[1].concat(player.buffs[2].concat(player.buffs[3])))
}, 100/6);