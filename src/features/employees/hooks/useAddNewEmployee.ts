import { useMutation } from "react-query";
import axios from "axios";
import Employee from "../models/employee";
import { constants } from "../../../shared/constants";

export type NewEmployee = Omit<
  Employee,
  "id" | "employeeId" | "createdAt" | "updatedAt"
>;

const addNewEmployee = async (employee: NewEmployee) => {
  const result = await axios.post(
    constants.MOCK_API_ENDPOINTS.CREATE_NEW_EMPLOYEE,
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
