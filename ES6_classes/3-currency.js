// 3-currency.js

export default class Currency {
  constructor(code, name) {
    this._code = this.validateCode(code);
    this._name = this.validateName(name);
  }

  // Code getter and setter with validation
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.validateCode(value);
  }

  // Name getter and setter with validation
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateName(value);
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation methods
  validateCode(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return value;
  }

  validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }
}
