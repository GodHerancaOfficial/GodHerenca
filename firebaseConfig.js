import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBRlnof_l2P5zZJCk5Wgzd_oauSC_YXqLY",
    authDomain: "godheranca-1c5f0.firebaseapp.com",
    projectId: "godheranca-1c5f0",
    storageBucket: "godheranca-1c5f0.appspot.com",
    messagingSenderId: "496569081523",
    appId: "1:496569081523:web:b342848079df3efafb9ac6",
    measurementId: "G-T3BX6RKXVQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { auth, provider, signInWithPopup };
