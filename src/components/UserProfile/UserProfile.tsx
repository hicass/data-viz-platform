import { FC } from 'react';
import { User } from 'firebase/auth';
import { signOutUser } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface UserProfileProps {
  user: User | null; // Props type includes the user object or null if not authenticated
}

// Component to render the users profile page
const UserProfile: FC<UserProfileProps> = ({ user }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSignOut = async () => {
    await signOutUser(navigate); // Pass navigate to signOutUser
  };

  return (
    <main className="bg-darkGrey h-screen w-full flex items-center justify-center">
      {user ? (
        // Render user profile details if the user is logged in
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Hello, {user.displayName}</h1>
          <Button
            text="Sign Out"
            style="bg-grey hover:bg-white/10 mt-6 w-fit"
            onClick={handleSignOut}
          />
        </div>
      ) : (
        // Render a message if there is no user
        <p>Please log in</p>
      )}
    </main>
  );
};

export default UserProfile;
