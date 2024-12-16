import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

// handleSignIn triggers the Google sing-in popup using Firebase, and updates
// the authentication state automatically via Firebase's listeners.
export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Successfully Signed In:', result.user.displayName);
  } catch (error: unknown) {
    // Handle errors that might come up during the authentication process
    if (error instanceof Error) {
      console.error('Error during sign-in:', error.message);
    }
  }
};

// handleSignOut signs the user out of the app
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('User Signed Out');
  } catch (error: unknown) {
    // Handle errors that might come up during the sign-out process
    if (error instanceof Error) {
      console.error('Error during sign-out:', error.message);
    }
  }
};
