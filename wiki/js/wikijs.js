let pageCategories = [];

function linkchange() {
	var input = document.getElementById('search').value.toLowerCase();
	var search = document.getElementById('searchbutton');
	search.href = input == '' ? '../index.html' : `../${input}`;
}

function loadPage() {
	let moreFiles = ['css/special.css'];
	
	for (const file of moreFiles) {
		let type = file.slice(-3) == 'css' ? 'link' : 'script'
		let add = document.createElement(type);
		if (type == 'link') {
			add.rel = 'stylesheet';
			add.href = file;
		}
		else {
			add.type = 'text/javascript';
			add.src = file;
		}

		document.head.appendChild(add);
	}

	specifyCategories();
	document.title = `${document.getElementsByTagName('t')[0].innerHTML} | Egg Wiki`

	loadTemplates();
}

function specifyCategories() {
	document.querySelectorAll('a[data-cat]').forEach(a => {
		a.href = `category/${a.dataset.cat}`; // set the category links
		a.title = catdescs[a.dataset.cat]; // set the description for category
		pageCategories.push(a.dataset.cat);
	});
}

function loadTemplates() {
	for (el of document.getElementsByTagName('temp')) {
		el.replaceWith(handleTemplate(el.attributes.tid.value, el.attributes))
	}
}

function handleTemplate(template, values) {
	switch (template) {
		case 'agpenemy':
			let list = document.createElement('ul');

			let atk = document.createElement('li');
			atk.innerHTML = `<b>Attack:</b> ${formatWhole(getEnemy(values.enemy.value).atk)}`;

			let hp = document.createElement('li');
			hp.innerHTML = `<b>Max HP:</b> ${formatWhole(getEnemy(values.enemy.value).hp)}`;

			let accy = document.createElement('li');
			accy.innerHTML = `<b>Accuracy:</b> ${formatWhole(getEnemy(values.enemy.value).accy)}`;

			let blk = document.createElement('li');
			blk.innerHTML = `<b>Block:</b> ${formatWhole(getEnemy(values.enemy.value).blk)}`;

			list.appendChild(atk);
			list.appendChild(hp);
			list.appendChild(accy);
			list.appendChild(blk);
			return list;
	
		default:
			return document.createElement('p').innerHTML = `No such template!`
	}
}




function getEnemy(enemy) { // enter an enemy name, get its stats
	if (!enemynames.includes(enemy)) return;
	return ENEMIES[enemynames.indexOf(enemy)];
}