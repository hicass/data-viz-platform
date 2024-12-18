import { FC } from 'react';
import { Link } from 'react-router-dom';

export type NavLinkType = {
  href: string; // href string for the link
  iconPath: string; // The path to the icon image displayed in the link
};

// Component to render a navigation link with an icon
const NavLink: FC<NavLinkType> = ({ href, iconPath }) => {
  return (
    <Link to={href}>
      <img src={iconPath} className="opacity-70 hover:opacity-100" />
    </Link>
  );
};

export default NavLink;
