// 2-hbtn_course.js

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  // Name getter and setter with validation
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateName(value);
  }

  // Length getter and setter with validation
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateLength(value);
  }

  // Students getter and setter with validation
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudents(value);
  }

  // Validation methods
  validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
