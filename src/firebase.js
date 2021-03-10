import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGo-spQtDL4tDvs-G4PlUWigum4cbkIv0",
  authDomain: "build-1ced8.firebaseapp.com",
  projectId: "build-1ced8",
  storageBucket: "build-1ced8.appspot.com",
  messagingSenderId: "58166746562",
  appId: "1:58166746562:web:e87c2e413640e129fe0a5b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
