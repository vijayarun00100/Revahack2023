import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig= {
    apiKey: "AIzaSyAz8Q7z3yVMUizHo0lDSWM_XPvCKArMMic",
    authDomain: "reva-edu.firebaseapp.com",
    projectId: "reva-edu",
    storageBucket: "reva-edu.appspot.com",
    messagingSenderId: "446136969099",
    appId: "1:446136969099:web:b7ac2970147d9ad7b2718e",
    measurementId: "G-BSJ9RC0NBW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;