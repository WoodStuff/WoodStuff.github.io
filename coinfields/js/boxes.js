var openpower = [null, null];

function openPowers(area, id) {
	if (openpower[0] == null && openpower[1] == null) {
		openpower = [area, id];

		el('powermenu').style.display = 'block';
		el('fields').style.width = '85%';
		el('biomebar').style.width = '85%';

		return true;
	}

	openpower = [null, null];

	el('powermenu').style.display = 'none';
	el('fields').style.width = '100%';
	el('biomebar').style.width = '100%';

	return true;
}