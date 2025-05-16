// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSlQo71S_ZznLRkmNhxh0ZfZSVvRPDRK8",
    authDomain: "expense-tracker-64cd8.firebaseapp.com",
    projectId: "expense-tracker-64cd8",
    storageBucket: "expense-tracker-64cd8.firebasestorage.app",
    messagingSenderId: "1048668304676",
    appId: "1:1048668304676:web:7dd660500a8122f90a2fb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
