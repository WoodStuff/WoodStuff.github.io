const rbuButton = document.getElementById('collect-rbu');
const rbuPC = document.getElementById('rbu-per-collect');

function gainRBU() {
	player.rbuDisabled = true;
	player.rbu = player.rbu.add(player.rbuCollect);
}

rbuButton.addEventListener('click', gainRBU);