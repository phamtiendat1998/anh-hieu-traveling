import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "<YOUR_KEY>",
  authDomain: "<YOUR_KEY>",
  databaseURL: "<YOUR_KEY>",
  projectId: "<YOUR_KEY>",
  storageBucket: "<YOUR_KEY>",
  messagingSenderId: "<YOUR_KEY>",
  appId: "<YOUR_KEY>",
  measurementId: "<YOUR_KEY>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);