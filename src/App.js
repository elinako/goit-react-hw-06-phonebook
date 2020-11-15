import React from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import SearchInput from "./components/SearchInput/SearchInput";
import Alert from "./components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import AlertAnimation from "./components/Alert/AlertAnimation.module.css";
import { connect } from "react-redux";
import styled from "styled-components";
import actionContacts from "./redux/contacts/actionsContacts";

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

const App = ({ alert, alertNotification, length }) => {
  return (
    <Container>
      <Form />
      {length > 1 && <SearchInput />}
      <ContactList />

      <CSSTransition
        in={alert}
        onEntered={() => alertNotification()}
        timeout={500}
        classNames={AlertAnimation}
        unmountOnExit
      >
        <Alert />
      </CSSTransition>
    </Container>
  );
};

// componentDidMount() {
//   if (localStorage.getItem("contacts") !== null) {
//     const contactsFromStorage = localStorage.getItem("contacts");
//     this.setState({ contacts: JSON.parse(contactsFromStorage) });
//   }
// }

// componentDidUpdate(prevState) {
//   if (prevState !== this.state) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

const mapStateToProps = (state) => {
  const contacts = state.contacts.items.length;
  return {
    alert: state.contacts.alert,
    length: contacts,
  };
};
const mapDispatchToProps = {
  alertNotification: actionContacts.setVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
