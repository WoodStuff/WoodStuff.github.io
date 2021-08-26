var player;
const decimals = ['currency', 'rbu', 'rocks', 'attack', 'hp', 'accy', 'block'];
const objdecimals = {};
const allobjdec = ['xp', 'bars']

function start() {
	player = {
		currency: new Decimal(50),
		xp: {
			level: new Decimal(1),
			current: new Decimal(0),
			max: new Decimal(25),
			total: new Decimal(0),
		},
		attack: new Decimal(2),
		hp: new Decimal(10),
		accy: new Decimal(75),
		block: new Decimal(0),
		rbu: new Decimal(0),
		rocks: new Decimal(0),
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
		spawner: {
			on: false,
			level: 0,
			limit: 3,
			content: [],
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
};

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = formatWhole(player.currency);
	document.getElementById('rbuDisplay').innerHTML = formatWhole(player.rbu);
	player.allbuffs = player.buffs[new Decimal(0)].concat(player.buffs[1], player.buffs[2], player.buffs[3]);
}, 50);

const autoSave = setInterval(() => {
	save();
}, 15000);