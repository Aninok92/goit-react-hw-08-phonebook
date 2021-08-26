import { useState } from "react";
import { useDispatch } from "react-redux";
import { userOperations } from "../redux/users";
import Button from "../components/Button/Button";
import s from "../components/ContactForm/ContactForm.module.scss";

const RegisterView = () => {
  const [bgColour, setBgColour] = useState("#2196f3");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
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
    dispatch(userOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <span className={s.labelText}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="Adrian"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
            // id={nameInputId}
          />
        </label>

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
        <Button
          style={{ backgroundColor: `${bgColour}` }}
          type={"submit"}
          onMouseEnter={() => setBgColour("#008b8b")}
          onMouseLeave={() => setBgColour("#2196f3")}
          disabled={!name || !email || !password}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
