import React, { Component } from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';
import VoteDropdown from './VoteDropdown';
import StatusIcon from './StatusIcon';

class PollsListItem extends Component {
  render() {
    const { poll, vote, className } = this.props;

    return (
      <ListGroupItem
        action
        className={classNames(
          className,
          'poll-list-item',
          'd-flex',
          'flex-nowrap',
          'align-content-start',
          'justify-content-between'
        )}
      >
        <span className="no-wrap mr-2">
          <b>{poll.question}</b>
          {poll.options.sort(poll => -poll.votes).map(option => (
            <span key={option._id} className="polls-list-item-option mx-1">
              {option.name} <Badge color="info" pill>{option.votes}</Badge>
            </span>
          ))}
        </span>

        <StatusIcon
          className="mr-2 ml-auto"
          loading={poll.loading}
          error={poll.error}
          lastUpdated={poll.lastUpdated}
        />

        <VoteDropdown poll={poll} onClick={vote} />
      </ListGroupItem>
    );
  }
}

export default PollsListItem;
