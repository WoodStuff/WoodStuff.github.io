function switchTab(tabp = 'main') {
	const tabs = ['main', 'enemy', 'area'];
	const bgs = {
		main: 'main',
		enemy: 'red',
		area: 'orange',
	}
	if (!tabs.includes(tabp)) throw new Error('Cannot switch tab to non-tab');

	for (v in tabs) {
		document.getElementById(tabs[v]).style.display = 'none';
	}
	document.getElementById(tabp).style.display = 'block';
	document.getElementById('bg').src = `media/bg/${bgs[tabp]}.png`;

	player.tab = tabp;

	if (player.tab == 'enemy') addEnemies();
	return player.tab;
};

function chance(ch) {
	return Math.random() < (ch / 100);
}

function countValues(array, value) {
    return array.filter((v) => (v === value)).length;
}

function randomValue(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}