import axios from "axios";
import { useQuery } from "react-query";
import { constants } from "../../../shared/constants";

const getEmployees = async () => {
    const {data: employees} =  await axios.get(constants.MOCK_API_ENDPOINTS.GET_EMPLOYEES_LIST);
    
    return employees;
}

const useEmployees = () => useQuery('employees', getEmployees);

export default useEmployees;