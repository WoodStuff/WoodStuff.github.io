/**
 * The player.
 * @type {Player}
 */
let player;

/** Frames per second; for HTML updates */
const FPS = 60;
/** Ticks per second; for JS updates */
const TPS = 60;
const COLORS = {
	RED: '#c74440',
}
const TABS = [
	'main',
]
const TABINFO = {
	main: {
		name: 'Main',
		subtabs: ['main'],
		subtabDisplay: ['Main'],
	},
}
/** @type {Timer[]} */
let TIMERS = [];

function start() {
	player = new Player();
	if (localStorage.getItem('eggcrementalSave') != null) load();
	
	regenerateLetters();
	regenerateTabs();

	updateStats_HTML();

	setInterval(updateStats_JS, 1000 / TPS);
	setInterval(updateStats_HTML, 1000 / FPS);
}

function regenerateLetters() {
	const letterColors = {
		a: COLORS.RED,
		b: COLORS.RED,
	}

	for (const letter of player.unlockedLetters) {
		const letterBox = document.createElement('div');
		letterBox.classList.add('letter-box');

		const letterIcon = document.createElement('span');
		letterIcon.innerHTML = letter;
		letterIcon.style.color = letterColors[letter];
		letterIcon.style.opacity = '0.9';
		letterIcon.classList.add('letter-icon');
		letterBox.appendChild(letterIcon);

		const letterCount = document.createElement('span');
		letterCount.innerHTML = player.getCurrency(letter).toString();
		letterCount.id = `letter-count-${letter}`;
		letterCount.classList.add('letter-count');
		letterBox.appendChild(letterCount);

		const letterPerSecond = document.createElement('span');
		letterPerSecond.innerHTML = `${getPS(letter)}<sub>/s</sub>`;
		letterPerSecond.id = `letter-ps-${letter}`;
		letterPerSecond.classList.add('letter-ps');
		letterBox.appendChild(letterPerSecond);

		document.getElementById('currency-container').appendChild(letterBox);
	}
}
function regenerateTabs() {
	for (const tab of TABS) {
		const tabElement = document.createElement('button');
		tabElement.id = `tab-button-${tab}`;
		tabElement.innerHTML = TABINFO[tab].name;
		tabElement.classList.add('tab-button');
		tabElement.onclick = () => {
			player.tab[0] = tab;
		}

		document.getElementById('tab-container').appendChild(tabElement);

		for (const subtab of TABINFO[tab].subtabs) {
			const subtabElement = document.createElement('button');
			subtabElement.id = `subtab-button-${tab}-${subtab}`;
			subtabElement.innerHTML = TABINFO[tab].subtabDisplay[TABINFO[tab].subtabs.indexOf(subtab)];
			subtabElement.classList.add('tab-button', 'subtab-button', `subtab-button-${tab}`);
			subtabElement.onclick = () => {
				player.tab[1] = subtab;
			}

			const subtabContainer = document.getElementById('subtab-container');
			subtabContainer.appendChild(subtabElement);

			if (subtabContainer.childElementCount == 1) subtabContainer.style.display = 'none';
			else subtabContainer.style.display = 'flex';
		}
	}
}

function getPS(_letter = "a") {
	switch (_letter) {
		case "a":
			let ps = new OmegaNum(0);
			ps = ps.add(player.itemCount("a1"));
			return ps;
	
		default:
			return new OmegaNum(0);
	}
}

function updateStats_HTML() {
	document.querySelectorAll('span.letter-count').forEach(l => {
		const letter = l.id.slice(-1);
		const str = player.getCurrency(letter).times(10).round().div(10).toString();
		if (l.innerHTML != str) l.innerHTML = str;
	})
	document.querySelectorAll('span.letter-ps').forEach(l => {
		const letter = l.id.slice(-1);
		const str = `${getPS(letter).times(10).round().div(10)}<sub>/s</sub>`;
		if (l.innerHTML != str) l.innerHTML = str;
	})
	document.getElementById("a-gen-cost").innerHTML = player.itemCost("a1").toString();
}
function updateStats_JS() {
	player.unlockedLetters.forEach(l => player.addCurrency(getPS(l).div(TPS), l));

	TIMERS = TIMERS.filter(t => t.getRemainingTime() > 0);
	TIMERS.forEach(timer => {
		timer.element.innerHTML = timer.formatRemainingTime();
	});
}