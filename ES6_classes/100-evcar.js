import Car from './10-car.js';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return a Car instance instead of EVCar
  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Public method to call the symbol method
  cloneCar() {
    return this[cloneSymbol]();
  }

  // Getter for the species
  get species() {
    return 'EVCar';
  }
}
