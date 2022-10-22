var openpower = [null, null];

function parseClick(area, id) {
	if (BOXES[area][id].unlocked) return openPowers(area, id);
	if (player.coins.gte(BOXES[area][id].cost)) return buyBox(area, id);
}

function buyBox(area, id) {
	if (!player.coins.gte(BOXES[area][id].cost) || BOXES[area][id].unlocked) return false;

	BOXES[area][id].unlocked = true;
	player.coins = player.coins.sub(BOXES[area][id].cost);
	let boxelement = el(`box${id}`);
	boxelement.classList.remove('box-locked');
}

function openPowers(area, id) {
	if (!BOXES[area][id].unlocked) return false;

	if ((openpower[0] == null && openpower[1] == null) || (openpower[0] != area || openpower[1] != id)) { // open the power menu
		openpower = [area, id];

		el('power-title').innerHTML = `${capitalize(area)}: Box ${id.toString()}`;

		el('powermenu').style.display = 'block';
		el('fields').style.width = '85%';
		el('biomebar').style.width = '85%';

		return true;
	}

	// close the power menu
	openpower = [null, null];

	el('powermenu').style.display = 'none';
	el('fields').style.width = '100%';
	el('biomebar').style.width = '100%';

	return true;
}

function closePowers() {
	if ((openpower[0] == null && openpower[1] == null)) return false;

	openpower = [null, null];

	el('powermenu').style.display = 'none';
	el('fields').style.width = '100%';
	el('biomebar').style.width = '100%';

	return true;
}