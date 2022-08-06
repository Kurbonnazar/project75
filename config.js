import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB04rZg1IHE1v31EeOGtmzFHw-C7yJyw38",
  authDomain: "e-ride-d0afa.firebaseapp.com",
  projectId: "e-ride-d0afa",
  storageBucket: "e-ride-d0afa.appspot.com",
  messagingSenderId: "1050857065779",
  appId: "1:1050857065779:web:8da4b3e6c40c23e6cdc246"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
