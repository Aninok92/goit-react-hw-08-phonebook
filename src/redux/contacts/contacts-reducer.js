import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";

import contactsOperations from "./contacts-operations";

const items = createReducer([], {
  [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContacts.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [contactsOperations.deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [contactsOperations.fetchContacts.pending]: () => true,
  [contactsOperations.fetchContacts.fulfilled]: () => false,
  [contactsOperations.fetchContacts.rejected]: () => false,

  [contactsOperations.addContacts.pending]: () => true,
  [contactsOperations.addContacts.fulfilled]: () => false,
  [contactsOperations.addContacts.rejected]: () => false,

  [contactsOperations.deleteContacts.pending]: () => true,
  [contactsOperations.deleteContacts.fulfilled]: () => false,
  [contactsOperations.deleteContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [contactsOperations.fetchContacts.rejected]: (_, action) => action.payload,
  [contactsOperations.fetchContacts.pending]: () => null,

  [contactsOperations.addContacts.rejected]: (_, action) => action.payload,
  [contactsOperations.addContacts.pending]: () => null,

  [contactsOperations.deleteContacts.rejected]: (_, action) => action.payload,
  [contactsOperations.deleteContacts.pending]: () => null,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
