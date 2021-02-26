// METHODS (class-based)

// BOOLEAN

// The reverse of the boolean
Boolean.prototype.rev = function() {
	if (this == true) {
		return false;
	}
	else {
		return true;
	}
};

// ---------------------------------------------------------------------------------------

// FUNCTIONS (normal)

// Set the contents of an object (oid) to the second argument (set)
function innerhtml(oid, set) {
	document.getElementById(oid).innerHTML = set;
}
