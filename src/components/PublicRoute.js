import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userSelectors } from "../redux/users";

const PublicRoute = ({
  children,
  redirectTo = "/",
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
