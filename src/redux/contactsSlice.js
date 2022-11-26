import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
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
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const persistConfig = { key: 'contacts', storage };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
