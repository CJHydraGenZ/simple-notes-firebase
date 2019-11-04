import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDTSUvlkc2bCDZqtO-4dri-s7AXB4NXNjc",
    authDomain: "simple-notes-firebase-18d09.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-18d09.firebaseio.com",
    projectId: "simple-notes-firebase-18d09",
    storageBucket: "simple-notes-firebase-18d09.appspot.com",
    messagingSenderId: "595328341327",
    appId: "1:595328341327:web:c1dafcfdf24e2e2774a13a",
    measurementId: "G-Y6SWPNFDQ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase