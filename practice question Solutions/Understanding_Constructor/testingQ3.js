const car = {
    make: "Toyota",
    engine: {
        start : function() {
            console.log(`Car started: ${this.make}`)
        }
    }
  };

car.engine.start();