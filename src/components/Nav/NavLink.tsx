import { FC } from 'react';
import { Link } from 'react-router-dom';

type NavLinkType = {
  href: string; // href string for the link
  iconPath: string; //
};

const NavLink: FC<NavLinkType> = ({ href, iconPath }) => {
  return (
    <Link to={href}>
      <img src={iconPath} className='opacity-70 hover:opacity-100'/>
    </Link>
  );
};

export default NavLink;