import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR4y2YnWZ6A1aki0VQbxf-U4H-7Lq1-yI",
  authDomain: "portfolio-apisith.firebaseapp.com",
  databaseURL:
    "https://portfolio-apisith-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-apisith",
  storageBucket: "portfolio-apisith.appspot.com",
  messagingSenderId: "820425386703",
  appId: "1:820425386703:web:de3025b5921a47f3a025ba",
  measurementId: "G-WLLLQJC21G",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
