class PedestrianXingDispatcher {

	constructor(placeholder) {
		this.trafficlights = {
			vehicles : new VehiclesTrafficLights(placeholder),
			pedestrians : new PedestriansTrafficLights(placeholder),
		};
		this.state = 0;
	}

	on() {
		if (!this.state) {
			this.state = 1;
			this.trafficlights.vehicles.on();
			this.trafficlights.pedestrians.on();
			this.trafficlights.vehicles.allow();
		}
	}

	off() {
		if (this.state) {
			this.state = 0;
			this.trafficlights.vehicles.off();
			this.trafficlights.pedestrians.off();
		}
	}

	allowPedestrians() {
		if (this.state > 0 && this.state === 1) {
			clearTimeout(this.timer);
			this.trafficlights.vehicles.stop();
			var self = this;
			this.timer = setTimeout(function () {
				self.trafficlights.pedestrians.allow();
				self.state = 2;
				self.timer = setTimeout(self.allowVehicles.bind(self), 10000);
			}, 5000);
		}
	}

	allowVehicles() {
		if (this.state > 0 && this.state === 2) {
			clearTimeout(this.timer);
			this.trafficlights.pedestrians.stop();
			var self = this;
			this.timer = setTimeout(function () {
				self.trafficlights.vehicles.allow();
				self.state = 1;
			}, 10000);
		}
	}

}