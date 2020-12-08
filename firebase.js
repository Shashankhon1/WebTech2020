import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5Y-5znlsrngHaEJj1OjT5vojFfGYOOCM",
    authDomain: "pack-webtech.firebaseapp.com",
    databaseURL: "https://pack-webtech.firebaseio.com",
    projectId: "pack-webtech",
    storageBucket: "pack-webtech.appspot.com",
    messagingSenderId: "639292066014",
    appId: "1:639292066014:web:2c38dace3ac9e17ceb5a4f"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.
  GoogleAuthProvider();



  export{auth,provider};
  export default db;

