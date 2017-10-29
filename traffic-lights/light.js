class Light {

	constructor(placeholder, color) {
		Object.defineProperty(this, 'color', {value : color});
		this.is_on = false;
		this.element = document.createElement('div');
		this.element.classList.add('light', 'off', color);
		placeholder.appendChild(this.element);
	}

	switchOn() {
		if (!this.is_on) {
			this.is_on = true;
			this.element.classList.remove('off');
			console.log('%s light is now on', this.color);
		}
	}

	switchOff() {
		if (this.is_on ) {
			this.is_on = false;
			this.element.classList.add('off');
			console.log('%s light is now off', this.color);
		}
	}
}