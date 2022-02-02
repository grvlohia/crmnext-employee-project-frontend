import { useParams } from "react-router-dom";
import ViewEmployee from "./components/ViewEmployee";
import useEmployee from "./hooks/useEmployee";

const ViewEmployeePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: employee, isFetching, error } = useEmployee(id);

  if (error) {
    return <div>Oops! Something went wrong</div>;
  }

  if (isFetching || !employee) {
    return <div>Loading...</div>;
  }

  return <ViewEmployee employee={employee} />
};

export default ViewEmployeePage;
