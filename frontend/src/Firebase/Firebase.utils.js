import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA48CpfCwf0_O-uwjoXNRnTZB_mF1o3AFg",
  authDomain: "project-showcase-semester.firebaseapp.com",
  projectId: "project-showcase-semester",
  storageBucket: "project-showcase-semester.appspot.com",
  messagingSenderId: "605571654848",
  appId: "1:605571654848:web:1c2658002cc2edf4f67925",
  measurementId: "G-WZGSTMTJYS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
