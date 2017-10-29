class Light {

	constructor(color) {
		Object.defineProperty(this, 'color', {value : color});
		this.is_on = false;
	}

	switchOn() {
		if (!this.is_on) {
			this.is_on = true;
			console.log('%s light is now on', this.color);
		}
	}

	switchOff() {
		if (this.is_on ) {
			this.is_on = false;
			console.log('%s light is now off', this.color);
		}
	}
}