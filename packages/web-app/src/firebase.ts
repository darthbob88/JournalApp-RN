import * as firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
  apiKey: "AIzaSyDfM7yr-q97YcTfRbYB9BsiQgSjUA7FiHc",
  authDomain: "journalapp-5b3fa.firebaseapp.com",
  databaseURL: "https://journalapp-5b3fa.firebaseio.com",
  projectId: "journalapp-5b3fa",
  storageBucket: "journalapp-5b3fa.appspot.com",
  messagingSenderId: "70441281267",
  appId: "1:70441281267:web:50b38ccf70d379fc517986"
};
firebase.initializeApp(firebaseConfig);
//TODO: Should I move all this to a single class or smth?
export const databaseRef = firebase.firestore();
export const firebaseAuth = firebase.auth();