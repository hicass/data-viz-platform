import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { signInWithGoogle, signOutUser } from './utils/authUtils';
import { auth } from './firebase/firebaseConfig';
import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Listener for Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state with the current authenticated user
      setUser(currentUser);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <>
          <p className='text-blue-500'>Hello, {user.displayName}</p>{' '}
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <>
          <h1 className='text-blue-500'>Hello World!</h1>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </>
      )}
    </>
  );
};

export default App;
