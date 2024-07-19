export default class Currency {
  constructor(code, name) {
    this._code = this.validateCode(code);
    this._name = this.validateName(name);
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.validateCode(value);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateName(value);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

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
