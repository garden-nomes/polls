import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class VoteDropdown extends Component {
  render() {
    const { options, onClick } = this.props;

    return (
      <UncontrolledDropdown>
        <DropdownToggle caret>Vote</DropdownToggle>
        <DropdownMenu right>
          {options.map(option => (
            <DropdownItem key={option._id} onClick={() => onClick(option._id)}>
              {option.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default VoteDropdown;
