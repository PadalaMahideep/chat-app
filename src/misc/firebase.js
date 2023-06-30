import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: 'AIzaSyASl7G9c-qrRWyjOaFn7u9tjWDCJ2-muKU',
  authDomain: 'chat-web-app-a92fc.firebaseapp.com',
  databaseURL: 'https://chat-web-app-a92fc-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-a92fc',
  storageBucket: 'chat-web-app-a92fc.appspot.com',
  messagingSenderId: '98301804151',
  appId: '1:98301804151:web:bc1834e2bc1966257e5072',
  measurementId: 'G-R6KTJFKE4J',
};

// Initialize Firebase
const app = firebase.initializeApp(Config);

export const auth = app.auth();
export const database = app.database();
