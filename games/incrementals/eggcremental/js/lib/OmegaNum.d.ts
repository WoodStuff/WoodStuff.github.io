declare type CompareResult = -1 | 0 | 1;
declare type OmegaNumSource = OmegaNum | number | string | OmegaNumSource[];

declare class OmegaNum {
	get array(): number[]
	constructor(value?: OmegaNumSource);
	sign(): CompareResult;

	add(other: OmegaNumSource): OmegaNum;
	plus(other: OmegaNumSource): OmegaNum;

	sub(other: OmegaNumSource): OmegaNum;
	minus(other: OmegaNumSource): OmegaNum;

	mul(other: OmegaNumSource): OmegaNum;
	times(other: OmegaNumSource): OmegaNum;

	div(other: OmegaNumSource): OmegaNum;
	divide(other: OmegaNumSource): OmegaNum;

	pow(other: OmegaNumSource): OmegaNum;
	toPower(other: OmegaNumSource): OmegaNum;

	root(other: OmegaNumSource): OmegaNum;
	sqrt(): OmegaNum;
	squareRoot(): OmegaNum;
	cbrt(): OmegaNum;
	cubeRoot(): OmegaNum;

	ceil(): OmegaNum;
	ceiling(): OmegaNum;
	round(): OmegaNum;
	floor(): OmegaNum;
	toPrecision(prec: OmegaNumSource): OmegaNum;

	lt(compare: OmegaNumSource): boolean;
	lessThan(compare: OmegaNumSource): boolean;
	lte(compare: OmegaNumSource): boolean;
	lessThanOrEqualTo(compare: OmegaNumSource): boolean;
	eq(compare: OmegaNumSource): boolean;
	equal(compare: OmegaNumSource): boolean;
	equalsTo(compare: OmegaNumSource): boolean;
	gt(compare: OmegaNumSource): boolean;
	greaterThan(compare: OmegaNumSource): boolean;
	gte(compare: OmegaNumSource): boolean;
	greaterThanOrEqualTo(compare: OmegaNumSource): boolean;
	compareTo(other: OmegaNumSource): CompareResult;

	isint(): boolean;
	isInteger(): boolean;
	isFinite(): boolean;
	isInfinite(): boolean;
	isNaN(): boolean;
	ispos(): boolean;
	isPositive(): boolean;
	isneg(): boolean;
	isNegative(): boolean;

	abs(): OmegaNum;
	absoluteValue(): OmegaNum;
	arrow(arrows: OmegaNumSource): Function;
	chain(other: OmegaNumSource, arrows: OmegaNumSource): OmegaNum;
	choose(other: OmegaNumSource): OmegaNum;
	clone(): OmegaNum;
}