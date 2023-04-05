import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
        return newUser.user.email;
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
      if (userLogin) {
        return userLogin.user.email;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

export const logOutUser = createAsyncThunk(
  "login/outUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return null;
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const userProfile = await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (userAuth) => {
            unsubscribe();
            resolve(userAuth);
          },
          reject
        );
      });
      if (userProfile) {
        const user = {
          uid: userProfile.uid,
          photo: userProfile.photoURL,
          email: userProfile.email,
          name: userProfile.displayName,
        };
        return user;
      } else {
        throw new Error
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

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
