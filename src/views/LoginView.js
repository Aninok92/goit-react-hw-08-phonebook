import { useState } from "react";
import { useDispatch } from "react-redux";
import { userOperations } from "../redux/users";
import s from "../components/ContactForm/ContactForm.module.scss";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div>
      <h2>Welcome Back</h2>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <span className={s.labelText}>Mail</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="qwerty@gmail.com"
            onChange={handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
            // id={numberInputId}
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
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
            // id={numberInputId}
          />
        </label>

        <button
          type="submit"
          className={s.button}
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
