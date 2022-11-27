import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsSlice = createSlice({
  name: 'Mycontacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: shortid.generate(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.contacts.findIndex(
          task => task.id === action.payload
        );
        state.contacts.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
