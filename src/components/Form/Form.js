import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import FormTitleAnimation from "./FormTitleAnimation.module.css";
import { connect } from "react-redux";
import actionContacts from "../../redux/contacts/actionsContacts";
uuidv4();

const HeaderText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: blue;
  font-family: sans-serif;
`;

const FormContact = styled.form`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 3px 3px 5px -1px rgba(134, 133, 245, 0.77);
  margin-bottom: 10px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 150px;
  border: 1px solid #4a86e0;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #4a86e0;
    color: #fff;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 380px;
  display: flex;
`;

const TitleSpan = styled.span`
  display: block;
  padding-right: 10px;
`;

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onChangeValue = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={FormTitleAnimation}
        >
          <HeaderText>Phonebook</HeaderText>
        </CSSTransition>
        <FormContact onSubmit={this.handleSubmit}>
          <Label>
            <TitleSpan>Name</TitleSpan>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={this.onChangeValue}
            />
          </Label>
          <Label>
            <TitleSpan>Number</TitleSpan>
            <input
              type="tel"
              placeholder="XXX-XX-XX"
              name="number"
              value={number}
              onChange={this.onChangeValue}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormContact>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: actionContacts.addContact,
};

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
