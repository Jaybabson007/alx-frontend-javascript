/**
 *This filters a list of students by location and returns the students from the specified city.
 *
 * @parameter {Array} students - The list of students to filter
 * @parameter {string} city - The city to filter students by
 * @return {Array} The list of students from the specified city
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    //This filters the students by city and return the result
    return students.filter((student) => student.location === city);
  }
  // If students is not an array, return an empty array
  return [];
}
