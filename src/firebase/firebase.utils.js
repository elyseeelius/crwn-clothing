import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDizJG6VaozQ_BCmR9h9IwbjOaNWxLVeRA",
    authDomain: "crwn-db-90ace.firebaseapp.com",
    databaseURL: "https://crwn-db-90ace.firebaseio.com",
    projectId: "crwn-db-90ace",
    storageBucket: "crwn-db-90ace.appspot.com",
    messagingSenderId: "582461205377",
    appId: "1:582461205377:web:964f6db423a11b8b7e9680",
    measurementId: "G-TMNE61GENE"
  }

  firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestroe = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;