import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
      General
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
