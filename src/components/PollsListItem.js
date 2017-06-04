import React, { Component } from 'react';
import {
  Badge,
  ListGroupItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class PollsListItem extends Component {
  render() {
    const { poll } = this.props;

    return (
      <ListGroupItem className="d-flex justify-content-between">
        <span>
          <b>{poll.question}</b>
          {poll.options.map(option => (
            <span key={option._id} className="polls-list-item-option mx-1">
              {option.name} <Badge pill>{option.votes}</Badge>
            </span>
          ))}
        </span>

        <UncontrolledDropdown>
          <DropdownToggle caret>
            Vote
          </DropdownToggle>

          <DropdownMenu right>
            {poll.options.map(option => (
              <DropdownItem key={option._id}>{option.name}</DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </ListGroupItem>
    );
  }
}

export default PollsListItem;
