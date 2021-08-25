import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ContactsView from "./views/ContactsView";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import { userOperations } from "./redux/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        {/* <Route path="/contacts">
          <ContactsView />
        </Route> */}
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Container>
  );
}

export default App;
