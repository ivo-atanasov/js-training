class VehiclesTrafficLights extends TrafficLights {

	constructor(placeholder) {
		super(placeholder, 'vehicles', 'red', 'yellow', 'green');
		this.element.classList.add('vehicles');
	}

	on() {
		if (!this.state) {
			console.log('vehicles traffic lights is now on');
			this.state = 1;
			this.stop();
		}
	}

	stop() {
		if (this.state > 0 && this.state !== 2) {
			clearTimeout(this.timer);
			var self = this;
			console.log('vehicles traffic lights: stop!');
			this.switchLightOff('green');
			this.switchLightOn('yellow');
			this.timer = setTimeout(function () {
				self.switchLightOff('yellow');
				self.switchLightOn('red');
			}, 5000);
			this.state = 2;
		}
	}

	allow() {
		if (this.state === 2) {
			clearTimeout(this.timer);
			var self = this;
			console.log('vehicles traffic lights: go go go!');
			this.switchLightOn('yellow');
			this.timer = setTimeout(function () {
				self.switchLightOff('yellow');
				self.switchLightOff('red');
				self.switchLightOn('green');
			}, 2000);
			this.state = 3;
		}
	}

}