import React, { Component } from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import VoteDropdown from './VoteDropdown';

class PollsListItem extends Component {
  render() {
    const { poll, vote } = this.props;

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

        <VoteDropdown options={poll.options} onClick={vote} />
      </ListGroupItem>
    );
  }
}

export default PollsListItem;
