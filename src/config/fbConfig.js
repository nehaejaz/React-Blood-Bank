import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCXN1pFGnlZGtKJy8DT2IXpQ7sgYThy7NY",
  authDomain: "react-blood-bank-aa86b.firebaseapp.com",
  databaseURL: "https://react-blood-bank-aa86b.firebaseio.com",
  projectId: "react-blood-bank-aa86b",
  storageBucket: "react-blood-bank-aa86b.appspot.com",
  messagingSenderId: "33944402447",
  appId: "1:33944402447:web:534fabb058d8dc5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
