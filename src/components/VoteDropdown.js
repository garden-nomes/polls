import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class VoteDropdown extends Component {
  render() {
    const { poll, onClick } = this.props;

    return (
      <UncontrolledDropdown size="sm" tag="span">
        <DropdownToggle caret>Vote</DropdownToggle>
        <DropdownMenu right>
          {poll.options.map(option => (
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
