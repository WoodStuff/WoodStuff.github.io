/**
 * @type { [x: Item] };
 */
const ITEMS = {};

const N = n => new OmegaNum(n);
ITEMS["a1"] = new Item(k => N(1.25).pow(k).times(4).round());