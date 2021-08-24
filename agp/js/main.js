var player;
const decimals = ['currency', 'rbu',];
const objdecimals = {
	xp: ['level', 'current', 'max', 'total'],
};

function start() {
	player = {
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
}

function load(savefile = 'agpSave') {
	if (localStorage.getItem(savefile) == null) start();
	player = JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem(savefile)))));

	for (const v in player) {
		if (typeof player[v] != 'object') {
			if (decimals.includes(v)) player[v] = new Decimal(player[v]);
		}
		else {
			if (objdecimals.hasOwnProperty(v)) {
				for (const val in player[v]) {
					if (objdecimals[v].includes(val)) player[v][val] = new Decimal(player[v][val]);
				}
			}
		}
	}

	return true;
}
function save(savefile = 'agpSave') {
	localStorage.setItem(savefile, btoa(unescape(encodeURIComponent(JSON.stringify(player)))));
	return player;
}
function hardReset(savefile = 'agpSave') {
	if (!confirm('Are you sure you want to hard reset? There is no going back!')) return false;
	const p = player;
	localStorage.removeItem(savefile);
	location.reload();
	return p;
}
function firststart(savefile = 'agpSave') {
	start();
	save(savefile);
	load(savefile);
}

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = player.currency.toString();
	document.getElementById('rbuDisplay').innerHTML = player.rbu.toString();
	player.allbuffs = player.buffs[new Decimal(0)].concat(player.buffs[1], player.buffs[2], player.buffs[3])
}, 100/6);

const autoSave = setInterval(() => {
	save();
}, 15000);