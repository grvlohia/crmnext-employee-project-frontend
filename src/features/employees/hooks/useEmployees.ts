import axios from "axios";
import { useQuery } from "react-query";

const getEmployees = async () => {
    const {data: employees} =  await axios.get('https://localhost:5001/employees');
    
    return employees;
}

const useEmployees = () => useQuery('employees', getEmployees);

export default useEmployees;