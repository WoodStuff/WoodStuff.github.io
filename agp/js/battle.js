function fightEnemy(id) {
	if (!player.spawner.content.includes(id)) return false;

	let index = player.spawner.content.indexOf(id);
	if (index > -1) {
		player.spawner.content.splice(index, 1);
	}

	switchTab('battle');
	player.inBattle = true;

	document.getElementById('battle-title').innerHTML = `Vs. ${getEnemy(id).name}`;
	document.getElementById('battle-enemy-img').src = `media/enemies/${id}.png`;
}

function forfeitFight() {
	switchTab('enemy');
	player.inBattle = false;
}