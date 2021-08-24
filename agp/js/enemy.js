const spawnerEhances = [10];
const spawnerEnemies = [];

function getEnemy(enemy) {
	if (!enemynames.includes(enemy)) throw new Error('Enemy does not exist');
	return enemies[enemynames.indexOf(enemy)];
}

function spawnEnemy(number) {
	
}