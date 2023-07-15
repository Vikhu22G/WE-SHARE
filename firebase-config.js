
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXolWlx3zSZCA1JE_LF_hYz8z-7weGm1s",
  authDomain: "we-share-cf948.firebaseapp.com",
  projectId: "we-share-cf948",
  storageBucket: "we-share-cf948.appspot.com",
  messagingSenderId: "154260428584",
  appId: "1:154260428584:web:d9f98c1758e8a69f98a21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStorage = getStorage();
const firebaseDatabase = getDatabase();
export { firebaseStorage, firebaseDatabase };

