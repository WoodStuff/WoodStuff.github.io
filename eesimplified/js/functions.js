const el = x => document.getElementById(x);

function switchShopTab(tab) {
	let tabs = ['featured', 'smileys', 'blocks', 'worlds', 'auras', 'npcs', 'classic', 'crew', 'services'];
	if (!tabs.includes(tab)) return false;
	for (const button of document.querySelectorAll('.shop-tab.selected')) {
		button.classList.remove('selected');
		el(`shop-tab-${tab}`).classList.add('selected');
	}
}

function getShopTab() {
	let element = document.querySelector('.shop-tab.selected');
	return element.id.slice(9);
}