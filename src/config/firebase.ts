import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9iy25v25AOHL3T0BWv57tMY1J2axnaLE",
  authDomain: "eduquest-93fc8.firebaseapp.com",
  projectId: "eduquest-93fc8",
  storageBucket: "eduquest-93fc8.firebasestorage.app",
  messagingSenderId: "120915061181",
  appId: "1:120915061181:web:504b014db5bc5d7937cad4",
  measurementId: "G-QB63CT994J"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export default app;