import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const registerNewUser = createAsyncThunk(
  "register/addUser",
  async (user, thunkAPI) => {
    try {
      const { email, password, image = "", name } = user;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (newUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        });
        return { email, name, image };
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
        throw new Error();
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);
