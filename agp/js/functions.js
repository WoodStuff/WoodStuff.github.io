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