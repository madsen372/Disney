import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzqw00U5ffLBQ7geq2y9BaYtVyBEy6cbU",
  authDomain: "disneyplus-b0cff.firebaseapp.com",
  projectId: "disneyplus-b0cff",
  storageBucket: "disneyplus-b0cff.appspot.com",
  messagingSenderId: "42173484698",
  appId: "1:42173484698:web:2be368826eda647e9e1923",
  measurementId: "G-TRS067XGYH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
