import { Route, Switch } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeEditPage from "./EmployeeEditPage";
import NewEmployeePage from "./NewEmployeePage";
import ViewEmployeePage from "./ViewEmployeePage";

const Employees = () => {
    return (
        <Switch>
            <Route exact path="/employees" component={EmployeeList} />
            <Route exact path="/employees/new" component={NewEmployeePage} />
            <Route exact path="/employees/:id" component={ViewEmployeePage}/>
            <Route exact path="/employees/:id/edit" component={EmployeeEditPage} />
        </Switch>
    )
}

export default Employees;