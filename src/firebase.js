import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBdYs9YV0820sD0A7Pgz1tI-XGbG3a3548",
  authDomain: "wpclone-dee04.firebaseapp.com",
  projectId: "wpclone-dee04",
  storageBucket: "wpclone-dee04.appspot.com",
  messagingSenderId: "201084043520",
  appId: "1:201084043520:web:c0da8206194277fa7373e5",
  measurementId: "G-VKV440YNGJ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
