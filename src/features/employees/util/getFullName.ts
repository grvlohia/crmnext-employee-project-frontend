import Employee from "../models/employee";

export default function getFullName(employee: Employee): string {
  let fullName = "";
  if (employee.firstName) {
    fullName += employee.firstName;
  }

  if (employee.middleName) {
    fullName += " " + employee.middleName;
  }

  if (employee.lastName) {
    fullName += " " + employee.lastName;
  }

  return fullName.trim();
}