function renderShopItems() {
	const tab = player.getShopTab();
	for (item of ITEMS[tab]) {
		const box = document.createElement('div');
		box.classList.add('item');

		const img = document.createElement('img');
		img.src = item.image;
		img.classList.add('item-img');
		box.appendChild(img);
		document.getElementById(`items-${tab}`).appendChild(box);
	}
}