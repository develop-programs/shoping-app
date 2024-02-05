// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYrIPXuoDSxmbFMyL4mj4cEmKgrOl0Ka0",
  authDomain: "shopzo-d891c.firebaseapp.com",
  projectId: "shopzo-d891c",
  storageBucket: "shopzo-d891c.appspot.com",
  messagingSenderId: "118506143644",
  appId: "1:118506143644:web:5d09c9726bd763dea4d259",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
