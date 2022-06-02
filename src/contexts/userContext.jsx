import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile 
} from "firebase/auth";

const UserContext = createContext();

const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [userError, setUserError] = useState("");


  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (user, data) => {
      return updateProfile(user, data)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    setLoading(false);
    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    loginWithGoogle,
    logout,
    userError,
    setUserError,
    updateUserProfile
  };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
