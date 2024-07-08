/// <reference path="../lib/custom.d.ts" />
/// <reference path="../lib/OmegaNum.d.ts" />

/**
 * All properties of the game, like currencies etc.
 */
class Player {
	/** @type {LetterMap} */
	letters;
	/** @type {Letter[]} */
	unlockedLetters;
	/** @type {string[]} */
	tab;
	items;

	/** @constructor */
	constructor() {
		this.letters = {
			'a': new OmegaNum(0),
			'b': new OmegaNum(0),
		}
		this.unlockedLetters = ['a'];
		this.tab = ['Main', 'Main']
		this.unlockedItems = ['a1'];
		this.items = {
			a1: new OmegaNum(0),
		} 
	}

	/**
	 * Give some currency. "a" is the most basic currency you unlock at the start.
	 * @param {OmegaNumSource} amount The amount of the currency to add.
	 * @param {Letter} _letter The currency to add.
	 * @returns {OmegaNum} The amount of currency.
	 */
	addCurrency(amount = new OmegaNum(1), _letter = 'a') {
		this.letters[_letter] = this.letters[_letter].add(amount);
		return this.letters[_letter];
	}
	/**
	 * Get the amount of a letter currency.
	 * @param {Letter} _letter The currency of which amount to get.
	 * @returns {OmegaNum} The amount of that currency.
	 */
	getCurrency(_letter = 'a') {
		return this.letters[_letter];
	}
	/**
	 * Unlocks a currency type.
	 * @param {Letter} _letter The currency to unlock.
	 */
	unlockCurrency(_letter = 'a') {
		if (!this.unlockedLetters.find(a => a == _letter)) this.unlockedLetters.push(_letter);
	}
	/**
	 * @param {string} id ID of the item.
	 * @returns {OmegaNum}
	 */
	itemCount(id) {
		return this.items[id];
	}
	addItems(id, amount = new OmegaNum(1)) {
		this.items[id] = this.items[id].add(amount);
	}
	/**
	 * @param {string} id ID of the item.
	 * @returns {OmegaNum}
	 */
	itemCost(id) {
		return ITEMS[id].getCost(this.itemCount(id));
	}
	unlockItem(item) {
		if (!this.unlockedItems.find(a => a == item)) this.unlockedLetters.push(item);
	}
}