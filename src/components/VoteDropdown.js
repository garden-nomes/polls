import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import StatusIcon from './StatusIcon';

class VoteDropdown extends Component {
  render() {
    const { poll, onClick } = this.props;

    return (
      <span className="vote-dropdown">
        <StatusIcon
          className="mr-1"
          loading={poll.loading}
          error={poll.error}
          lastUpdated={poll.lastUpdated}
        />

        <UncontrolledDropdown tag="span">
          <DropdownToggle caret>Vote</DropdownToggle>
          <DropdownMenu right>
            {poll.options.map(option => (
              <DropdownItem key={option._id} onClick={() => onClick(option._id)}>
                {option.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </span>
    );
  }
}

export default VoteDropdown;
