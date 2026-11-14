// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD9EpRQLsVTD1rmjHXtXvL8l6g-ezEpnQM",
  authDomain: "blog-app-32145.firebaseapp.com",
  projectId: "blog-app-32145",
  storageBucket: "blog-app-32145.firebasestorage.app",
  messagingSenderId: "703336780183",
  appId: "1:703336780183:web:caf6b8ccdf27a70ea134d2",
  measurementId: "G-GFMDGFXP3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth