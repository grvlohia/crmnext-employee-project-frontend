import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Employees from "./features/employees/Employees";

const Daftar = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Redirect from="/" to="/employees" /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Daftar;
