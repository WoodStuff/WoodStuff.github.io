const spawnerChances = [10];
const spawnerEnemies = [];

const spawnTypes = ['enemy', 'resource', 'xp', 'progress', 'special'];

const limitSpawner = setInterval(() => {
	if (!(player.spawner.content.length > player.spawner.limit)) return;
	player.spawner.content = player.spawner.content.slice(0, player.spawner.limit);
}, 50);

function getEnemy(enemy) {
	if (!enemynames.includes(enemy)) throw new Error('Enemy does not exist');
	return enemies[enemynames.indexOf(enemy)];
}

function spawnEnemy(number) {
	
}

function addEnemies() {
	
}