import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const UserNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Registration
    </NavLink>

    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default UserNav;
