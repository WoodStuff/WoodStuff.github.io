const el = x => document.getElementById(x);

function switchShopTab(tab) {
	let pastTab = getShopTab();
	let tabs = ['featured', 'smileys', 'blocks', 'worlds', 'auras', 'npcs', 'classic', 'crew', 'services'];
	if (!tabs.includes(tab) || tab == pastTab) return false;
	
	el(`shop-tab-${pastTab}`).classList.remove('selected');
	el(`shop-tab-${tab}`).classList.add('selected');

	el(`items-${pastTab}`).style.display = 'none';
	el(`items-${tab}`).style.display = 'block';

	renderShopItems();
}

function getShopTab() {
	let element = document.querySelector('.shop-tab.selected');
	return element.id.slice(9);
}

function switchTab(tab) {
	return false;
}