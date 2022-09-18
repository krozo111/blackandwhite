import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCzDPfjX4cL_-ZkttOS-ekuQr8XiT0Tc2M",
  authDomain: "blackandwhite-e821b.firebaseapp.com",
  projectId: "blackandwhite-e821b",
  storageBucket: "blackandwhite-e821b.appspot.com",
  messagingSenderId: "1025365582308",
  appId: "1:1025365582308:web:54cf1f0fe2723d9411a7f1",
  measurementId: "G-8FVQG52876"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

