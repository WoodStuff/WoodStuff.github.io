const ITEMS = [
	{
		name: 'squarespawn',
		display: 'Square Spawn',
		desc: 'Spawn a high-tier square',
		info: 'A consumable, go to Fight Enemies tile to spawn a high-tier square',
		cost() { return new Decimal(50) },
		shown() { return true },
		onBuy() {},
	},
	{
		name: 'rburecharge',
		display: 'RBU Recharge',
		desc: 'Instantly gain RBU',
		info: 'A consumable, go to Gain RBU tile to instantly gain some RBU',
		cost() { return new Decimal(50) },
		shown() { return true },
		onBuy() {},
	},
]