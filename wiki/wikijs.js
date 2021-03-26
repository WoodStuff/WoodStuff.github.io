function search() {
	var input = document.getElementById("search").value;
	var meta = document.createElement('meta');
	meta.httpEquiv = "refresh";
	meta.content = "0; http://woodstuff.github.io/wiki/" + input;
	document.getElementsByTagName('head')[0].appendChild(meta);
}
