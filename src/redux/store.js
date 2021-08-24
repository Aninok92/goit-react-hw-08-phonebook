/* eslint-disable import/no-anonymous-default-export */
// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts/contacts-reducer";

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// export default { store };

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import contactsReducer from "./contacts/contacts-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default { store };
