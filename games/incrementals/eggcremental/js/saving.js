function save(savefile = 'eggcrementalSave') {
	localStorage.setItem(savefile, btoa(encodeURIComponent(JSON.stringify(game))));
}

function load(savefile = 'eggcrementalSave') {
	game = new Player();
	/** @type {Player} */
	const savedGame = JSON.parse(decodeURIComponent(atob(localStorage.getItem(savefile))));
	
	for (const stat in savedGame) {
		game[stat] = savedGame[stat];
	}

	// the save has been reconstructed but the omeganums are broken, fix them here

	// 1. flatten the object
	function flatten(data, c) {
		var result = {};
		for (var i in data) {
			if (typeof data[i] == 'object' && !data[i].array) Object.assign(result, flatten(data[i], c + '.' + i));
			else result[(c + '.' + i).replace(/^\./, "")] = data[i];
		}
		return result;
	}
	game = flatten(game, '');

	// 2. replace everything that should be an omeganum with an omeganum
	for (const value in game) {
		if (game[value].array) game[value] = new OmegaNum(game[value])
	}
	
	// 3. unflatten the object
	function unflatten(data) {
		var result = new Player();
		for (var i in data) {
			var keys = i.split('.')
			keys.reduce(function(r, e, j) {
				return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
			}, result)
		}
		return result;
	}
	game = unflatten(game);
	
	// omeganums are back!! yay :D
}