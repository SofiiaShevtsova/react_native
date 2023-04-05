
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

  const firebaseConfig = {
    apiKey: "AIzaSyBK9KwZF9xa31zsUjzSO5INFVVtNsVduBQ",
    authDomain: "sova-react-native.firebaseapp.com",
    projectId: "sova-react-native",
    storageBucket: "sova-react-native.appspot.com",
    messagingSenderId: "332913209039",
    appId: "1:332913209039:web:451c756ba8ad162e0011ba",
    measurementId: "G-3SYQ8NJCPF"
  };

const app = initializeApp(firebaseConfig);
  
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);


