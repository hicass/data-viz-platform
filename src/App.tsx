import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebaseConfig';
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import UserProfile from './components/UserProfile/UserProfile';
import Auth from './components/Auth/Auth';

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
    <Router>
      <div className="lg:h-screen w-full flex flex-col lg:flex-row text-white overflow-hidden">
        <Nav user={user} />
        <Routes>
          {/* If there is a user authenticated render the Dashboard page,
           otherwise render the Auth page */}
          <Route path="/" element={user ? <Dashboard /> : <Auth />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
