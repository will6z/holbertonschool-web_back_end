import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1); // Should log: TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
console.log(tc1 instanceof TestCar); // Should log: true

console.log(tc2); // Should log: TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
console.log(tc2 instanceof TestCar); // Should log: true

console.log(tc1 == tc2); // Should log: false (tc1 and tc2 are different instances)

