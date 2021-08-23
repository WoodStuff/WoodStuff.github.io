function switchTab(tabp = 'main') {
	const tabs = ['main', 'enemy', 'area'];
	if (!tabs.includes(tabp)) throw new Error('Cannot switch tab to non-tab');

	for (v in tabs) {
		document.getElementById(tabs[v]).style.display = 'none';
	}
	document.getElementById(tabp).style.display = 'block';

	tab = tabp;
	return tabp;
};