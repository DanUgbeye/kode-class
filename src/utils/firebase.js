// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Settings from "./settings";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Settings.getAPIKey(),
  authDomain: Settings.getAuthDomain(),
  projectId: Settings.getProjectId(),
  storageBucket: Settings.getStorageBucket(),
  messagingSenderId: Settings.getMessagingSenderId(),
  appId: Settings.getAppId()
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;