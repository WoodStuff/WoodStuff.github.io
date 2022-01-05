const calcstats = {
	attack() {
		let stat = d(SWORDS[player.sword].power);
		stat = stat.add(getBuffStats().atk);
		return stat;
	},
	hp() {
		let stat = d(10);
		stat = stat.add(getBuffStats().hp);
		return stat;
	},
	accy() {
		let stat = d(75);
		stat = stat.add(getBuffStats().accy);
		return stat;
	},
	block() {
		let stat = d(SHIELDS[player.shield].power);
		stat = stat.add(getBuffStats().blk);
		return stat;
	},
}