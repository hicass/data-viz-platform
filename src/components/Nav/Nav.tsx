import { FC } from 'react';
import { User } from 'firebase/auth';
import NavLink from './NavLink';

interface NavProps {
  user: User | null; // Props type includes the user object or null if not authenticated
}

// Component for rending the Nav elements
const Nav: FC<NavProps> = ({ user }) => {
  return (
    <nav className="flex w-16 justify-center items-end p-4 pb-6 ">
      <ul>
        <li>
          {/* If there is a user render the profile page link */}
          {user && <NavLink href="/profile" iconPath="./assets/user.svg" />}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
