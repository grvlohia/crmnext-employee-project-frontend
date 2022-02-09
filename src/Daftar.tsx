import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LayoutCreator from "./features/appBuilder/LayoutCreator";
import Employees from "./features/employees/Employees";

const Daftar = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Route path="/app-builder" component={LayoutCreator} />
        <Redirect from="/" to="/employees" /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Daftar;
