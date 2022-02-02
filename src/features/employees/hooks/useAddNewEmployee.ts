import { useMutation } from "react-query";
import axios from "axios";
import Employee from "../models/employee";

export type NewEmployee = Omit<
  Employee,
  "employeeId" | "createdAt" | "updatedAt"
>;

const addNewEmployee = async (employee: NewEmployee) => {
  const result = await axios.post(
    "https://localhost:5001/employees",
    employee,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return result.data;
};

const useAddNewEmployee = () => useMutation("add-employee", addNewEmployee);

export default useAddNewEmployee;
