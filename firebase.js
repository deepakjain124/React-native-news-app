// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {doc, getFirestore, setDoc} from "firebase/firestore"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyKP86dQpf65XY4qQae1uLayxCOzxR6XA",
  authDomain: "fir-otp-f2441.firebaseapp.com",
  projectId: "fir-otp-f2441",
  storageBucket: "fir-otp-f2441.appspot.com",
  messagingSenderId: "483290911237",
  appId: "1:483290911237:web:452440e1c7905cc088826c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)

export const registerWithEmailAndPassword = async (email,password,name,showlogin) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // sessionStorage.setItem("Auth_token", res.user.accessToken);
    console.log("user", user);
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      password,
    });
   console.log("successfull")
   showlogin()
  } catch (err) {
    Alert.alert(err.message)
    console.log(err.message,"hiii");
  }
};

export const LogInWithEmailAndPassword = async (email, password,navigate) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    // const user = localStorage.setItem("user", auth.currentUser.uid);
    Alert.alert("Wooho you are login successfully");
    navigate()
  } catch (err) {
    Alert.alert(err.message);
  }
};