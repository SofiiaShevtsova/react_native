import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async (posts, thunkAPI) => {
    try {
      const post = await addDoc(collection(db, "posts"), { ...posts });
      if (post) {
        return posts;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

export const getAllPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });

      return posts;
    } catch (e) {
      return thunkAPI.rejectWithValue("Not register!");
    }
  }
);
