function aClick() {
	player.addCurrency(1);
	const button = document.querySelector("button#a-click");
	button.disabled = true;
	setTimeout(() => button.disabled = false, 1000)
}