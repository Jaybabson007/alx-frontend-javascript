import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  //Here we call the map method on the array [19, 20, 34], which applies the
  // provided function to each element in the array.
  // The map method returns a new array containing the ClassRoom objects
  // created by the provided function for each element in the original array.
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
