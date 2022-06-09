import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyD6AUJuJB5QAYjxtDfflJoHzgmz7iLf17M",
  authDomain: "minimal-games-app.firebaseapp.com",
  projectId: "minimal-games-app",
  storageBucket: "minimal-games-app.appspot.com",
  messagingSenderId: "642662116344",
  appId: "1:642662116344:web:644320c09e356d8deb440d",
  measurementId: "G-VEY9T4NNQ2",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const firestore: Firestore = getFirestore(app);

export { firestore, auth };
