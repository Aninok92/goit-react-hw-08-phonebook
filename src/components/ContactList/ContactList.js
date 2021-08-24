import PropTypes from "prop-types";
import { useEffect } from "react";
import { ImBin } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import contactsOperations from "../../redux/contacts/contacts-operations";
import Button from "../Button/ButtonTypeButton";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ContactList.module.scss";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContacts(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <ContactItem name={name} number={number} />
            <Button onClick={() => onDeleteContact(id)}>
              <ImBin /> Delete
            </Button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
