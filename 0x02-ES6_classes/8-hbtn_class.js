export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Returns the primitive value of the object, based on the specified type.
  [Symbol.toPrimitive](type) {
    return type === 'string' ? this._location : this._size;
  }
}
