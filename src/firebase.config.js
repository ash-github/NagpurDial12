import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3TyskA6TVdDXZuPFeSxwdiCfT06RORzQ",
  authDomain: "zxcvbnm-bd9b2.firebaseapp.com",
  projectId: "zxcvbnm-bd9b2",
  storageBucket: "zxcvbnm-bd9b2.appspot.com",
  messagingSenderId: "1043120039394",
  appId: "1:1043120039394:web:71d3b7a8182012192745bb",
  measurementId: "G-74C05820H9",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
