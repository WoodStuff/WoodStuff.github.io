function load(savefile = 'coinfieldsSave') {
	if (localStorage.getItem(savefile) == null) start();
	player = JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem(savefile)))));
	BOXES = JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem(savefile + '_Boxes')))));

	for (const v in player) {// some random af code i dont understand that converts some strings into decimals because json sucks
		if (typeof player[v] != 'object') {
			if (decimals.includes(v)) player[v] = new Decimal(player[v]);
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
	
	return true;
}
function save(savefile = 'coinfieldsSave') {
	localStorage.setItem(savefile, btoa(unescape(encodeURIComponent(JSON.stringify(player)))));
	localStorage.setItem(savefile + '_Boxes', btoa(unescape(encodeURIComponent(JSON.stringify(BOXES)))));
	return player;
}
function hardReset(savefile = 'coinfieldsSave') {
	if (!confirm('Are you sure you want to hard reset? There is no going back!')) return false;

	const p = player;
	localStorage.removeItem(savefile);
	localStorage.removeItem(savefile + '_Boxes');
	location.reload();
	return p;
}
function firststart(savefile = 'coinfieldsSave') {
	if (localStorage.getItem(savefile) != null) {
		load();

		document.title = `${player.coins} coins | Coin Fields`;
		setTimeout(autoSave, player.settings.autoSaveDuration);
		
		return false;
	}
	
	start();
	save(savefile);
	load(savefile);

	document.title = `${player.coins} coins | Coin Fields`;
	setTimeout(autoSave, player.settings.autoSaveDuration);

	return true;
}