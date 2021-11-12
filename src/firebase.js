import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB564RgIVRztdONc3gWKA29GB6M1NjW5sw",
    authDomain: "sabha-ab5a8.firebaseapp.com",
    projectId: "sabha-ab5a8",
    storageBucket: "sabha-ab5a8.appspot.com",
    messagingSenderId: "986286303756",
    appId: "1:986286303756:web:befbc01f80628d5b7d1c29",
    measurementId: "G-QC3PXMTKS7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;