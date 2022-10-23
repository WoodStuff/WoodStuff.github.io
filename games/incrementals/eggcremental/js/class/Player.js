/**
 * All properties of the game, like currencies etc.
 */
class Player {
	/** @constructor */
	constructor() {
		this.letters = {
			a: new OmegaNum(0),
		}
		/** @type {Letter[]} */
		this.unlockedLetters = ['a'];
	}

	/**
	 * Give some currency. "a" is the most basic currency you unlock at the start.
	 * @param {OmegaNumSource} amount The amount of the currency to add.
	 * @param {Letter} _letter The currency to add.
	 * @returns {OmegaNum} The amount of currency.
	 */
	addCurrency(amount, _letter = 'a') {
		this.a = this.a.add(amount);
		return this.a;
	}
	/**
	 * Get the amount of a letter currency.
	 * @param {Letter} _letter The currency of which amount to get.
	 * @returns {OmegaNum} The amount of that currency.
	 */
	getCurrency(_letter = 'a') {
		return this.a;
	}
	/**
	 * Unlocks a currency type.
	 * @param {Letter} _letter The currency to unlock.
	 */
	unlockCurrency(_letter = 'a') {
		if (this.unlockedLetters.includes(_letter)) this.unlockedLetters.push(_letter);
	}
}