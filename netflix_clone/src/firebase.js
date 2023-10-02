// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDErTxpJMQp9TuJStkIVLIGn9hnN2gMD5c',
  authDomain: 'netflix-joe.firebaseapp.com',
  projectId: 'netflix-joe',
  storageBucket: 'netflix-joe.appspot.com',
  messagingSenderId: '932977347611',
  appId: '1:932977347611:web:8284dbe6c3c91c9063bcbe'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);