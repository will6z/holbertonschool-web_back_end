lo// 4-pricing.js

import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateAmount(amount);
    this._currency = this.validateCurrency(currency);
  }

  // Amount getter and setter with validation
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this.validateAmount(value);
  }

  // Currency getter and setter with validation
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this.validateCurrency(value);
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }

  // Validation methods
  validateAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return value;
  }

  validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return value;
  }
}
