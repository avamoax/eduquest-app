import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export interface UserData {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  ageGroup: string;
  dayStreak: number;
  lastLoginDate: string;
  questionsAnswered: number;
  correctAnswers: number;
  accuracy: number;
  pets: string[];
  createdAt: string;
}

// Save or create user in Firestore
export const saveUser = async (firebaseUser: any): Promise<void> => {
  const userRef = doc(db, 'users', firebaseUser.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // New user - create record
    await setDoc(userRef, {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName || '',
      photoURL: firebaseUser.photoURL || '',
      ageGroup: '',
      dayStreak: 0,
      lastLoginDate: new Date().toISOString(),
      questionsAnswered: 0,
      correctAnswers: 0,
      accuracy: 0,
      pets: [],
      createdAt: new Date().toISOString(),
    });
  } else {
    // Existing user - update last login and streak
    const data = userSnap.data() as UserData;
    const today = new Date().toDateString();
    const lastLogin = new Date(data.lastLoginDate).toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let newStreak = data.dayStreak;
    if (lastLogin === yesterday) {
      newStreak = data.dayStreak + 1; // Consecutive day
    } else if (lastLogin !== today) {
      newStreak = 1; // Streak broken
    }

    await updateDoc(userRef, {
      lastLoginDate: new Date().toISOString(),
      dayStreak: newStreak,
    });
  }
};

// Get user data from Firestore
export const getUser = async (uid: string): Promise<UserData | null> => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? (userSnap.data() as UserData) : null;
};

// Update age group
export const updateAgeGroup = async (uid: string, ageGroup: string): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, { ageGroup });
};

// Update quiz progress
export const updateQuizProgress = async (
  uid: string,
  correct: number,
  total: number
): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return;

  const data = userSnap.data() as UserData;
  const newQuestionsAnswered = data.questionsAnswered + total;
  const newCorrectAnswers = data.correctAnswers + correct;
  const newAccuracy = Math.round((newCorrectAnswers / newQuestionsAnswered) * 100);

  await updateDoc(userRef, {
    questionsAnswered: newQuestionsAnswered,
    correctAnswers: newCorrectAnswers,
    accuracy: newAccuracy,
  });
};

// Add a pet
export const addPet = async (uid: string, petId: string): Promise<void> => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return;

  const data = userSnap.data() as UserData;
  if (!data.pets.includes(petId)) {
    await updateDoc(userRef, { pets: [...data.pets, petId] });
  }
};