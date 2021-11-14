var playerHP, playerMaxHP, playerATK, playerACCY, playerBLK;
var enemyHP, enemyMaxHP, enemyATK, enemyACCY, enemyBLK;
var battleTurns;
var pastEHP, pastPHP;

function fightEnemy(id) {
	if (!player.spawner.content.includes(id)) return false;

	let index = player.spawner.content.indexOf(id);
	if (index > -1) {
		player.spawner.content.splice(index, 1);
	}

	switchTab('battle');
	player.inBattle = true;

	playerHP = player.hp;
	playerMaxHP = player.maxhp;
	playerATK = player.attack;
	playerACCY = player.accy;
	playerBLK = player.block;

	enemyHP = getEnemy(id).hp;
	enemyMaxHP = getEnemy(id).hp;
	enemyATK = getEnemy(id).atk;
	enemyACCY = getEnemy(id).accy;
	enemyBLK = getEnemy(id).blk;

	document.getElementById('battle-title').innerHTML = `Vs. ${getEnemy(id).name}`;
	document.getElementById('battle-enemy-img').src = `media/enemies/${id}.png`;
	
	updateBattleStats(true);
	document.getElementById('battle-player-decrease').style.transition = '0s';
	document.getElementById('battle-enemy-decrease').style.transition = '0s';
	document.getElementById('battle-player-decrease').style.color = '#00000000';
	document.getElementById('battle-enemy-decrease').style.color = '#00000000';

	battleTurns = setInterval(() => { battleTurn(id) }, 1200);
	return true;
}

function battleTurn(id) {
	if (!player.inBattle) return false;

	pastEHP = enemyHP;
	pastPHP = playerHP;
	enemyHP = enemyHP.sub(Decimal.max(playerATK.sub(enemyBLK), new Decimal(0)));
	playerHP = playerHP.sub(Decimal.max(enemyATK.sub(playerBLK), new Decimal(0)));
	updateBattleStats();

	if (!(enemyHP.lte(0) || playerHP.lte(0))) return; // battle has ended if continues past this

	clearInterval(battleTurns);
	document.getElementById('battle-end').style.display = 'block';

	if (enemyHP.lte(0) && !playerHP.lte(0)) { // win
		console.log('win');
		document.getElementById('battle-result').innerHTML = 'You won!';
	}
	if (enemyHP.lte(0) && playerHP.lte(0)) { // tie
		console.log('tie');
		document.getElementById('battle-result').innerHTML = 'It\'s a tie!';
	}
	if (!enemyHP.lte(0) && playerHP.lte(0)) { // loss
		console.log('loss');
		document.getElementById('battle-result').innerHTML = `${getEnemy(id).name} won!`;
	}
	
}

function updateBattleStats(first = false) {
	document.getElementById('battle-player-hp').innerHTML = `${format(playerHP)}/${format(playerMaxHP)} HP`;
	document.getElementById('battle-player-atk').innerHTML = `${format(playerATK)} ATK`;
	document.getElementById('battle-player-accy').innerHTML = `${format(playerACCY)} ACCY`;
	document.getElementById('battle-player-blk').innerHTML = `${format(playerBLK)} BLK`;

	document.getElementById('battle-enemy-hp').innerHTML = `${format(enemyHP)}/${format(enemyMaxHP)} HP`;
	document.getElementById('battle-enemy-atk').innerHTML = `${format(enemyATK)} ATK`;
	document.getElementById('battle-enemy-accy').innerHTML = `${format(enemyACCY)} ACCY`;
	document.getElementById('battle-enemy-blk').innerHTML = `${format(enemyBLK)} BLK`;

	if (first) return true;
	document.getElementById('battle-player-decrease').innerHTML = `-${pastPHP - playerHP}`;
	document.getElementById('battle-enemy-decrease').innerHTML = `-${pastEHP - enemyHP}`;
	document.getElementById('battle-player-decrease').style.color = '#790000';
	document.getElementById('battle-enemy-decrease').style.color = '#790000';
	setTimeout(decreaseStuff, 1);
	return true;
}

function decreaseStuff() {
	document.getElementById('battle-player-decrease').style.transition = '0.8s';
	document.getElementById('battle-enemy-decrease').style.transition = '0.8s';
	document.getElementById('battle-player-decrease').style.color = '#00000000';
	document.getElementById('battle-enemy-decrease').style.color = '#00000000';
	setTimeout(() => {
		document.getElementById('battle-player-decrease').style.transition = '0s';
		document.getElementById('battle-enemy-decrease').style.transition = '0s';
	}, 501)
	return true;
}

function forfeitFight() {
	switchTab('enemy');
	player.inBattle = false;
	document.getElementById('battle-end').style.display = 'none';
}