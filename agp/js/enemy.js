const spawnerChances = [10];
const spawnerEnemies = [];

const spawnTypes = ['enemy', 'resource', 'xp', 'progress', 'special']

function getEnemy(enemy) {
	if (!enemynames.includes(enemy)) throw new Error('Enemy does not exist');
	return enemies[enemynames.indexOf(enemy)];
}

function spawnEnemy(number) {
	
}

function addEnemies() {
	
}