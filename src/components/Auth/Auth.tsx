import { FC } from 'react';
import { signInWithGoogle } from '../../utils/authUtils';
import Button from '../ui/Button';

// Component for Authentication page
const Auth: FC = () => {
  return (
    <main className="bg-darkGrey h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">Hello!</h1>
        {/* Button to sign in with Google */}
        <Button
          text="Sign In With Google"
          style="bg-grey hover:bg-white/10 mt-6 w-fit"
          onClick={signInWithGoogle}
        />
      </div>
    </main>
  );
};

export default Auth;
