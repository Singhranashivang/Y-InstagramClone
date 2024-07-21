import firebase from "firebase";


  
  const firebaseConfig = {
    apiKey: "AIzaSyB0ksnGyhmhQpWrZbZ732mSOpwLtkVd6zo",
    authDomain: "insta-3b05a.firebaseapp.com",
    projectId: "insta-3b05a",
    storageBucket: "insta-3b05a.appspot.com",
    messagingSenderId: "739246855786",
    appId: "1:739246855786:web:a84d83bbd0e38e31da1c13",
    measurementId: "G-G7TN435CYT"
  };

  
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
