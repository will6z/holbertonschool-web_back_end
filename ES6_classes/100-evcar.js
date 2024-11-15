import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class's constructor to initialize brand, motor, and color
    super(brand, motor, color);
    this._range = range; // New property for electric vehicle range
  }

  // Override cloneCar to return a Car instance, not EVCar
  cloneCar() {
    const clonedCar = super.cloneCar(); // Use the Car's clone method
    // Set the range to undefined since it's not part of Car class
    clonedCar._range = undefined;
    return clonedCar;
  }
}

