const enemynames = ['redsquare', 'greensquare', 'bluesquare'];

const ENEMIES = [
	{
		name: 'Red Square',
		desc: 'Why is he so weak? I mean, he is literally the color of blood!',
		atk: d(2), hp: d(7), accy: d(66), blk: d(0),
		curr: d(5), xp: d(5), levelt: d(2), type: 'normal',
		accyfactor: d(1), drops: 0, id: 'redsquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/redsquare.png',
		rbuworth: d(15),
		spawner: {
			level: [0, 1],
			chance: [100, 55],
		},
	},
	{
		name: 'Green Square',
		desc: 'It really doesn\'t want to, but it has to fight when it\'s forced to.',
		atk: d(2), hp: d(10), accy: d(75), blk: d(0),
		curr: d(10), xp: d(10), levelt: d(3), type: 'normal',
		accyfactor: d(1), drops: 0, id: 'greensquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/greensquare.png',
		rbuworth: d(20),
		spawner: {
			level: [1],
			chance: [40],
		},
	},
	{
		name: 'Blue Square',
		desc: 'A new player, that has gotten this cool gray sword and all.',
		atk: d(2), hp: d(15), accy: d(75), blk: d(0),
		curr: d(15), xp: d(15), levelt: d(4), type: 'normal',
		accyfactor: d(1), drops: 0, id: 'bluesquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/bluesquare.png',
		rbuworth: d(30),
		spawner: {
			level: [1, 2],
			chance: [5, 65],
		},
	},
];