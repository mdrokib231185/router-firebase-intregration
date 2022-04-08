// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy8I9dbPMZ8csSAVEsl8KN_FOUhgyMvzs",
  authDomain: "react-firebaser-intregation.firebaseapp.com",
  projectId: "react-firebaser-intregation",
  storageBucket: "react-firebaser-intregation.appspot.com",
  messagingSenderId: "462687074091",
  appId: "1:462687074091:web:65cf77f3500854d8e4f76e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app