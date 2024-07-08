// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgj-2ixhAc_oS4BR6AYdU13XQwqTiXCug",
  authDomain: "netflixgpt-ea6fc.firebaseapp.com",
  projectId: "netflixgpt-ea6fc",
  storageBucket: "netflixgpt-ea6fc.appspot.com",
  messagingSenderId: "237789273448",
  appId: "1:237789273448:web:47ccf84fc36da68c440add",
  measurementId: "G-PBQ129EPRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();