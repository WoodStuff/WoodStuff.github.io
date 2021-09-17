const spawnerChances = [10]; // chance for an enemy to spawn in every spawner per second
const spawnerEnemies = [[0, 1, 2]]; // enemies that spawn in every spawner by id

const spawnTypes = ['enemy', 'resource', 'xp', 'progress', 'special'];

const limitSpawner = setInterval(() => {
	if (!(player.spawner.content.length > player.spawner.limit)) return;
	player.spawner.content = player.spawner.content.slice(0, player.spawner.limit);
}, 50);

function getEnemy(enemy) {
	if (!enemynames.includes(enemy)) throw new ReferenceError('Enemy does not exist');
	return enemies[enemynames.indexOf(enemy)];
}

function attemptSpawn() {
	if (chance(100 - spawnerChances[player.spawner.level]) || !player.spawner.on) return false;
	
}

function spawnEnemy(number) {
	
}

function addEnemies() {
	
}