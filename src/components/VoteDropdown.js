import React, { Component } from 'react';
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class VoteDropdown extends Component {
  render() {
    const { poll, onClick, loading } = this.props;

    return (
      loading ?
        <Button color="secondary" size="sm" disabled>Voting...</Button> :
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
