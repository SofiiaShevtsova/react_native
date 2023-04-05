import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async (posts, thunkAPI) => {
    try {
      const post = await addDoc(collection(db, "posts"), { ...posts });
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
        posts.push({ ...doc.data(), id: doc.id });
      });
console.log(posts);
      return posts;
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePosts",
  async ({ id, comments }, thunkAPI) => {
    try {
      console.log(id, comments);
      const postRef = doc(db, "posts", `${id}`);

      await updateDoc(postRef, {
        comments: comments,
      });
    } catch (e) {
      return thunkAPI.rejectWithValue("Not founded!");
    }
  }
);
