import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const getAllPosts = createAsyncThunk(
  "posts/getPosts",
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
        })
        return email;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not register!");
    }
  }
);

export const addPosts = createAsyncThunk(
  "posts/addPosts",
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

