// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8dPtE5j4yEc8Cf-9CrV8DcrqJRGyQ4PM",
  authDomain: "shutthebox-a703f.firebaseapp.com",
  projectId: "shutthebox-a703f",
  storageBucket: "shutthebox-a703f.appspot.com",
  messagingSenderId: "103821214883",
  appId: "1:103821214883:web:66ca9ebace5088f85c2b16",
  measurementId: "G-PLXM0J83YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
