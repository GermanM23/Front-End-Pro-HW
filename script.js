function Car() {
  const data = { ...arguments[0] };
  this.carModel = data[0];
  this.carYear = data[1];
  this.carMass = data[2];
  this.engineType = data[3];
  this.fuelConsuption = data[4];
  this.engineVolume = data[5];
  this.carStatus = data[6];
  this.maintenance = 100;
}
const minMaintainReduc = 0.1;
const maxMaintainReduc = 2.5;
function randomMaintainReduce() {
  return (Math.random() * maxMaintainReduc + minMaintainReduc).toFixed(1);
}
Car.prototype.startRide = function () {
  if (this.carStatus) {
    const newMaintenance = this.maintenance - randomMaintainReduce();
    if (newMaintenance > 0) {
      this.carStatus = false;
      this.maintenance = +newMaintenance.toFixed(1);
      console.log(`${this.carModel} is starting race`);
    } else {
      console.log(`Better call taxi, ${this.carModel} maintenance is too low`);
    }
  } else {
    console.log(`${this.carModel} is already on the race`);
  }
};
Car.prototype.endRide = function () {
  if (!this.carStatus) {
    this.carStatus = true;
    console.log(`${this.carModel} going to the parking lot`);
  } else {
    console.log(`${this.carModel} is already on the parking`);
  }
};
function Sedan() {
  Car.call(this, arguments);
}
function Universal() {
  Car.call(this, arguments);
}
function Hatchback() {
  Car.call(this.arguments);
}
Sedan.prototype = Object.create(Car.prototype);
Universal.prototype = Object.create(Car.prototype);
Hatchback.prototype = Object.create(Car.prototype);
const myCar = new Sedan("Audi", 2017, 15, "disel", 1000, 3.5, true);
const car2 = new Universal("WW", 2012, 20, "gas", 12, 2.0, true);
function Dealer() {
  this.calcSum = function (car) {
    const broken = 100 - car.maintenance;
    let sum = 0;
    if (car instanceof Hatchback) {
      sum += 110;
      switch (car.carYear) {
        case car.carYear >= 1990 && car.carYear <= 1999:
          sum += 2;
          break;
        case car.carYear >= 2000 && car.carYear <= 2009:
          sum += 1.7;
          break;
        case car.carYear >= 2010 && car.carYear <= 2018:
          sum += 1.4;
          break;
        case car.carYear >= 2019:
          sum += 1.2;
          break;
      }
      switch (car.engineType) {
        case "disel":
          sum += 2.2;
          break;
        case "gas":
          sum += 1.8;
          break;
      }
      switch (car.carMass) {
        case car.carMass >= 800 && car.carMass <= 1100:
          sum += 1.5;
          break;
        case car.carMass >= 1101 && car.carMass <= 1400:
          sum += 1.7;
          break;
        case car.carMass >= 1401:
          sum += 2;
          break;
      }
    } else if (car instanceof Sedan) {
      sum += 125;
      switch (car.carYear) {
        case car.carYear >= 1990 && car.carYear <= 1999:
          sum += 2.6;
          break;
        case car.carYear >= 2000 && car.carYear <= 2009:
          sum += 2;
          break;
        case car.carYear >= 2010 && car.carYear <= 2018:
          sum += 1.8;
          break;
        case car.carYear >= 2019:
          sum += 1.5;
          break;
      }
      switch (car.engineType) {
        case "disel":
          sum += 2.5;
          break;
        case "gas":
          sum += 1.2;
          break;
      }
      switch (car.carMass) {
        case car.carMass >= 800 && car.carMass <= 1100:
          sum += 1.6;
          break;
        case car.carMass >= 1101 && car.carMass <= 1400:
          sum += 1.8;
          break;
        case car.carMass >= 1401:
          sum += 2.1;
          break;
      }
    } else if (car instanceof Universal) {
      sum += 130;
      switch (car.carYear) {
        case car.carYear >= 1990 && car.carYear <= 1999:
          sum += 3;
          break;
        case car.carYear >= 2000 && car.carYear <= 2009:
          sum += 2.5;
          break;
        case car.carYear >= 2010 && car.carYear <= 2018:
          sum += 2.2;
          break;
        case car.carYear >= 2019:
          sum += 2;
          break;
      }
      switch (car.engineType) {
        case "disel":
          sum += 2.9;
          break;
        case "gas":
          sum += 2.4;
          break;
      }
      switch (car.carMass) {
        case car.carMass >= 800 && car.carMass <= 1100:
          sum += 1.7;
          break;
        case car.carMass >= 1101 && car.carMass <= 1400:
          sum += 1.9;
          break;
        case car.carMass >= 1401:
          sum += 2.2;
          break;
      }
    }
    finalPrice = (broken / 0.1) * sum;
    return console.log(+finalPrice.toFixed(2));
  };

  this.repair = function (car) {
    if (car.carYear < 1990) {
      return 0;
    }
    car.maintenance = 100;
    return this.calcSum(car);
  };
}
const dealer = new Dealer();
// myCar.startRide();
// myCar.endRide();
// myCar.startRide();
// myCar.endRide();
// myCar.startRide();
// myCar.endRide();
// myCar.startRide();
// myCar.endRide();
// console.log(myCar);
// dealer.calcSum(myCar);
// // dealer.repair(myCar);
// console.log(myCar);
