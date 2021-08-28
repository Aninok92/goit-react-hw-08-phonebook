import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loader from "./components/Loader/Loader";
import { userOperations } from "./redux/users";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const LoginView = lazy(() => import("./views/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

const App = () => {
  const isFetchingCurrentUser = useSelector(
    (state) => state.users.isFetchingCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
        <Toaster position="top-center" />
      </Container>
    )
  );
};

export default App;
