import axios from "axios";
import { useQuery } from "react-query";
import Employee from "../models/employee";

const fetchEmployee = async (employeeId: string) => {
  const result = await axios.get(
    `https://localhost:5001/employees/${employeeId}`
  );

  return {
    ...result.data,
    dateOfJoining: Date.parse(result.data.dateOfJoining),
    createdAt: Date.parse(result.data.createdAt),
    updatedAt: Date.parse(result.data.updatedAt),
  } as Employee;
};

const useEmployee = (employeeId: string) =>
  useQuery(["employees", employeeId], () => fetchEmployee(employeeId));

export default useEmployee;
