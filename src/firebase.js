import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  // initializing the firebase app 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firestore db will allow us to keep a track of the user subscription
  const db= firebaseApp.firestore();
  // for authnetication
  const auth = firebase.auth();

  export {auth};
  export default db;
