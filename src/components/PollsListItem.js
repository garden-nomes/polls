import React, { Component } from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';
import moment from 'moment';
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
        <span className="no-wrap mr-auto">
          <b>{poll.question}</b>
          {poll.options.sort((a, b) => a.votes < b.votes).map(option => (
            <span key={option._id} className="polls-list-item-option mx-1">
              {option.name} <Badge color="info" pill>{option.votes}</Badge>
            </span>
          ))}
        </span>

        <span className="small no-wrap text-muted mx-2">
          Created {moment(poll.createdAt).fromNow()}
        </span>

        <StatusIcon
          className="mr-2"
          loading={poll.loading}
          error={poll.error}
          lastUpdated={poll.lastUpdated}
        />

        <VoteDropdown poll={poll} loading={poll.loading} onClick={vote} />
      </ListGroupItem>
    );
  }
}

export default PollsListItem;
