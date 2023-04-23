// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnlC-gHeqeW2v0ZNWxpKvB9KiDoJPZN0",
  authDomain: "facebook-clone-10121.firebaseapp.com",
  projectId: "facebook-clone-10121",
  storageBucket: "facebook-clone-10121.appspot.com",
  messagingSenderId: "280818623182",
  appId: "1:280818623182:web:2d8725d14c076316eb669f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;