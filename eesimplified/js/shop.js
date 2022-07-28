function renderShopItems() {
	const tab = player.getShopTab();
	const itemContainer = document.getElementById(`items-${tab}`);

	while (itemContainer.firstChild) itemContainer.removeChild(itemContainer.lastChild);
	for (item of ITEMS[tab]) {
		const box = document.createElement('div');
		box.classList.add('item');

		const img = document.createElement('img');
		img.src = item.image;
		img.classList.add('item-img');
		box.appendChild(img);
		itemContainer.appendChild(box);
	}
}