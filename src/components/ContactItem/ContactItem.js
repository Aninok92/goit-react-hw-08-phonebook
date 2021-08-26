import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { BsFillPersonFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import Button from "../Button/Button";
import s from "./ContactItem.module.scss";

const ContactItem = ({ name, number, id }) => {
  const [bgColour, setBgColour] = useState("#f08080");
  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContacts(id));

  return (
    <>
      <div className={s.wrapper}>
        <BsFillPersonFill size="28" fill="#87CEEB" />
        <p className={s.contact}>{name}</p>
        <p className={s.contact}>{number}</p>
      </div>
      <Button
        onClick={() => onDeleteContact(id)}
        style={{ backgroundColor: `${bgColour}` }}
        onMouseEnter={() => setBgColour("#e9967a")}
        onMouseLeave={() => setBgColour("#f08080")}
      >
        <ImBin /> Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
