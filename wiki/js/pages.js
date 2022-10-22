// This doesn't hold the content of the pages, just basic information
const PAGES = [{ name: 'index', title: 'Main Page', categories: ['main', 'base'], aliases: ['home', 'main', 'main page'] }];

addPage('website',
		'woodstuff.github.io',
		['main'],
		['woodstuff.github.io', 'woodstuffgithubio', 'woodstuff github io', 'site']);
addPage('subpages',
		'Subpages',
		['main', 'lists'],
		['list of subpages', 'games', 'pages', 'game', 'page', 'sub pages', 'subpage']);
addPage('agp',
		'AGP',
		['pages', 'agp'],
		['ags']);
addPage('redsquare',
		'Red Square',
		['agp', 'agpenemies'],
		['red square']);
addPage('greensquare',
		'Green Square',
		['agp', 'agpenemies'],
		['green square']);
addPage('bluesquare',
		'Blue Square',
		['agp', 'agpenemies'],
		['blue square']);
addPage('whitesquare',
		'White Square',
		['agp', 'agpenemies'],
		['white square']);
addPage('wiki',
		'Wiki',
		['pages'],
		['egg wiki', 'eggwiki']);
addPage('allpages',
		'List of all pages',
		['base', 'lists'],
		['pages', 'all pages', 'list of all pages', 'lists of all pages', 'all wiki pages', 'page list', 'pages list', 'wiki pages']);





function addPage(name, title, categories, aliases) {
	PAGES.push( { name: name, title: title, categories: categories, aliases: aliases } )
}

const aliases = {};
for (const page in PAGES) {
	if (Object.hasOwnProperty.call(PAGES, page)) {
		const P = PAGES[page];
		if (P.aliases.length != 0) {
			aliases[P.name] = P.aliases;
		}
	}
}

function getPageInfo(id) {
	return PAGES.find(i => i.name == id);
}