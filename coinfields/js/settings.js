function openSettings() {
	el('settings').style.visibility = 'visible';
	el('settings').style.opacity = '1';
}
function closeSettings() {
	el('settings').style.visibility = 'hidden';
	el('settings').style.opacity = '0';
}

const updateSettings = setInterval(() => {
	el('s-autosave-output').innerHTML = `${el('s-autosave').value} seconds`;
}, 50);