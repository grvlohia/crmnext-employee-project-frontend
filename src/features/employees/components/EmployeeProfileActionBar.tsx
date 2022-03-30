import { CSSProperties } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/UI/Button";
import useDeleteEmployee from "../hooks/useDeleteEmployee";

interface Props {
  employeeId: string;
  isViewPage: boolean;
}

const EmployeeProfileActionBar = (props: Props) => {
  const { employeeId, isViewPage } = props;
  const { mutate, isSuccess: deleteSuccess } = useDeleteEmployee();
  const history = useHistory();
  const ActionBarStyles: CSSProperties = {
    marginTop: "auto",
    marginLeft: "auto",
  };

  const onViewButtonClicked = () => {
    history.push(`/employees/${employeeId}`);
  };

  const onEditButtonClicked = () => {
    history.push(`/employees/${employeeId}/edit`);
  };

  const onDeleteButtonClicked = () => {
    mutate(employeeId);
  };

  if (deleteSuccess) {
    history.push("/employees");
  }
  
  return (
    <div style={ActionBarStyles}>
      <Button
        variant="primary"
        style={{ marginLeft: "5px", display: isViewPage ? 'none': undefined}}
        onClick={onViewButtonClicked}
      >
        View
      </Button>
      <Button
        variant="warning"
        style={{ marginLeft: "5px" }}
        onClick={onEditButtonClicked}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        style={{ marginLeft: "5px" }}
        onClick={onDeleteButtonClicked}
      >
        Delete
      </Button>
    </div>
  );
};

export default EmployeeProfileActionBar;
