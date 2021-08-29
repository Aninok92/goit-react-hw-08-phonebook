import { useState } from "react";
import Container from "../components/Container/Container";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Section from "../components/Section/Section";
import Modal from "../components/Modal/Modal";
import Stats from "../components/Stats/Stats";
import { ImUserPlus } from "react-icons/im";
import Button from "../components/Button/Button";
import s from "./ContactsView.module.scss";

const ContactsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColour, setBgColour] = useState("#2196f3");

  const toggleModal = () => setIsModalOpen((state) => !state);

  return (
    <Container>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Section title="New Contact">
            <ContactForm onSave={toggleModal} />
          </Section>
        </Modal>
      )}
      <Section title="My Contacts List">
        <div className={s.wrapper}>
          <Button
            onClick={toggleModal}
            style={{ backgroundColor: `${bgColour}` }}
            onMouseEnter={() => setBgColour("#008b8b")}
            onMouseLeave={() => setBgColour("#2196f3")}
          >
            <ImUserPlus /> Add Contact
          </Button>
          <Stats />
        </div>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsView;
