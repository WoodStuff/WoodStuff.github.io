// atk, hp, accy, blk
const buffnames = [[], // 0
	['swordplushie', 'heartplushie', 'healthpotion', 'targetplushie'], // 1
];

const BUFFS = {
	swordplushie: {
		name: 'Sword Plushie', tier: 1,
		description: 'A tiny sword to help defeat those squares',
		atk: d(0.5), hp: d(0), accy: d(0), blk: d(0),
		effect: '+0.5 attack',
	},
	heartplushie: {
		name: 'Heart Plushie', tier: 1,
		description: 'Some extra HP to last longer',
		atk: d(0), hp: d(2), accy: d(0), blk: d(0),
		effect: '+2 max HP',
	},
	healthpotion: {
		name: 'Health Potion', tier: 1,
		description: 'Drinking this potion every once in a while heals you',
		atk: d(0), hp: d(0), accy: d(0), blk: d(0),
		effect: '25% chance every turn to heal yourself for 1 HP',
	},
	targetplushie: {
		name: 'Target Plushie', tier: 1,
		description: 'Training with this plushie helps with your accuracy',
		atk: d(0), hp: d(0), accy: d(5), blk: d(0),
		effect: '+5 accuracy',
	},
};

const buffcount = Object.keys(BUFFS).length;

// yeah thats right i chose nonsense numbers for 2 and 3 costs
const RBS = [
	{ cost: d(0), buffs: 1 },  // 15 * 0
	{ cost: d(45), buffs: 2 },  // 15 * 3
	/* { cost: d(165), buffs: 2 }, // 15 * 11
	{ cost: d(840), buffs: 2 }, // 15 * 56 */
]