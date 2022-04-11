var zoneSelected = 0;

const DIFFS = {
	basic: {
		dp: [0, 100],
		color: '#676ab8',
	},
	easy: {
		dp: [101, 500],
		color: '#63c7cc',
	},
	medium: {
		dp: [501, 1500],
		color: '#5fd058',
	},
	challenging: {
		dp: [1501, 3000],
		color: '#ced058',
	},
	hard: {
		dp: [3001, 5000],
		color: '#d05858',
	},
	extreme: {
		dp: [5001, 15000],
		color: '#d05858',
	},
	insane: {
		dp: [15001, 50000],
		color: '#a6469e',
	},
	fargame: {
		dp: [50001, 500000],
		color: '#d4d4d4',
	},
	endgame: {
		dp: [500001, Infinity],
		color: '#353535',
	},
}
const firstZoneButton = document.getElementById('first-zone');
const prevZoneButton = document.getElementById('prev-zone');
const nextZoneButton = document.getElementById('next-zone');
const lastZoneButton = document.getElementById('last-zone');
const selectZoneButton = document.getElementById('select-zone');
const areaInfoButton = document.getElementById('go-to-area-info');

firstZoneButton.addEventListener('click', () => navigateZone('first'));
prevZoneButton.addEventListener('click', () => navigateZone('prev'));
nextZoneButton.addEventListener('click', () => navigateZone('next'));
lastZoneButton.addEventListener('click', () => navigateZone('last'));
selectZoneButton.addEventListener('click', selectArea);
areaInfoButton.addEventListener('click', () => switchTab('area', 'info'));

function navigateZone(direction) {
	switch (direction) {
		case 'first':
			zoneSelected = 0;
			break;

		case 'prev':
			zoneSelected--;
			break;

		case 'next':
			zoneSelected++;
			break;

		case 'last':
			zoneSelected = AREAS.length - 1;
			break;
	
		default:
			break;
	}

	if (zoneSelected < 0) zoneSelected = 0;
	if (zoneSelected > AREAS.length - 1) zoneSelected = AREAS.length - 1;

	document.getElementById('picked-zone').innerHTML = zoneSelected;
	document.getElementById('select-zone').innerHTML = `Go to Zone ${zoneSelected}`;

	return rbSelected;
}

function getDifficulty(dp) {
	for (const d in DIFFS) {
		if (dp >= DIFFS[d].dp[0] && dp <= DIFFS[d].dp[1]) return d;
	}
	return null;
}

function selectArea() {
	switchTab('area', 'select');

	
}