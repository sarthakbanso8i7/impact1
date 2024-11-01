// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import dotenv for environment variables
// import dotenv from "dotenv";
//  dotenv.config();
const apikey=process.env.REACT_APP_API_KEY

const firebaseConfig = {
  apiKey:"AIzaSyBn06WUCwfuYMoMtk0c_lF8xgrylXQUTLc",
  authDomain: "vidyavistar-4bc0e.firebaseapp.com",
  projectId: "vidyavistar-4bc0e",
  storageBucket: "vidyavistar-4bc0e.appspot.com",
  messagingSenderId: "626860400314",
  appId: "1:626860400314:web:3abf5bdda174f87be56c83",
  measurementId: "G-6E92MHJ316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Export the auth and db
export const auth = getAuth()
export const db = getFirestore(app)
export const storage=getStorage(app)
