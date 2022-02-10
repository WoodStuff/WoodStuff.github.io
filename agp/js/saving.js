function load(savefile = 'agpSave') {
	if (localStorage.getItem(savefile) == null) start();
	player = JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem(savefile)))));

	for (const v in player) {// some random af code i dont understand that converts some strings into decimals because json sucks
		if (typeof player[v] != 'object') {
			if (decimalstats.includes(v)) player[v] = new Decimal(player[v]);
		}
		else {
			if (objdecimals.hasOwnProperty(v) || allobjdec.includes(v)) {
				for (const val in player[v]) {
					if (allobjdec.includes(v)) {
						if (typeof player[v][val] != 'object') player[v][val] = new Decimal(player[v][val]);
						else {
							for (const value in player[v][val]) {
								if (typeof player[v][val][value] == 'string') player[v][val][value] = new Decimal(player[v][val][value]);
							}
						}
					}
					else if (objdecimals[v].includes(val)) player[v][val] = new Decimal(player[v][val]);
				}
			}
		}
	} // its not worth adding comments to it anyway because too much work
	
	for (const v in startData) if (player[v] == undefined) player[v] = startData[v];

	switchTab(player.tab);
	startUpdateStats();

	for (enemy of player.spawner.content) {
		renderEnemy(enemy);
	}

	return true;
}
function save(savefile = 'agpSave') {
	localStorage.setItem(savefile, btoa(unescape(encodeURIComponent(JSON.stringify(player)))));
	return player;
}
function hardReset(savefile = 'agpSave') {
	if (!confirm('Are you sure you want to hard reset? There is no going back!')) return false;

	const p = player;
	localStorage.removeItem(savefile);
	location.reload();
	return p;
}
function firststart(savefile = 'agpSave') {
	if (localStorage.getItem(savefile) != null) { // if the savefile exists
		load();
		fixStuff();
		return false;
	} 
	
	start(); // generate savefile
	save(savefile); // save the game so this doesn't happen again
	load(savefile); // load the game because why not i forgot why so

	return true;
}