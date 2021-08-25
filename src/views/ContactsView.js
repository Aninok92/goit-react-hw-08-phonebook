import Container from "../components/Container/Container";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Section from "../components/Section/Section";

function ContactsView() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default ContactsView;
