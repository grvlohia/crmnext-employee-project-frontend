import { Container } from "react-bootstrap";
import useEmployees from "../hooks/useEmployees";
import EmployeeInfoCard from "./EmployeeInfoCard";
import styleClasses from "./EmployeeList.module.css";
import Button from "../../../shared/components/UI/Button";
import { useHistory } from "react-router-dom";

const EmployeeList = () => {
  const { data, error, isLoading } = useEmployees();
  const history = useHistory();

  const onCreateButtonClicked = () => {
    history.push('/employees/new');
  }

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>Oops! Something went wrong!</div>)
  }
  return (
    <Container className={styleClasses.ListContainer}>
      <div>
        {data.map((employee) => (
          <EmployeeInfoCard employee={employee} key={employee.employeeId} />
        ))}
      </div>
      <Button
        variant="success"
        onClick={onCreateButtonClicked}
      >Create</Button>
    </Container>
  );
};

export default EmployeeList;
