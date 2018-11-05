import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">The Black Pearl</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/audio">Audio</NavItem>
        <NavItem eventKey={2} href="/video">Video</NavItem>
        <NavDropdown eventKey={3} title="Admin" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action 1</MenuItem>
          <MenuItem eventKey={3.2}>Action 2</MenuItem>
          <MenuItem eventKey={3.3}>Action 3</MenuItem>
          <MenuItem divider />
        <MenuItem eventKey={3.4}>Settings</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  )
}

export default Navigation;
