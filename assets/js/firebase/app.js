// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuuW06_4EHa-Ch2C6c_66kpu3VpLEMLSk",
  authDomain: "mundo-invertido-27736.firebaseapp.com",
  projectId: "mundo-invertido-27736",
  storageBucket: "mundo-invertido-27736.firebasestorage.app",
  messagingSenderId: "336948432053",
  appId: "1:336948432053:web:1926cb2ca4c46eba25c2fc",
  measurementId: "G-5L417G0QF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app