const spawnerChances = [ 0,   35]; // chance for an enemy to spawn in every spawner per second
const spawnerEnemies = [[0], [0, 1, 2]]; // enemies that spawn in every spawner by id
// spawner levels:       0    1

const spawnTypes = ['enemy', 'resource', 'xp', 'progress', 'special']; // the different types of spawns there can be

const breedEnemies = setInterval(() => {
	if (!player.spawner.on) return;
	attemptSpawn();
}, 1000);

const limitSpawner = setInterval(() => {
	if (!(player.spawner.content.length > player.spawner.limit)) return;
	player.spawner.content = player.spawner.content.slice(0, player.spawner.limit);
}, 500);

function toggleSpawner() { // what happens when clicking on top right toggle enemy spawner
	player.spawner.on = !player.spawner.on;
	document.getElementById('toggle-spawn').title = `The spawner is currently ${player.spawner.on ? 'on.' : 'off!'} Click to toggle.`;
}

function getEnemy(enemy) { // enter an enemy name, get its stats
	if (!enemynames.includes(enemy)) throw new ReferenceError('Enemy does not exist');
	return ENEMIES[enemynames.indexOf(enemy)];
}

function attemptSpawn() { // attempt to spawn an enemy, this is the elimination stage with the rng and stuff
	if (chance(100 - spawnerChances[player.spawner.level]) || !player.spawner.on || player.spawner.content.length >= player.spawner.limit || player.inBattle) return false;

	h = []; // the ids collected
	i = []; // the chances to spawn respectively to h
	j = []; // the final array with one numeric id for every chance
	for (val of ENEMIES) {
		if (!val.spawner.level.includes(player.spawner.level)) continue;
		h.push(val.id);
		i.push(val.spawner.chance[val.spawner.level.indexOf(player.spawner.level)]);
		for (time = 0; time < i[h.indexOf(val.id)]; time++) {
			j.push(enemynames.indexOf(val.id));
		}
	}

	let spawned = ENEMIES[randomValue(j)].id;
	spawnEnemy(spawned);
}

function spawnEnemy(id) { // actually spawn the enemies now
	player.spawner.content.push(id);

	// create the visible enemy thingy
	renderEnemy(id);
}

function renderEnemy(id) {
	let enemydiv = document.createElement('div');
	enemydiv.classList.add('enemy', `enemy-${id}`);
	enemydiv.style.left = `${randomNumber(0, 100)}%`;
	enemydiv.style.top = `${randomNumber(0, 100)}%`;
	enemydiv.oncontextmenu = function() {
		cancelEnemy(this.classList[1].slice(6));
		this.remove();
		return false;
	}
	enemydiv.onclick = function() {
		this.remove();
		fightEnemy(this.classList[1].slice(6));
		return false;
	}

	let enemyimg = document.createElement('img');
	enemyimg.src = `media/enemies/${id}.png`;

	enemydiv.appendChild(enemyimg);
	document.getElementById('enemy-field').appendChild(enemydiv);
}

function cancelEnemy(id) {
	let index = player.spawner.content.indexOf(id);
	let original = player.spawner.content;
	if (index > -1) {
		player.spawner.content.splice(index, 1);
	}
	return player.spawner.content != original;
}