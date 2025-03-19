// src/firebase/auth-service.js
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile
  } from "firebase/auth";
  import { auth } from "./firebase";
  
  // Register a new user
  export const registerUser = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Add display name to the user
      await updateProfile(userCredential.user, { displayName });
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Login with email and password
  export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
  
  // Logout the current user
  export const logoutUser = async () => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      throw error;
    }
  };
  
  // Send password reset email
  export const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      throw error;
    }
  };
  
  // Get current authenticated user
  export const getCurrentUser = () => {
    return auth.currentUser;
  };