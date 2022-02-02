const startData = {
	energy: new Decimal(200),
	maxenergy: new Decimal(200),
	gems: new Decimal(0),
	items: [],
	worlds: {
		home: new Decimal(1),
		small: new Decimal(0),
		medium: new Decimal(0),
		large: new Decimal(0),
		big: new Decimal(0),
		massive: new Decimal(0),
		huge: new Decimal(0),
		great: new Decimal(0),
		verticalgreat: new Decimal(0),
		wide: new Decimal(0),
		tall: new Decimal(0),
		ultrawide: new Decimal(0),
	},
	membershipTime: {
		golden: new Decimal(0),
		platinum: new Decimal(0),
	},
	campaignsComplete: {},
	inCampaign: false,
	tab: 'shop',
	shoptab: 'featured',
};

var player;
const decimalstats = ['energy', 'maxenergy', 'gems'];
const objdecimals = {};
const allobjdec = ['worlds', 'membershipTime'];

function start() {
	player = startData;
	startUpdateStats();
};


function tick() {
	if (typeof player == 'undefined') return false;

	player.energy = player.energy.add(getEnergyPS().div(20));
	player.energy = Decimal.min(player.energy, player.maxenergy);

	return true;
}
const tickloop = setInterval(tick, 50);


function getEnergyPS() {
	return new Decimal(2);
}

// main stuff
var updateStats;
function startUpdateStats() {
	updateStats = setInterval(() => {
		el('energy').innerHTML = formatWhole(player.energy);
		el('max-energy').innerHTML = formatWhole(player.maxenergy);
		el('energy-ps').innerHTML = `${formatWhole(getEnergyPS())} /s`;
		el('gems').innerHTML = formatWhole(player.gems);
	}, 100);
}

const autoSave = setInterval(() => {
	save();
}, 15000);


function fixStuff() {

}