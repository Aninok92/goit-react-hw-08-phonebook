import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userSelectors } from "../redux/users";

const PrivateRoute = ({ children, redirectTo = "/", ...routeProps }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
