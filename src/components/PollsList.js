import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import classNames from 'classnames';
import PollsLoader from './PollsLoader';
import PollsListItem from './PollsListItem';
import { votePoll } from '../actions';

export class PollsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    items: PropTypes.array
  };

  render() {
    const { loading, error, items, dispatch, className } = this.props;

    return (
      <div className={classNames('polls-list mb-4', className)}>
        <ListGroup>
          {items.map(poll => (
            <PollsListItem
              key={poll._id}
              poll={poll}
              vote={(optionId) => dispatch(votePoll(poll._id, optionId))}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, items } = state.polls;
  return { loading, error, items };
};

export default connect(mapStateToProps)(PollsList);
