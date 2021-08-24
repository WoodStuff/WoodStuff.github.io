const enemynames = ['redsquare', 'greensquare', 'bluesquare'];

const enemies = [
	{
		name: 'Red Square',
		desc: 'Why is he so weak? I mean, he is literally the color of blood!',
		atk: 2, hp: 7, accy: 66, blk: 0,
		curr: 5, xp: 5, levelt: 2, type: 'normal',
		accyfactor: 1, drops: 0, id: 'redsquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/red square.png',
		spawner: {
			level: [1],
			chance: [55],
		},
	},
	{
		name: 'Green Square',
		desc: 'It really doesn\'t want to, but it has to fight when it\'s forced to.',
		atk: 2, hp: 10, accy: 75, blk: 0,
		curr: 10, xp: 10, levelt: 3, type: 'normal',
		accyfactor: 1, drops: 0, id: 'greensquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/green square.png',
		spawner: {
			level: [1],
			chance: [40],
		},
	},
	{
		name: 'Blue Square',
		desc: 'A new player, that has gotten this cool gray sword and all.',
		atk: 2, hp: 15, accy: 75, blk: 0,
		curr: 15, xp: 15, levelt: 4, type: 'normal',
		accyfactor: 1, drops: 0, id: 'bluesquare',
		isBoss: false, group: 'square',
		img: '../media/enemies/green square.png',
		spawner: {
			level: [1, 2],
			chance: [5, 65],
		},
	},
];