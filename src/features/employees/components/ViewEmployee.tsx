import { Col, Container, Row } from "react-bootstrap";
import Panel from "../../../shared/components/UI/Panel";
import Employee from "../models/employee";
import getFullName from "../util/getFullName";
import EmployeeProfileActionBar from "./EmployeeProfileActionBar";
import InfoDetail from "./InfoDetail";

import styleClasses from "./ViewEmployee.module.css";

interface Props {
  employee: Employee;
}

const ViewEmployee = (props: Props) => {
  const { employee } = props;
  return (
    <Container>
      <Row>
        {/* Sidebar */}
        <Col md={3} className={styleClasses.Sidebar}>
          <Row>
            <Col>
              <div className={styleClasses.ProfilePictureContainer}>
                <img
                  className={styleClasses.ProfilePicture}
                  src={employee.avatar}
                  alt=""
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className={styleClasses.FullName}>{getFullName(employee)}</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <label>Employee Id:</label>
                <span>{employee.employeeId}</span>
              </div>
              <div>
                <label>Group:</label>
                <span>{employee.group}</span>
              </div>
              <div>
                <label>Sub Group:</label>
                <span>{employee.subGroup}</span>
              </div>
              <div>
                <label>Designation:</label>
                <span>{employee.designation}</span>
              </div>
              <div>
                <label>Date of Joining:</label>
                <span>{new Date(employee.dateOfJoining).toDateString()}</span>
              </div>
            </Col>
          </Row>
        </Col>
        
        <Col className={styleClasses.MainContainer}>
          {/* Employee Information */}
          <Panel
            id="employeeInformation"
            header="Employee Information"
            errors={{}}
          >
            <Row>
              <Col md={4}>
                <InfoDetail label="Group" value={employee.group} />
              </Col>
              <Col md={4}>
                <InfoDetail label="Sub Group" value={employee.subGroup} />
              </Col>
              <Col md={4}>
                <InfoDetail
                  label="Date of Joining"
                  value={new Date(employee.dateOfJoining).toDateString()}
                />
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <InfoDetail label="Designation" value={employee.designation} />
              </Col>
              <Col md={4}>
                <InfoDetail label="Employee Id" value={employee.employeeId} />
              </Col>
            </Row>
          </Panel>

          {/* Personal Information */}
          <Panel
            id="personalInformation"
            header="Personal Information"
            errors={{}}
          >
            <Row>
              <Col>
                <Row>
                  <Col md={4}>
                    <InfoDetail label="First Name" value={employee.firstName} />
                  </Col>
                  <Col md={4}>
                    <InfoDetail
                      label="Middle Name"
                      value={employee.middleName}
                    />
                  </Col>
                  <Col md={4}>
                    <InfoDetail label="Last Name" value={employee.lastName} />
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <InfoDetail label="Gender" value={employee.gender} />
                  </Col>
                  <Col md={4}>
                    <InfoDetail label="Email" value={employee.email} />
                  </Col>
                  <Col md={4}>
                    <InfoDetail label="Phone" value={employee.phone} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InfoDetail
                      label="Permanent Address"
                      value={employee.permanentAddress}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InfoDetail
                      label="Current Address"
                      value={employee.currentAddress}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Panel>

          <EmployeeProfileActionBar employeeId={employee.id} isViewPage={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default ViewEmployee;
