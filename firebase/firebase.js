// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR4y2YnWZ6A1aki0VQbxf-U4H-7Lq1-yI",
  authDomain: "portfolio-apisith.firebaseapp.com",
  databaseURL: "https://portfolio-apisith-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-apisith",
  storageBucket: "portfolio-apisith.appspot.com",
  messagingSenderId: "820425386703",
  appId: "1:820425386703:web:de3025b5921a47f3a025ba",
  measurementId: "G-WLLLQJC21G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

const db = getFirestore(app)
export {db}