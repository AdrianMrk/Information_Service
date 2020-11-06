import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD7k1J8ljbXQt6GD-R0Pbw7l8gr92fNMhU",
  authDomain: "databaseapp-5d7c0.firebaseapp.com",
  databaseURL: "https://databaseapp-5d7c0.firebaseio.com",
  projectId: "databaseapp-5d7c0",
  storageBucket: "databaseapp-5d7c0.appspot.com",
  messagingSenderId: "1060424659122",
  appId: "1:1060424659122:web:4ee46851dec0ed37b899ab"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
