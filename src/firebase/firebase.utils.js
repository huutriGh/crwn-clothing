import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCo0iN_dMXDKu9XqbwMKNGYkz3hRCoM6ZU',
  authDomain: 'crwn-db-ff1ee.firebaseapp.com',
  databaseURL: 'https://crwn-db-ff1ee.firebaseio.com',
  projectId: 'crwn-db-ff1ee',
  storageBucket: 'crwn-db-ff1ee.appspot.com',
  messagingSenderId: '1078100731927',
  appId: '1:1078100731927:web:df3dabd5752cfb5ef51452',
  measurementId: 'G-351T61ZZ74'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
