import axios from "axios";
import { useMutation } from "react-query";
import { constants } from "../../../shared/constants";

const deleteEmployee = async (employeeId: string) => {
    const result = await axios.delete(constants.MOCK_API_ENDPOINTS.DELETE_EMPLOYEE(employeeId));
    return result.data;
}

const useDeleteEmployee = () => {
    return useMutation('delete-employee', deleteEmployee);
}

export default useDeleteEmployee;