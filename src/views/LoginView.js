import { useState } from "react";
import { useDispatch } from "react-redux";
import { userOperations } from "../redux/users";
import { nanoid } from "nanoid";
import Button from "../components/Button/Button";
import s from "./LoginView.module.scss";

const LoginView = () => {
  const [bgColour, setBgColour] = useState("#2196f3");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <div className={s.formPage}>
      <h2 className={s.title}>Welcome Back</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.labelText}>Mail</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="qwerty@gmail.com"
            onChange={handleChange}
            autoComplete="off"
            id={emailInputId}
          />
        </label>

        <label className={s.label}>
          <span className={s.labelText}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="*******"
            onChange={handleChange}
            autoComplete="off"
            id={passwordInputId}
          />
        </label>
        <Button
          style={{ backgroundColor: `${bgColour}` }}
          type={"submit"}
          onMouseEnter={() => setBgColour("#008b8b")}
          onMouseLeave={() => setBgColour("#2196f3")}
          disabled={!email || !password}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginView;
