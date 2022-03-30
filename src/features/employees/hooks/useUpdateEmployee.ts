import axios from "axios";
import { useMutation } from "react-query";
import { constants } from "../../../shared/constants";
import Employee from "../models/employee";

const updateEmployee = async (employee: Employee) => {
  console.log("Inside updateEmployee Hook")
  const result = await axios.put(
    constants.MOCK_API_ENDPOINTS.UPDATE_EMPLOYEE(employee.id),
    employee,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return result.data;
};

const useUpdateEmployee = () => {
  return useMutation('update-employee', updateEmployee);
};

export default useUpdateEmployee;
