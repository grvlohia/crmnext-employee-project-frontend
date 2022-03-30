import { Col, Row } from "react-bootstrap";
import Employee from "../models/employee";
import styleClasses from "./EmployeeInfoCard.module.css";
import EmployeeProfileActionBar from "./EmployeeProfileActionBar";

interface Props {
  employee: Employee;
}

const EmployeeInfoCard = (props: Props) => {
  const getFullName = (employee: Employee) => {
    let fullName = `${employee.firstName}`;
    if (employee.middleName) {
      fullName += " " + employee.middleName;
    }
    if (employee.lastName) {
      fullName += " " + employee.lastName;
    }
    return fullName;
  };
  const { employee } = props;
  return (
    <div className={styleClasses.InfoCard}>
      <Row>
        <Col md={3}>
          <div>
            <img
              src={employee.avatar}
              className={styleClasses.ProfilePicture}
              alt=""
            />
          </div>
        </Col>
        <Col md={9} className={styleClasses.DetailsContainer}>
          <div>
            <label>Name:</label> <span>{getFullName(employee)}</span>
          </div>
          <div>
            <label>Designation:</label> <span>{employee.designation}</span>
          </div>
          <div>
            <label>Employee Code:</label> <span>{employee.employeeId}</span>
          </div>
          <div>
            <label>Group:</label> <span>{employee.group}</span>
          </div>
          <div>
            <label>Sub Group:</label> <span>{employee.subGroup}</span>
          </div>

          <EmployeeProfileActionBar employeeId={employee.id} isViewPage={false} />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeInfoCard;
