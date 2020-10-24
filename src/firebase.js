import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhoSw92isGSWXpfLnRsZO3kSdCnETehPw",
  authDomain: "tight-shola.firebaseapp.com",
  databaseURL: "https://tight-shola.firebaseio.com",
  projectId: "tight-shola",
  storageBucket: "tight-shola.appspot.com",
  messagingSenderId: "973193815525",
  appId: "1:973193815525:web:8e6efdccbe4937f3b0bb0c",
  measurementId: "G-JVHN83KPFW"
};

  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;

  