const AREAS = [
	[ // zone 0
		{
			area: [0, 0], // this means the map is 0-0 aka zone 0 and map 0
			name: 'First Journey',
			desc: 'The first map, that marks the beginning of your adventure',
			dp: 10,
			rewards: {
				currency: new Decimal(15),
				xp: new Decimal(15),
			},
			data: [ // the map itself
				['s   r r   e'],
			],
			key: {
				' ': 'none',
				's': 'start',
				'e': 'end',
				'r': 'e-redsquare',
			},
		},
	],
	[
		{
			area: [1, 0], // this means the map is 0-0 aka zone 0 and map 0
			name: 'Fsdfasdfgadfdsairst Journey',
			desc: 'The firstfadsfasdfasdfasdfadsfads map, that marks the beginning of your adventure',
			dp: 10,
			rewards: {
				currency: new Decimal(15),
				xp: new Decimal(15),
			},
			data: [ // the map itself
				['s   g g   e'],
			],
			key: {
				' ': 'none',
				's': 'start',
				'e': 'end',
				'g': 'e-greensquare',
			},
		},
	]
]