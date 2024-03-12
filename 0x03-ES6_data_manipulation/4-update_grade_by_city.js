/**
 * The code below updates the grades of students in a given city with new grades.
 *
 * If a student doesn’t have grade in newGrades, the final grade
 * should be N/A.
 *
 * @parameter {Array} students - The list of students to process
 * @parameter {string} city - The city to filter students by
 * @parameter {Array} newGrades - The list of new grades to use for updating
 * @return {Array} The updated list of students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Default grade value if no grade is found for a student
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      //This filters the students by city and update their grades
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        //the code below finds the corresponding new grade for this student
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
