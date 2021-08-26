import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import UserNav from "../UserNav";
import { userSelectors } from "../../redux/users";
import s from "./AppBar.module.scss";

const AppBar = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserNav />}
    </header>
  );
};

export default AppBar;
