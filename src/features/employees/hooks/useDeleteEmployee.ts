import axios from "axios";
import { useMutation } from "react-query";

const deleteEmployee = async (employeeId: string) => {
    const result = await axios.delete(`https://localhost:5001/employees/${employeeId}`);
    return result.data;
}

const useDeleteEmployee = () => {
    return useMutation('delete-employee', deleteEmployee);
}

export default useDeleteEmployee;