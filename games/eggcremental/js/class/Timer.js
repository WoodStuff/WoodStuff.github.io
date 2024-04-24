class Timer {
    constructor(fn, delay, element, ...params) {
        this.id = setTimeout(fn, delay, ...params);
        this.endTime = new Date().getTime() + delay;
		this.element = element;
    }

    getId() {
        return this.id;
    }

    getRemainingTime() {
        const remainingTime = this.endTime - new Date().getTime();
        return remainingTime > 0 ? remainingTime : 0;
    }

	formatRemainingTime() {
		const t = this.getRemainingTime();
		return `${(t / 1000).toFixed(1)}s`;
	}
}