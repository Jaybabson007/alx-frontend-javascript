/**
 *This returns a list of student IDs from a list of students.
 *
 * @parameters {Array} students - The list of students
 * @return {Array} A list of student IDs
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    //This maps the students to their IDs and return the result
    return students.map((student) => student.id);
  }
  // If students is not an array, return an empty array
  return [];
}
