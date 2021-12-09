const startData = {
	currency: new Decimal(50),
	xp: {
		level: new Decimal(1),
		current: new Decimal(0),
		max: new Decimal(25),
		total: new Decimal(0),
	},
	attack: new Decimal(2),
	maxhp: new Decimal(10),
	hp: new Decimal(10),
	accy: new Decimal(75),
	block: new Decimal(0),
	rbu: new Decimal(0),
	rbuCollect: new Decimal(15),
	rbuDisabled: false,
	rocks: new Decimal(0),
	sword: 1,
	shield: 0,
	inBattle: false,
	TBA: 1200,
	tilesUnlocked: [
		'enemy',
	],
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
	spawner: {
		on: false,
		level: 1,
		limit: 3,
		content: [],
		bestlevel: 1,
	},
	buffs: [
		[],
		[],
		[],
		[],
	],
	allbuffs: [],
	bars: {
		basic: {
			progress: new Decimal(0),
			max: new Decimal(6),
			activated: new Decimal(0),
		},
	},
	tab: 'main',
};

var player;
const decimals = ['currency', 'rbu', 'rocks', 'attack', 'maxhp', 'hp', 'accy', 'block'];
const objdecimals = {};
const allobjdec = ['xp', 'bars'];

function start() {
	player = startData;
	startUpdateStats();
};


function tick() {
	updateTiles();

	document.getElementById('collect-rbu').disabled = player.rbuDisabled;

	return true;
}
const tickloop = setInterval(tick, 50);


// main stuff
var updateStats;
function startUpdateStats() {
	updateStats = setInterval(() => {
		document.getElementById('currencyDisplay').innerHTML = formatWhole(player.currency);
		document.getElementById('rbu-counter').innerHTML = document.getElementById('rbuDisplay').innerHTML = formatWhole(player.rbu);
		document.getElementById('levelDisplay').innerHTML = formatWhole(player.xp.level);
		document.getElementById('xpDisplay').innerHTML = formatWhole(player.xp.current);
		document.getElementById('maxXpDisplay').innerHTML = formatWhole(player.xp.max);
		player.allbuffs = player.buffs[new Decimal(0)].concat(player.buffs[1], player.buffs[2], player.buffs[3]);
		document.getElementById('toggle-spawn-img').src = player.spawner.on ? 'media/spawner on.png' : 'media/spawner off.png';
		document.getElementById('rbu-per-collect').innerHTML = player.rbuCollect;
	}, 100);
}

const autoSave = setInterval(() => {
	save();
}, 15000);