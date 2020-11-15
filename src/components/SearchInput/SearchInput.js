import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actionContacts from "../../redux/contacts/actionsContacts";

const Input = styled.input`
  width: 395px;
  border: 2px solid paleviolet;
  margin-bottom: 20px;
  height: 30px;
`;

const SearchInput = ({ value, onChangeSearchInput }) => {
  return (
    <>
      <p>Find contact by name:</p>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChangeSearchInput(e.target.value)}
        placeholder="Enter name to search"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeSearchInput: actionContacts.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

SearchInput.propTypes = {
  onChangeSearchInput: PropTypes.func,
};
