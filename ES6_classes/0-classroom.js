// 0-classroom.js

// Exporting the ClassRoom class as the default export
export default class ClassRoom {
  /**
   * Creates an instance of ClassRoom.
   * @param {number} maxStudentsSize - The maximum number of students in the class.
   */
  constructor(maxStudentsSize) {
    // Assigning the maxStudentsSize parameter to the _maxStudentsSize property
    this._maxStudentsSize = maxStudentsSize;
  }
}

