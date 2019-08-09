import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAw5xRWjBpwKRnCZ0arXmxpoYPykz0vPHk",
    authDomain: "niillc.firebaseapp.com",
    databaseURL: "https://niillc.firebaseio.com",
    projectId: "niillc",
    storageBucket: "niillc.appspot.com",
    messagingSenderId: "946838371853",
    appId: "1:946838371853:web:71f5b76ba14aa08b"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;