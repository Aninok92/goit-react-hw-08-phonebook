import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOperations } from "../../redux/users";
import { userSelectors } from "../../redux/users";
import { ImExit } from "react-icons/im";
import Button from "../Button/Button";
import s from "./UserMenu.module.scss";

const UserMenu = () => {
  const [bgColour, setBgColour] = useState("#a1a1a4");
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUsername);
  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        Hi, <span className={s.userName}>{name}</span>
      </p>
      <Button
        onClick={() => dispatch(userOperations.logOut())}
        style={{ backgroundColor: `${bgColour}` }}
        onMouseEnter={() => setBgColour("#8f8f8c")}
        onMouseLeave={() => setBgColour("#a1a1a4")}
      >
        <ImExit />
      </Button>
    </div>
  );
};

export default UserMenu;
