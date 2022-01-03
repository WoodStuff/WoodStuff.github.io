const calcstats = {
	attack() {
		let stat = d(SWORDS[player.sword].power);
		return stat;
	},
	maxhp() {
		let stat = d(10);
		return stat;
	},
	accy() {
		let stat = d(75);
		return stat;
	},
	block() {
		let stat = d(SHIELDS[player.shield].power);
		return stat;
	},
}