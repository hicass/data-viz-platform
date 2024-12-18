import { FC } from 'react';
import { User } from 'firebase/auth';
import NavLink, { NavLinkType } from './NavLink';

interface NavProps {
  user: User | null; // Props type includes the user object or null if not authenticated
}

// Array of navigation links with href and icon path
const navLinks: NavLinkType[] = [
  { href: '/', iconPath: './assets/hamburger.svg' },
  { href: '/', iconPath: './assets/home.svg' },
  { href: '/', iconPath: './assets/bell.svg' },
  { href: '/', iconPath: './assets/clipboard-text-clock.svg' },
  { href: '/', iconPath: './assets/cloud-upload.svg' },
  { href: '/', iconPath: './assets/cog.svg' },
];

// Component for rending the Nav elements
const Nav: FC<NavProps> = ({ user }) => {
  return (
    <nav className="w-16 p-4 pb-6">
      <ul className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6 mt-2">
          {/* Iterate over navLinks array and render NavLink components */}
          {navLinks.map((link, idx) => (
            <NavLink href={link.href} iconPath={link.iconPath} key={idx} />
          ))}
        </div>

        <li>
          {/* If there is a user render the profile page link */}
          {user && <NavLink href="/profile" iconPath="./assets/user.svg" />}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
