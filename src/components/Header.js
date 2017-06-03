import React, { Component } from 'react';
import classNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { className } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classNames('header', className)}>
        <Navbar light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="#">Pollstr</NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Create poll</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">My polls</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
