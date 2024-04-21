function aClick() {
	player.addCurrency(1);
	const button = document.querySelector("button#a-click");
	button.disabled = true;
	const html = button.innerHTML;
	button.innerHTML = "Cooldown";
	setTimeout(() => {
		button.disabled = false;
		button.innerHTML = html;
	}, 1000)
}