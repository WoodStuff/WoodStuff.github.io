function save(savefile = 'eggcrementalSave') {
	localStorage.setItem(savefile, btoa(encodeURIComponent(JSON.stringify(player))));
}

function load(savefile = 'eggcrementalSave') {
	player = JSON.parse(decodeURIComponent(atob(localStorage.getItem(savefile))));
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
	player = flatten(player, '');

	// 2. replace everything that should be an omeganum with an omeganum
	for (const value in player) {
		if (player[value].array) player[value] = new OmegaNum(player[value])
	}
	
	// 3. unflatten the object
	function unflatten(data) {
		var result = new Player();
		for (const i in result) {
			delete result[i];
		}
		for (var i in data) {
			var keys = i.split('.');
			keys.reduce(function(r, e, j) {
				return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : []);
			}, result);
		}
		return result;
	}
	player = unflatten(player);
	
	// omeganums are back!! yay :D
}

function hardReset(c = true) {
	if (c && !confirm('Are you sure you want to hard reset? There is no going back!')) return;
	localStorage.removeItem('eggcrementalSave');
	location.reload();
}

let saveInterval = setInterval(save, 15000);