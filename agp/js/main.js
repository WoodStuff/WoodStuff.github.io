var player;
const decimals = ['currency', 'rbu',];
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

function load(savefile = 'agpSave') {
	if (localStorage.getItem(savefile) == null) start();
	player = JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem(savefile)))));

	for (const v in player) {// some random af code i dont understand that converts some strings into decimals because json sucks
		if (typeof player[v] != 'object') {
			if (decimals.includes(v)) player[v] = new Decimal(player[v]);
		}
		else {
			if (objdecimals.hasOwnProperty(v) || allobjdec.includes(v)) {
				for (const val in player[v]) {
					if (allobjdec.includes(v)) {
						if (typeof player[v][val] != 'object') player[v][val] = new Decimal(player[v][val]);
						else {
							for (const value in player[v][val]) {
								if (typeof player[v][val][value] == 'string') player[v][val][value] = new Decimal(player[v][val][value]);
							}
						}
					}
					else if (objdecimals[v].includes(val)) player[v][val] = new Decimal(player[v][val]);
				}
			}
		}
	} // its not worth adding comments to it anyway because too much work
	
	switchTab(player.tab);

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
	if (localStorage.getItem(savefile) != null) return load();
	start();
	save(savefile);
	load(savefile);
	return false;
}

const updateStats = setInterval(() => {
	document.getElementById('currencyDisplay').innerHTML = formatWhole(player.currency);
	document.getElementById('rbuDisplay').innerHTML = formatWhole(player.rbu);
	player.allbuffs = player.buffs[new Decimal(0)].concat(player.buffs[1], player.buffs[2], player.buffs[3]);
}, 50);

const autoSave = setInterval(() => {
	//save();
}, 15000);