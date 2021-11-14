function switchTab(tabp = 'main') {
	const tabs = ['main', 'enemy', 'area', 'battle'];
	const bgs = {
		main: 'main',
		enemy: 'red',
		area: 'orange',
		battle: 'red',
	}
	if (!tabs.includes(tabp)) throw new Error('Cannot switch tab to non-tab');

	for (v in tabs) {
		document.getElementById(tabs[v]).style.display = 'none';
	}
	document.getElementById(tabp).style.display = 'block';
	document.getElementById('bg').src = `media/bg/${bgs[tabp]}.png`;

	player.tab = tabp;

	return player.tab;
};

function addXP(amount) {
	player.xp.current = player.xp.current.add(amount);
	player.xp.total = player.xp.total.add(amount);
	if (player.xp.current.gte(player.xp.max)) {
		do {
			player.xp.current = player.xp.current.sub(player.xp.max);
			let temp = player.xp.max;
			player.xp.max = player.xp.max.add(25);
			if (player.xp.max.eq(temp)) {
				player.xp.max = player.xp.max.times(25);
			}
		} while (player.xp.current.gte(player.xp.max));
	}
}

// utility
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