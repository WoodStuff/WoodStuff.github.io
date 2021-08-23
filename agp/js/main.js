var player = {
	currency: 50,
	level: 1,
	xp: {
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
};

var tab = 'main';

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = player.currency.toString();
	document.getElementById('rbuDisplay').innerHTML = player.rbu.toString();
}, 100/6);