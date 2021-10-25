import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVO4uRTkpEG48UdhlP10ANeFF_scsAYQc",
  authDomain: "insta-clone-dee6d.firebaseapp.com",
  databaseURL: "https:://insta-clone-dee6d.firebaseio.com",
  projectId: "insta-clone-dee6d",
  storageBucket: "insta-clone-dee6d.appspot.com",
  messagingSenderId: "67233139537",
  appId: "1:67233139537:web:4e1a61d8e5010f82e12170",
  measurementId: "G-W2CJHS65GS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
