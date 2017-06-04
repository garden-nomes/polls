import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import classNames from 'classnames';
import PollsLoader from './PollsLoader';
import PollsListItem from './PollsListItem';

export class PollsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    items: PropTypes.array
  };

  render() {
    const { loading, error, items, className } = this.props;

    return (
      <div className={classNames('polls-list', className)}>
        <PollsLoader className="mb-2" />
        <ListGroup>
          {items.map(poll => (
            <PollsListItem key={poll._id} poll={poll} />
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
