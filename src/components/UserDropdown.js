import React, { Component } from 'react';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const UserDropdown = ({ me }) => (
  <UncontrolledButtonDropdown size="sm">
    <DropdownToggle caret>
      {me.name}
    </DropdownToggle>

    <DropdownMenu right>
      <DropdownItem><FontAwesome name="bar-chart" /> My polls</DropdownItem>
      <DropdownItem><FontAwesome name="sign-out" /> Sign out</DropdownItem>
    </DropdownMenu>
  </UncontrolledButtonDropdown>
);

export default UserDropdown;
