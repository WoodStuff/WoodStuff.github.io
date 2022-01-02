var rbSelected = 1;

const rbuButton = document.getElementById('collect-rbu');
const rbShopButton = document.getElementById('buy-rbs');
const rbuPC = document.getElementById('rbu-per-collect');
const buyRBButton = document.getElementById('buy-rb');

function gainRBU() {
	player.rbu.disabled = true;
	player.rbu.cooldown = 2;
	player.rbu.current = player.rbu.current.add(player.rbu.collect);
}

function openRBShop() {
	switchTab('rbshop');
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
	document.getElementById('rb-cost').innerHTML = RBS[rbSelected].cost;

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

function buyRB() {
	return;
}