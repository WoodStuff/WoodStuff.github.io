function innerhtml(oid, set) {
	document.getElementById(oid).innerHTML = set;
}
function value(oid) {
	return document.getElementById(oid).value;
}
function save(a) {
	// a is the variable used when your item contains a space
	if (a == 0) {
		var name = prompt("ID of the item? (no spaces allowed)")
	}
	else {
		var name = prompt("ID includes space!\nID of the item? (no spaces allowed)")
	}
	if (name.includes(" ")) {
		save(1);
	}
}
function update(oid) {
	innerhtml(oid, value(oid + "Input"));
}
function display() {
	var updatos = ["name", "desc"]
	
	for (i = 0; i < updatos.length; i++) {
		update(updatos[i])
	}
}
