import Container from "../../components/Container/Container";
import s from "./HomeView.module.scss";

const HomeView = () => (
  <Container>
    <div className={s.wrapper}>
      <h1 className={s.title}> Phonebook</h1>
    </div>
  </Container>
);

export default HomeView;
