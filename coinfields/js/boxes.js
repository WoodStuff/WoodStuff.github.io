var openpower = [null, null];

function openPowers(area, id) {
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
	openpower = [null, null];

	el('powermenu').style.display = 'none';
	el('fields').style.width = '100%';
	el('biomebar').style.width = '100%';

	return true;
}