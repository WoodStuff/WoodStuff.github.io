var player = new Player();
const decimalstats = ['energy', 'maxenergy', 'gems'];
const objdecimals = {};
const allobjdec = ['worlds', 'membershipTime'];

function start() {
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