export default function createReportObject(employeesList) {
//This function returns an object with the allEmployees object and a method to get the
// number of departments
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
//This return no of keys in the allEmployees object which represents the
// number of departments
      return Object.keys(employeesList).length;
    },
  };
}
