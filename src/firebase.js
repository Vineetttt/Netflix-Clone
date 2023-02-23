import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAbtdEyv9nJewGQHbsrHTxuzbqb6fYsHpw",
    authDomain: "netflix-clone-a7ed4.firebaseapp.com",
    projectId: "netflix-clone-a7ed4",
    storageBucket: "netflix-clone-a7ed4.appspot.com",
    messagingSenderId: "737874571367",
    appId: "1:737874571367:web:eee08280a10f9e34c664c2"
  };

  // initializing the firebase app 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firestore db will allow us to keep a track of the user subscription
  const db= firebaseApp.firestore();
  // for authnetication
  const auth = firebase.auth();

  export {auth};
  export default db;
