import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';
import PollsLoader from './PollsLoader';

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
        <PollsLoader />
        <ListGroup>
          {items.map((poll, i) => (
            <ListGroupItem key={i}>{poll.question}</ListGroupItem>
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
