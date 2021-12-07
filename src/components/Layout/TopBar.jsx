import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { NavLinks, SideDrawer } from './';

export const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container className="d-xs-flex d-md-none justify-content-end">
        <Navbar.Toggle aria-controls="sideDrawer" />
        <SideDrawer />
      </Container>
      <Container>
        <Nav className="d-none d-md-flex">
          <NavLinks />
        </Nav>
      </Container>
    </Navbar>
  );
};
