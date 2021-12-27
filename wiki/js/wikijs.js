function linkchange() {
	var input = document.getElementById("search").value;
	var search = document.getElementById("searchbutton");
	search.href = input == '' ? '../index.html' : `../${input}`;
}

function specifyCategories() {
	document.querySelectorAll('a[data-cat]').forEach(a => {
		a.href = `category/${a.dataset.cat}`; // set the category links
		a.title = catdescs[a.dataset.cat]; // set the description for category
	});
}