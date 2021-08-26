import { useState } from "react";
import Container from "../components/Container/Container";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Section from "../components/Section/Section";
import Modal from "../components/Modal/Modal";
import { ImUserPlus } from "react-icons/im";
import Button from "../components/Button/Button";

const ContactsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColour, setBgColour] = useState("#2196f3");

  const toggleModal = () => setIsModalOpen((state) => !state);

  return (
    <Container>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Section>
            <ContactForm onSave={toggleModal} />
          </Section>
        </Modal>
      )}
      <Section title=" My Contacts List">
        <Button
          onClick={toggleModal}
          style={{ backgroundColor: `${bgColour}` }}
          onMouseEnter={() => setBgColour("#008b8b")}
          onMouseLeave={() => setBgColour("#2196f3")}
        >
          <ImUserPlus /> Add Contact
        </Button>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsView;
