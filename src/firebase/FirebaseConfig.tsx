import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNBfX8fUsC-ea7gc2j4KrGRjAselNgmoo",
  authDomain: "register-login-5653c.firebaseapp.com",
  databaseURL: "https://register-login-5653c-default-rtdb.firebaseio.com",
  projectId: "register-login-5653c",
  storageBucket: "register-login-5653c.appspot.com",
  messagingSenderId: "909930947461",
  appId: "1:909930947461:web:6b67d34b5f0b8156599aec"
};


const app = initializeApp(firebaseConfig);
export const database=getAuth(app)