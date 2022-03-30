import axios from "axios";
import { useQuery } from "react-query";
import { constants } from "../../../shared/constants";
import Employee from "../models/employee";

const fetchEmployee = async (employeeId: string) => {
  const result = await axios.get(
    constants.MOCK_API_ENDPOINTS.GET_SINGLE_EMPLOYEE(employeeId)
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
