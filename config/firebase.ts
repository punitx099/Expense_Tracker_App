// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKB4J2SCkSNC2fFXD5LVBSjlZiIf3yxew",
  authDomain: "expense-tracker-49.firebaseapp.com",
  projectId: "expense-tracker-49",
  storageBucket: "expense-tracker-49.firebasestorage.app",
  messagingSenderId: "684452018102",
  appId: "1:684452018102:web:090213828c30fa85293317",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const firestore = getFirestore(app);
