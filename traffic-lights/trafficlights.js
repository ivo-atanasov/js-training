class TrafficLights {

	constructor(type, ...lights) {
		if (this.constructor === TrafficLights) {
			// Do not allow direct instantiation
			throw new Error('TrafficLights cannot be instantiated, only extended');
		}
		this.type = type;
		// Create lights by types passed as arguments
		this.lights = {};
		for (var i = 0; i < lights.length; i++) {
			this.lights[lights[i]] = new Light(lights[i]);
		}
		this.state = 0; // default state is 0 (off)
	}

	switchLightOn(id) {
		this.lights[id].switchOn();
	}

	switchLightOff(id) {
		this.lights[id].switchOff();
	}

	off() {
		if (this.state > 0) {
			this.state = 0;
			this.turnOffAllLights();
			console.log('%s traffic lights went off', this.type);
		}
	}

	turnOffAllLights() {
		for (var id in this.lights) {
			if (this.lights.hasOwnProperty(id)) {
				this.lights[id].switchOff();
			}
		}
	}

}