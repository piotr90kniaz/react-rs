import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavLinks } from './';

export const SideDrawer = () => {
  return (
    <Navbar.Offcanvas
      id="sideDrawer"
      aria-labelledby="sideDrawerLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="sideDrawerLabel">App</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <NavLinks />
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};
