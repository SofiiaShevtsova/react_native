import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const registerNewUser = createAsyncThunk(
  "register/addUser",
  async (user, thunkAPI) => {
    try {
      const { email, password } = user;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (newUser) {
        return newUser;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not register!");
    }
  }
);

export const logInUser = createAsyncThunk(
  "login/getUser",
  async (user, thunkAPI) => {
    try {
      const { email, password } = user;
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (userLogin) {
        return userLogin;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

export const logOutUser = createAsyncThunk(
  'login/outUser',
  async (_, thunkAPI) => {
    try {
      await signOut(auth)
      return null
    } catch (e) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);

// export const getCurrentUser = createAsyncThunk(
//   'tokin/getUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     if (!state.phonebook.refreshToken) {
//       return thunkAPI.rejectWithValue('Not founded!');
//     }
//     try {
//       const { phonebook: { refreshToken } } = state
//       const response = await axios.post('/users/refresh', { refreshToken});
//       currentToken.set(response.data.accessToken);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Not founded!');
//     }
//   }
// );

// export const changeAvatar = createAsyncThunk(
//   'avatars/change',
//   async (avatar, thunkAPI) => {
//     try {
//       console.dir(avatar);
//       const response = await axios.patch('/users/avatars', avatar, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
//       });
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Not register!');
//     }
//   }
// );

// export const getContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Not founded!');
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Can not do it!');
//     }
//   }
// );

// export const removeContact = createAsyncThunk(
//   'contacts/removeContacts',
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${id}`);
//       return id
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Can not do it!');
//     }
//   }
// );
