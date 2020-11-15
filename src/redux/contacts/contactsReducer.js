import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actionContacts from "../contacts/actionsContacts";

const onAddContact = (state, action) => [...state, action.payload.contact];

const onDeleteContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const onShowAlert = (state, action) => {
  console.log("action", action.payload);
  if (
    state.contacts.some(
      (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
    )
  ) {
    return false;
  }
};

const itemsReducer = createReducer([], {
  [actionContacts.addContact]: onAddContact,
  [actionContacts.deleteContact]: onDeleteContact,
});

const filterReducer = createReducer("", {
  [actionContacts.filterContacts]: (state, action) => action.payload,
});

const alert = createReducer(false, {
  [actionContacts.showAlert]: onShowAlert,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  alert,
});
