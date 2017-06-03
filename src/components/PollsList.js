import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import classNames from 'classnames';
import { getPolls } from '../actions';

export class PollsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    polls: PropTypes.array
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getPolls());
  }

  render() {
    const { loading, error, items, className } = this.props;

    let body;
    if (loading) {
      body = <p>Loading...</p>;
    } else if (error) {
      body = <Alert color="danger">{error.message}</Alert>
    } else {
      body = (
        <ul>
          {items.map((poll, i) => (
            <li key={i}>{poll.question}</li>
          ))}
        </ul>
      );
    }

    return (
      <div className={classNames('polls-list', className)}>
        <h3>Polls</h3>
        {body}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, items } = state.polls;
  return { loading, error, items };
};

export default connect(mapStateToProps)(PollsList);
