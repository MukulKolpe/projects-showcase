import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
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
