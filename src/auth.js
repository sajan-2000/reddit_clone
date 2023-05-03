import {app} from "./firebase";
import { getAuth,GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const LoginWithGoogle = async () => {
    try{
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        return new Promise((resolve,reject) => resolve(user))
        
    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error while logging in");
        return new Promise((resolve,reject) => resolve(null))
    };
}

export const signOutUser = async () => {
    try{
        const result = await signOut(auth);
        console.log("user loged out");
        return new Promise((resolve,reject) => resolve("user logged out"));
    }
    catch(error) {
        console.log("error while signing out")
        return new Promise((resolve,reject) => reject("error while signing out"))
    };
}

export const loginPersistence = async (cbSetUser) => {
    try{
        onAuthStateChanged(auth, cbSetUser);
    }catch(error){
        console.error(error);
    }
}