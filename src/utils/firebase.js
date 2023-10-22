// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASVhaUUDEd68f8xBL37rHnG48obO9RuwI",
  authDomain: "netflix-a4063.firebaseapp.com",
  projectId: "netflix-a4063",
  storageBucket: "netflix-a4063.appspot.com",
  messagingSenderId: "1074812180680",
  appId: "1:1074812180680:web:99360a4fb5d2e1c47b2dfd",
  measurementId: "G-ZX8GHTZSM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
