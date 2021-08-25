import { useDispatch, useSelector } from "react-redux";
import { userOperations } from "../../redux/users";
import s from "./UserMenu.module.scss";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.users.user.name);
  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        Hi, <span className={s.userName}>{name}</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(userOperations.logOut())}
        className={s.button}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
