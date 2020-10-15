import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAo_M7w77U9djE6q4sn12gztBhUFbA5K04",
  authDomain: "ride-system-b6e2a.firebaseapp.com",
  databaseURL: "https://ride-system-b6e2a.firebaseio.com",
  projectId: "ride-system-b6e2a",
  storageBucket: "ride-system-b6e2a.appspot.com",
  messagingSenderId: "67115443416",
  appId: "1:67115443416:web:ee8c232cfe1aacc3a2e3ad",
  measurementId: "G-07GDKSST6T"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;