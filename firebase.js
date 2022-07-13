import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDK64j4iYVQIPkkpT3d0X9ZrFGUcaMkv9s',
  authDomain: 'clone-1681d.firebaseapp.com',
  projectId: 'clone-1681d',
  storageBucket: 'clone-1681d.appspot.com',
  messagingSenderId: '541048725659',
  appId: '1:541048725659:web:44e9a88ddc3cea9fd2a63e',
  measurementId: 'G-30MFJX2YW7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
