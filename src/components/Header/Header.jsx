import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Redux-Boilerplate</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#about">About</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Developer Connection">
            <MenuItem eventKey={3.1} href="//github.com/re-stacks/react-redux-boilerplate" target="_blank">Github Home Page</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2} href="//github.com/re-stacks/react-redux-boilerplate/releases" target="_blank">Release Page</MenuItem>
            <MenuItem eventKey={3.3} href="//github.com/re-stacks/react-redux-boilerplate/milestones" target="_blank">Milestones</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4} href="//github.com/re-stacks/react-redux-boilerplate/issues" target="_blank">Report Issues</MenuItem>
            <MenuItem eventKey={3.5} href="//github.com/re-stacks/react-redux-boilerplate/pulls" target="_blank">Open Pull Requests</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.6} href="//github.com/re-stacks/react-redux-boilerplate" target="_blank">About React-Redux-Boilerplate</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
};
