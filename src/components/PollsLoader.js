
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPolls } from '../actions';
import LoaderButton from './LoaderButton';

export class PollsList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.reload = this.reload.bind(this);
  }

  componentWillMount() {
    const { dispatch, items } = this.props;

    if (!items || !items.length) {
      dispatch(getPolls());
    }
  }

  reload() {
    const { dispatch } = this.props;
    dispatch(getPolls());
  }

  render() {
    const { loading, error, lastUpdated, className } = this.props;

    return (
      <div className={classNames('polls-loader', className)}>
        <LoaderButton
          lastUpdated={lastUpdated}
          loading={loading}
          error={error}
          onReload={this.reload} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, error, lastUpdated, items } = state.polls;
  return { loading, error, lastUpdated, items };
};

export default connect(mapStateToProps)(PollsList);
