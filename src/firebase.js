import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// console.log(API_KEY);
// https://firebase.google.com/docs/web/setup#available-libraries
// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "AIzaSyD0bvwTAoLigKfLXkHI7Jv - NbvVzotl4lY";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "nannyservices-39fb1.firebaseapp.com",
  projectId: "nannyservices-39fb1",
  storageBucket: "nannyservices-39fb1.appspot.com",
  messagingSenderId: "220803388055",
  appId: "1:220803388055:web:7603df6022977a70c88fd2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

const DBRef = ref(getDatabase());

export { database, DBRef };
