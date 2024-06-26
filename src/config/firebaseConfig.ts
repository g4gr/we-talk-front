import { FIREBASE_CONFIG } from "@/private";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// FIREBASE CONFIG to auth with service/s
const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.apiKey,
  authDomain: FIREBASE_CONFIG.authDomain,
  projectId: FIREBASE_CONFIG.projectId,
  storageBucket: FIREBASE_CONFIG.storageBucket,
  messagingSenderId: FIREBASE_CONFIG.messagingSenderId,
  appId: FIREBASE_CONFIG.appId,
  measurementId: FIREBASE_CONFIG.measurementId,
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
