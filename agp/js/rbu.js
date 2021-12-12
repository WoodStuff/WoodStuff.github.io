const rbuButton = document.getElementById('collect-rbu');
const rbuPC = document.getElementById('rbu-per-collect');

function gainRBU() {
	player.rbu.disabled = true;
	player.rbu.current = player.rbu.current.add(player.rbu.collect);
}

rbuButton.addEventListener('click', gainRBU);