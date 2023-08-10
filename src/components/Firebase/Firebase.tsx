import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics"
import 'firebase/compat/auth';
import { NextOrObserver, User } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBl27YXX7Dgy5zWgkJVP_lE5u8Loh2Uw7w",
    authDomain: "terionshopping.firebaseapp.com",
    databaseURL: "https://terionshopping-default-rtdb.firebaseio.com",
    projectId: "terionshopping",
    storageBucket: "terionshopping.appspot.com",
    messagingSenderId: "658932098983",
    appId: "1:658932098983:web:f4eaad77fea2258df0b882",
    measurementId: "G-6VPKN6PBNZ"
};


const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = app.auth();

export const SignInUser = async (
    email: string, 
    password: string
) => {
    if (!email && !password) return;
    return await auth.signInWithEmailAndPassword(email, password)
}

export const SignOutUser = async () => {
    return await auth.signOut();
}