class PedestriansTrafficLights extends TrafficLights {

	constructor(placeholder) {
		super(placeholder, 'pedestrians', 'red', 'green');
	}

	on() {
		if (!this.state) {
			console.log('pedestrians traffic lights is now on');
			this.state = 1;
			this.stop();
		}
	}

	stop() {
		if (this.state > 0 && this.state !== 2) {
			console.log('pedestrians traffic lights: stop!');
			this.switchLightOff('green');
			this.switchLightOn('red');
			this.state = 2;
		}
	}

	allow() {
		if (this.state === 2) {
			console.log('pedestrians traffic lights: go go go!');
			this.switchLightOff('red');
			this.switchLightOn('green');
			this.state = 3;
		}
	}

}