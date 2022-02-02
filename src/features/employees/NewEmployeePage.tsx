import { useHistory } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import useAddNewEmployee from "./hooks/useAddNewEmployee";

const NewEmployeePage = () => {
  const { mutate, isSuccess } = useAddNewEmployee();
  const history = useHistory();

  if (isSuccess) {
    history.push("/employees");
  }
  return <EmployeeForm employee={{}} onFormSubmit={(values) => mutate(values)} />;
};

export default NewEmployeePage;
