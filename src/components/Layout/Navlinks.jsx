import { NavLink } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <>
      <NavLink to="/dashboard" className="nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/configuration" className="nav-link">
        Configuration
      </NavLink>
    </>
  );
};
