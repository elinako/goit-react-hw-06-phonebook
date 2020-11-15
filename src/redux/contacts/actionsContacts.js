import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ADD, DELETE, FILTER, ALERT } from "../constants";
uuidv4();

const addContact = createAction("contacts/addContact", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contacts/deleteContact");

const filterContacts = createAction("contacts/filter");

const showAlert = createAction("contacts/showAlert");

export default {
  addContact,
  deleteContact,
  filterContacts,
  showAlert,
};
