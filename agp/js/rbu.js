const rbuButton = document.getElementById('collect-rbu');
const rbShopButton = document.getElementById('buy-rbs');
const rbuPC = document.getElementById('rbu-per-collect');

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