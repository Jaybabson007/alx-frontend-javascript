/*no-underscore-dangle */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * @parameter {number} sqft - square foot of building
   * @parameter {number} floors - number of floors in building
   *
   *We Implement getters and setters
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
