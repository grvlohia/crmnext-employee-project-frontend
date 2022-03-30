import { useHistory, useParams } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import { NewEmployee } from "./hooks/useAddNewEmployee";
import useEmployee from "./hooks/useEmployee";
import useUpdateEmployee from "./hooks/useUpdateEmployee";
import Employee from "./models/employee";

const EmployeeEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const {
    data: employee,
    isLoading,
    isError,
  } = useEmployee(id);
  const { mutate, isSuccess } = useUpdateEmployee();

  if (isError) {
    return <div>Oops! Something went wrong</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onFormSubmit = (values: NewEmployee) => {
    const existingEmployee = { ...employee } as Employee;
    const updatedEmployee: Employee = {
      ...values,
      id: existingEmployee.id,
      employeeId: existingEmployee.employeeId,
      createdAt: existingEmployee.createdAt,
      updatedAt: existingEmployee.updatedAt,
    };

    mutate(updatedEmployee);
  };

  if (isSuccess) {
    history.push("/employees");
  }

  return (
    <EmployeeForm employee={employee as Employee} onFormSubmit={onFormSubmit} />
  );
};

export default EmployeeEditPage;
