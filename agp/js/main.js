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
	rbu: {
		current: new Decimal(0),
		collect: new Decimal(15),
		gained: new Decimal(0),
		disabled: false,
		cooldown: 1,
	},
	rocks: new Decimal(0),
	sword: 1,
	shield: 0,
	inBattle: false,
	inArea: false,
	TBA: 1200,
	tilesUnlocked: [
		'enemy',
	],
	items: {},
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
	buffs: [],
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
const decimalstats = ['currency', 'rocks', 'attack', 'maxhp', 'hp', 'accy', 'block'];
const objdecimals = { rbu: ['current', 'collect', 'gained'] };
const allobjdec = ['xp', 'bars', 'items'];

function start() {
	player = startData;
	startUpdateStats();
};


function tick() {
	if (typeof player == 'undefined') return false;

	updateTiles();

	if (player.rbu.cooldown < 1) {
		player.rbu.cooldown = 2;
		player.rbu.disabled = false;
	}
	document.getElementById('collect-rbu').disabled = player.rbu.disabled;

	if (player.battles.won > 0) document.getElementById('spawner-tutorial-thingy').style.display = 'none';

	return true;
}
const tickloop = setInterval(tick, 50);


// main stuff
var updateStats;
function startUpdateStats() {
	updateStats = setInterval(() => {
		document.getElementById('currencyDisplay').innerHTML = formatWhole(player.currency);
		document.getElementById('rbu-counter').innerHTML = document.getElementById('rbuDisplay').innerHTML = formatWhole(player.rbu.current);
		document.getElementById('levelDisplay').innerHTML = formatWhole(player.xp.level);
		document.getElementById('xpDisplay').innerHTML = formatWhole(player.xp.current);
		document.getElementById('maxXpDisplay').innerHTML = formatWhole(player.xp.max);
		document.getElementById('toggle-spawn-img').src = player.spawner.on ? 'media/spawner on.png' : 'media/spawner off.png';
		document.getElementById('rbu-per-collect').innerHTML = player.rbu.collect;

		if (!(player.inBattle || player.inArea)) {
			player.attack = calcstats.attack();
			player.maxhp = calcstats.hp();
			player.hp = calcstats.hp();
			player.accy = calcstats.accy();
			player.block = calcstats.block();
		}

		const counts = document.getElementsByClassName('consumable-count');
		let hovered = '';
		for (const item of document.getElementsByClassName('consumable-item')) {
			if (getItemCount(item.id.slice(4)).eq(0)) item.style.display = 'none';
			else item.style.display = 'block';
			if (!item.matches(':hover')) continue;
			hovered = item.id.slice(4);
			break;
		}
		for (const count of counts) {
			if (hovered == '') {
				count.innerHTML = '';
				continue;
			}
			count.innerHTML = `${getItem(hovered).display}: ${formatWhole(getItemCount(hovered))}`;
		}
	}, 100);
}

const autoSave = setInterval(() => {
	save();
}, 15000);


function fixStuff() {
	if (typeof player.buffs[0] == 'object') player.buffs = [];
	if (player.items == undefined) player.items = {};
}