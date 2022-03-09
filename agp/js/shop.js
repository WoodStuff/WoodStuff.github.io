const itemBox = document.getElementById('items');

function getItem(item) {
	return ITEMS.find(i => i.name == item);
}
function getItemID(item) {
	return ITEMS.findIndex(i => i.name == item);
}

function buyItem(item) {
	let i = getItem(item);
	if (!i || player.currency.lt(i.cost())) return false;
	
	player.currency = player.currency.sub(i.cost());
	if (player.items[item]) player.items[item] = player.items[item].add(1);
	else player.items[item] = new Decimal(1);

	i.onBuy();

	performBuyChecks();
}
function getItemCount(item) {
	return player.items[item] ?? new Decimal(0);
}

function generateShopItems() {
	while (itemBox.firstChild) {
		itemBox.removeChild(itemBox.lastChild);
	}

	for (const item of ITEMS) {
		if (!item.shown()) continue;

		const element = document.createElement('div');
		element.id = `item-${item.name}`;
		element.classList.add('item');
		element.title = item.info;
		element.addEventListener('click', () => buyItem(item.name));

		const image = document.createElement('img');
		image.src = `media/items/${item.name}.png`;
		image.classList.add('item-img');
		image.id = `item-img-${item.name}`;
		element.appendChild(image);

		const title = document.createElement('p');
		title.innerHTML = item.display;
		title.classList.add('item-title');
		element.appendChild(title);

		const desc = document.createElement('p');
		desc.innerHTML = item.desc;
		desc.style.fontStyle = 'italic';
		desc.classList.add('item-desc');
		element.appendChild(desc);

		const right = document.createElement('div');
		right.classList.add('item-right');

		const costImage = document.createElement('img');
		costImage.src = 'media/currency.png';
		costImage.classList.add('item-cost-img', 'icon', 'notrsf');
		right.appendChild(costImage);

		const costText = document.createElement('p');
		costText.innerHTML = formatWhole(item.cost());
		costText.classList.add('item-cost-text');
		right.appendChild(costText);

		const own = document.createElement('p');
		own.innerHTML = getItemCount(item.name);
		own.classList.add('item-owned');
		own.id = `item-owned-${item.name}`;
		right.appendChild(own);

		element.appendChild(right);

		itemBox.appendChild(element);
	}
	performBuyChecks();
}

function performBuyChecks() {
	for (const item of document.getElementsByClassName('item')) {
		let i = item.id.slice(5);
		if (getItem(i).cost().gt(player.currency) && !item.classList.contains('expensive')) item.classList.add('expensive');
		else if (!getItem(i).cost().gt(player.currency)) item.classList.remove('expensive');

		let own = document.getElementById(`item-owned-${i}`);
		own.innerHTML = formatWhole(getItemCount(i));
	}
}

function useConsumable(item) {
	if (getItemCount(item).lt(1)) return;

	if (item == 'squarespawn' && spawnerMaxed()) return;

	player.items[item] = player.items[item].sub(1);
	if (getItemCount(item).lt(1)) {
		document.getElementById(`use-${item}`).style.display = 'none';
		for (const count of document.getElementsByClassName('consumable-count')) {
			count.innerHTML = '';
		}
	}

	switch (item) { // consumable effects
		case 'squarespawn':
			spawnEnemy('bluesquare');
			break;

		case 'rburecharge':
			addRBU(player.rbu.collect);
			break;

		default:
			break;
	}
}