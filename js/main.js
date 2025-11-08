// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgiD6fcqi7-SLO5KZ0oSGteFwA-bThk1c",
  authDomain: "nhsh-deli-department-e4fd5.firebaseapp.com",
  databaseURL: "https://nhsh-deli-department-e4fd5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nhsh-deli-department-e4fd5",
  storageBucket: "nhsh-deli-department-e4fd5.firebasestorage.app",
  messagingSenderId: "1047016111279",
  appId: "1:1047016111279:web:0b35b11ab7a9bb5cff285a",
  measurementId: "G-BNCTT6H6B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//讀取訂單
import { getDatabase, ref, onValue } from "firebase/database"; 
const database = getDatabase();
const ordersRef = ref(database, 'orders/');


const menu = document.querySelector('menu');
function toggleMenu() {
    const overlay_menu = document.querySelector('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}