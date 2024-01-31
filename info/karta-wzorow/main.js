const ENTRIES = ['aa'];

ENTRIES.forEach(entry => {
	const box = document.createElement('div');
	box.classList.add('entry');

	const title = document.createElement('span');
	title.innerHTML = entry;
	title.classList.add('entry-text');
	box.appendChild(title);

	document.getElementById('entries').appendChild(box);
});