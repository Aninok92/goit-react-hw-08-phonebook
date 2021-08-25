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
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contactsReducer from "./contacts/contacts-reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./users";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const userPersistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, userReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export default { store, persistor };
