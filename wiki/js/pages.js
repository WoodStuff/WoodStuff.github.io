// This doesn't hold the content of the pages, just basic information
const PAGES = [{ name: 'index', title: 'Main Page', description: 'The main page of the wiki', categories: ['main', 'base'], aliases: ['home', 'main', 'main page'] }];

addPage('website',
		'woodstuff.github.io',
		'The page about the main website',
		['main'],
		['woodstuff.github.io', 'woodstuffgithubio', 'woodstuff github io', 'site']);
addPage('subpages',
		'Subpages',
		'A list of all subpages on the website',
		['main', 'lists'],
		['list of subpages', 'games', 'pages', 'game', 'page', 'sub pages']);
addPage('agp',
		'AGP',
		'A game where you slaughter squares for blue shapes',
		['pages', 'agp'],
		['ags']);
addPage('redsquare',
		'Red Square',
		'AGP\'s weakest enemy',
		['agp', 'agpenemies'],
		['red square']);
addPage('greensquare',
		'Green Square',
		'A middle strength AGP enemy',
		['agp', 'agpenemies'],
		['green square']);
addPage('bluesquare',
		'Blue Square',
		'A pretty strong AGP enemy',
		['agp', 'agpenemies'],
		['blue square']);
addPage('whitesquare',
		'White Square',
		'An upcoming AGP enemy',
		['agp', 'agpenemies'],
		['white square']);
addPage('wiki',
		'Wiki',
		'An information board of most of the website\'s things',
		[''],
		['pages']);





function addPage(name, title, description, categories, aliases) {
	PAGES.push( { name: name, title: title, description: description, categories: categories, aliases: aliases } )
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