
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB10bUw9YXPtHawRhGS5qgs1sZlRP-P9gg",
  authDomain: "ch-react49890-fgiribone.firebaseapp.com",
  projectId: "ch-react49890-fgiribone",
  storageBucket: "ch-react49890-fgiribone.appspot.com",
  messagingSenderId: "735157813750",
  appId: "1:735157813750:web:8c527763e75d9e9ef907d7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db }