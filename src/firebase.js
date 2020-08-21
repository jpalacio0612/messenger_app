import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgw3y2FkIel3Ked_wdOyHDPz9wnljQB-Y",
  authDomain: "messenger-app-8d0ba.firebaseapp.com",
  databaseURL: "https://messenger-app-8d0ba.firebaseio.com",
  projectId: "messenger-app-8d0ba",
  storageBucket: "messenger-app-8d0ba.appspot.com",
  messagingSenderId: "312070474960",
  appId: "1:312070474960:web:1ee1772c86071aa8b0e2d5"
})

const db = firebaseApp.firestore()

export default db;