import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectors } from "../../redux/users";
import s from "./Navigation.module.scss";

const Navigation = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        General
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
