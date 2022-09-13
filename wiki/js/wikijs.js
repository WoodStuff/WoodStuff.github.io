let pageCategories = [];
const pageID = location.href.split('/').findLast(() => true).slice(0, -5);

function linkchange() {
	let input = document.getElementById('search').value.toLowerCase();
	let search = document.getElementById('searchbutton');
	if (Object.values(aliases).flat().includes(input)) {
		for (const page in aliases) {
			if (aliases[page].includes(input)) input = page;
		}
	}
	search.href = input == '' ? '../index.html/' : `../${input}.html`;
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

	const pageTitle = document.createElement('t');
	pageTitle.id = 'title';
	pageTitle.innerHTML = getPageInfo(pageID).title;
	document.getElementById('page').appendChild(pageTitle);

	specifyCategories();
	document.title = `${document.getElementsByTagName('t')[0].innerHTML} | Egg Wiki`

	loadTemplates();

	killLinks();
}

function specifyCategories() {
	document.getElementById('article').appendChild(document.createElement('br'));
	document.getElementById('article').appendChild(document.createElement('br'));
	document.getElementById('article').appendChild(document.createElement('br'));

	const catContainer = document.createElement('cat');
	catContainer.innerHTML = '<b>Categories:</b>';
	
	let firstRun = true;
	const catList = getPageInfo(pageID).categories;

	for (const cat of catList) {
		if (firstRun) {
			catContainer.innerHTML += ' ';
			firstRun = false;
		}
		else catContainer.innerHTML += ', ';

		const a = document.createElement('a');
		a.href = `category/${cat}.html`; // set the category links
		a.title = catDescs[cat]; // set the description for category
		a.innerHTML = catNames[cat];

		pageCategories.push(cat);
		catContainer.appendChild(a);
	}

	document.getElementById('article').appendChild(catContainer);

	/*document.querySelectorAll('a[data-cat]').forEach(a => {
		a.href = `category/${a.dataset.cat}`; // set the category links
		a.title = catdescs[a.dataset.cat]; // set the description for category
		pageCategories.push(a.dataset.cat);
	});*/
}

function loadTemplates() {
	for (el of document.getElementsByTagName('temp')) {
		el.replaceWith(handleTemplate(el.attributes.tid.value, el.attributes))
	}
}

function killLinks() {
	document.querySelectorAll('a[p]').forEach(link => {
		const value = link.attributes.p.value;
		
		if (value.startsWith('c-')) { // category
			if (!implementedCats.includes(value.slice(2))) link.classList.add('dead');
			else link.href = `category/${value.slice(2)}.html`;
		}
		else { // page
			if (!getPageInfo(value)) link.classList.add('dead');
			else link.href = `${value}.html`;
		}
	});
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
			return null;
	}
}




function getEnemy(enemy) { // enter an enemy name, get its stats
	if (!enemynames.includes(enemy)) return;
	return ENEMIES[enemynames.indexOf(enemy)];
}