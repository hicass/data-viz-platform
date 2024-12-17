import { FC } from 'react';
import NavLink from './NavLink';

// Component for rending the Nav elements
const Nav: FC = () => {
  return (
    <nav className='flex w-16 justify-center items-end p-4 pb-6 '>
      <ul>
        <li>
          <NavLink href='/profile' iconPath='./assets/user.svg' />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
