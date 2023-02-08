/// <reference path="../lib/custom.d.ts" />
/// <reference path="../lib/OmegaNum.d.ts" />

/**
 * All properties of the game, like currencies etc.
 */
class Player {
	/** @type {LetterMap} */
	letters;
	/** @type {LetterMap} */
	persecond;
	/** @type {Letter[]} */
    unlockedLetters;
	/** @type {string[]} */
    tab;

    /** @constructor */
    constructor() {
        this.letters = {
			'a': new OmegaNum(0)
		}
        this.persecond = {
			'a': new OmegaNum(0)
		}
        /** @type {Letter[]} */
        this.unlockedLetters = ['a'];
        /** @type {string[]} */
        this.tab = ['Main', 'Main']
    }

    /**
     * Give some currency. "a" is the most basic currency you unlock at the start.
     * @param {OmegaNumSource} amount The amount of the currency to add.
     * @param {Letter} _letter The currency to add.
     * @returns {OmegaNum} The amount of currency.
     */
    addCurrency(amount, _letter = 'a') {
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
        if (this.unlockedLetters.find(a => a == _letter)) this.unlockedLetters.push(_letter);
    }
    /**
     * Get the amount of a letter currency gained per second.
     * @param {Letter} _letter The currency of which rate of generation to get.
     * @returns {OmegaNum} The generation of that currency.
     */
    getPS(_letter = 'a') {
        return this.persecond[_letter];
    }
}