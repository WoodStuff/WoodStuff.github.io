function switchTab(tabp = 'main', subtab = 'main') {
	const tabs = ['main', 'enemy', 'area', 'shop', 'rbu'];
	const bgs = {
		main: 'main',
		enemy: 'red',
		area: 'orange',
		shop: 'yellow',
		rbu: 'purple',
	}
	if (!tabs.includes(tabp)) throw new Error('Cannot switch tab to non-tab');

	for (const v in tabs) {
		for (const s of document.getElementById(tabs[v]).children) {
			s.style.display = 'none';
		}
		document.getElementById(tabs[v]).style.display = 'none';
	}
	document.getElementById(`${tabp}-${subtab}`).style.display = 'block';
	document.getElementById(`${tabp}`).style.display = 'block';
	document.getElementById('bg').src = `media/bg/${bgs[tabp]}.png`;

	player.tab = tabp;

	if (tabp == 'shop') generateShopItems();

	return player.tab;
};

function clickTile(tile) {
	if (!player.tilesUnlocked.includes(tile)) return false;
	switchTab(tile);
}

function addXP(amount) {
	player.xp.current = player.xp.current.add(amount);
	player.xp.total = player.xp.total.add(amount);
	if (player.xp.current.gte(player.xp.max)) {
		do {
			player.xp.current = player.xp.current.sub(player.xp.max);
			let temp = player.xp.max;
			player.xp.level = player.xp.level.plus(1);
			player.xp.max = player.xp.max.add(25);
			if (player.xp.max.eq(temp)) {
				player.xp.max = player.xp.max.times(25);
			}
		} while (player.xp.current.gte(player.xp.max));
	}
}

function addRBU(amount) {
	player.rbu.current = player.rbu.current.add(amount);
}

function updateTiles() {
	tiles = ['enemy'];
	if (player.battles.won > 0) tiles.push('area', 'shop', 'rbu');

	player.tilesUnlocked = tiles;

	for (const tile of document.getElementsByClassName('tile')) {
		const unlocked = player.tilesUnlocked.includes(tile.id.slice(5));
		tile.classList.remove('tile-locked');
		if (!unlocked) tile.classList.add('tile-locked');
	}
}

function hasBuff(buff) {
	return player.buffs.includes(buff);
}

function getBuffStats() {
	let stats = {
		atk: d(0), hp: d(0), accy: d(0), blk: d(0),
	}
	if ((!player.buffs.length == 0 || typeof player == 'undefined')) {
		for (const buff of player.buffs) {
			stats.atk = stats.atk.add(BUFFS[buff].atk);
			stats.hp = stats.hp.add(BUFFS[buff].hp);
			stats.accy = stats.accy.add(BUFFS[buff].accy);
			stats.blk = stats.blk.add(BUFFS[buff].blk);
		}
	}
	return stats;
}

function spawnerMaxed() {
	return player.spawner.content.length >= player.spawner.limit;
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

function removeValue(array, value) {
	var index = array.indexOf(value);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}

function el(e) {
	return document.getElementById(e);
}