import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBnGwgX6MPIgMW_l70vZHjoX-viT5W8fiw",
  authDomain: "reira-ba.firebaseapp.com",
  projectId: "reira-ba",
  storageBucket: "reira-ba.appspot.com",
  messagingSenderId: "685203710039",
  appId: "1:685203710039:web:4d03def085584421fdc312",
  measurementId: "G-0QM104E6DY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)