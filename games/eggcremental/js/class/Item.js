class Item {
	/** @type {OmegaNum} */
	amount;
	/**
	 * @type {Function} 
	 * @param {OmegaNum} a The amount of the item acquired.
	 * @returns {OmegaNum} The cost calculated based on the amount.
	*/
	getCost;

	/**
	 * @constructor
	 * @param {Function} cost
	 */
	constructor(cost) {
		this.amount = new OmegaNum(0);
		this.getCost = cost;
	}
}