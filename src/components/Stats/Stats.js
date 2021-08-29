import { useSelector } from "react-redux";
import { totalContacts } from "../../redux/contacts/contacts-selectors";
import s from "./Stats.module.scss";

const Stats = () => {
  const total = useSelector(totalContacts);
  return (
    <p className={s.text}>
      I have <span className={s.value}>{total}</span> contacts
    </p>
  );
};

export default Stats;
