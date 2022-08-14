// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdhDRiurLeA5VOj74YF2KVqGhXaFJegHo",
  authDomain: "linkedln-clone-e95c7.firebaseapp.com",
  projectId: "linkedln-clone-e95c7",
  storageBucket: "linkedln-clone-e95c7.appspot.com",
  messagingSenderId: "977147542123",
  appId: "1:977147542123:web:d7109956fa7172a4114f2e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
