/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const getContacts = () => {
  return axios.get("/contacts");
};

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export default {
  fetchContacts,
  addContacts,
  deleteContacts,
};
