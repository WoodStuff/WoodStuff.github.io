var rbSelected = 1;

const rbuButton = document.getElementById('collect-rbu');
const rbShopButton = document.getElementById('buy-rbs');
const rbuPC = document.getElementById('rbu-per-collect');
const buyRBButton = document.getElementById('buy-rb');

function gainRBU() {
	player.rbu.disabled = true;
	player.rbu.cooldown = 2;
	addRBU(player.rbu.collect);
}

function openRBShop() {
	switchTab('rbu', 'rbshop');
}

rbuButton.addEventListener('click', gainRBU);
rbShopButton.addEventListener('click', openRBShop);
buyRBButton.addEventListener('click', buyRB);

function navigateRB(direction) {
	switch (direction) {
		case 'first':
			rbSelected = 1;
			break;

		case 'prev':
			rbSelected--;
			break;

		case 'next':
			rbSelected++;
			break;

		case 'last':
			rbSelected = RBS.length - 1;
			break;
	
		default:
			break;
	}

	if (rbSelected < 1) rbSelected = 1;
	if (rbSelected > RBS.length - 1) rbSelected = RBS.length - 1;

	document.getElementById('selected-rb').style.backgroundImage = `url(media/rbs/${rbSelected}.png)`;
	document.getElementById('rb-cost').innerHTML = formatWhole(RBS[rbSelected].cost);

	return rbSelected;
}

const firstRbButton = document.getElementById('first-rb');
const prevRbButton = document.getElementById('prev-rb');
const nextRbButton = document.getElementById('next-rb');
const lastRbButton = document.getElementById('last-rb');

firstRbButton.addEventListener('click', () => navigateRB('first'));
prevRbButton.addEventListener('click', () => navigateRB('prev'));
nextRbButton.addEventListener('click', () => navigateRB('next'));
lastRbButton.addEventListener('click', () => navigateRB('last'));

const bonusBox = document.getElementById('bonuses');
function buyRB() {
	if (player.rbu.current.lt(RBS[rbSelected].cost)) return false;
	player.rbu.current = player.rbu.current.minus(RBS[rbSelected].cost);

	switchTab('rbu', 'select');

	let pool = buffnames[rbSelected].slice();

	let i = 0;
	while (i < RBS[rbSelected].buffs) {
		let buff = document.createElement('div');
		let selectedBuffId = randomValue(pool);
		let selectedBuff = BUFFS[selectedBuffId];

		buff.classList.add('buff', `buff-${selectedBuffId}`);
		buff.title = selectedBuff.effect;
		buff.onclick = function() {
			pickBuff(this.classList[1].slice(5));
			return false;
		}
		console.log(selectedBuff.name);
		i++;
		removeValue(pool, selectedBuffId)

		let buffimg = document.createElement('img');
		buffimg.classList.add('buffimg', `buffimg-${selectedBuffId}`);
		buffimg.src = `media/buffs/${selectedBuffId}.png`;

		buff.appendChild(buffimg);
		bonusBox.appendChild(buff);
	}

	return;
}

function pickBuff(buff) {
	console.log(buff);
	while (bonusBox.firstChild) {
		bonusBox.removeChild(bonusBox.lastChild);
	}
	document.getElementById('picked-buff').style.display = 'block';
	document.getElementById('select-rb-back').style.display = 'block';

	if (!hasBuff(buff)) {
		player.buffs.push(buff);
	}

	document.getElementById('pbuff-name').innerHTML = BUFFS[buff].name;
	document.getElementById('pbuff-img').src = `media/buffs/${buff}.png`;
	document.getElementById('pbuff-effect').innerHTML = BUFFS[buff].effect;
}

document.getElementById('select-rb-back').addEventListener('click', () => {
	document.getElementById('picked-buff').style.display = 'none';
	document.getElementById('select-rb-back').style.display = 'none';
});