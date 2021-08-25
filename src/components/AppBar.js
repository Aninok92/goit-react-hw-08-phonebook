import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import UserNav from "./UserNav";
import s from "./AppBar.module.scss";

const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserNav />}
    </header>
  );
};

export default AppBar;
