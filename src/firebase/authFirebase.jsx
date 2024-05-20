// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtak9Iaa6VG9-eXeoD6NhL5SK1JH-ZrhE",
  authDomain: "your-restaurents.firebaseapp.com",
  projectId: "your-restaurents",
  storageBucket: "your-restaurents.appspot.com",
  messagingSenderId: "1043833091670",
  appId: "1:1043833091670:web:4600b03afd6178675b6df7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
