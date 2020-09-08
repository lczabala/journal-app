import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFJYsWruqIYWumooTiahTpigqmPX-DHtM",
    authDomain: "juornal-app.firebaseapp.com",
    databaseURL: "https://juornal-app.firebaseio.com",
    projectId: "juornal-app",
    storageBucket: "juornal-app.appspot.com",
    messagingSenderId: "24521681535",
    appId: "1:24521681535:web:d3a0f510d61b40d4ddad4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}