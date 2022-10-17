
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_a954NT8IlK1lrTzvkzBB6yz4nl3HnmY",
  authDomain: "chat-8c075.firebaseapp.com",
  projectId: "chat-8c075",
  storageBucket: "chat-8c075.appspot.com",
  messagingSenderId: "574495610420",
  appId: "1:574495610420:web:02a727089eeb8e01715c61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage();
export const db = getFirestore();
