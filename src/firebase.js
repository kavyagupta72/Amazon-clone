import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0l_CfHOR3W0L6pBWJDqlaEYms06EHng",
  authDomain: "clone-4d8c1.firebaseapp.com",
  projectId: "clone-4d8c1",
  storageBucket: "clone-4d8c1.firebasestorage.app",
  messagingSenderId: "552656736304",
  appId: "1:552656736304:web:752e6bf094cde68cf9ddf5",
  measurementId: "G-S2MXPR4BZP"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };