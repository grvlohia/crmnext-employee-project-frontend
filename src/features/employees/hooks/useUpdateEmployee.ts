import axios from "axios";
import { useMutation } from "react-query";
import Employee from "../models/employee";

const updateEmployee = async (employee: Employee) => {
  const result = await axios.put(
    `https://localhost:5001/employees/${employee.employeeId}`,
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
