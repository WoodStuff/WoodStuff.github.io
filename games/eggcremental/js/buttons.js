function aClick() {
	player.addCurrency(1);

	const button = document.querySelector("button#a-click");
	const html = button.innerHTML; // to set the button back after cooldown finishes
	button.disabled = true;

	const timer = new Timer(() => {
		button.disabled = false;
		button.innerHTML = html;
	}, 1000, button)
	TIMERS.push(timer);
}
function aGen() {
	const cost = player.itemCost("a1");
	if (player.getCurrency().lt(cost)) return;
	player.addCurrency(cost.times(-1));
	player.addItems("a1");
}