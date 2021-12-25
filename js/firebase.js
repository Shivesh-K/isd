import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpM-gK_SSR8j7AniqNZNx2ptpz65sIB9g",
    authDomain: "mess-management-isd.firebaseapp.com",
    projectId: "mess-management-isd",
    storageBucket: "mess-management-isd.appspot.com",
    messagingSenderId: "994869481650",
    appId: "1:994869481650:web:0c99d1afea9399863bb9ab"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };