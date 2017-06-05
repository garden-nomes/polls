import React, { Component } from 'react';
import { connect } from 'react-redux';
import TwitterLoginButton from './TwitterLoginButton';

class NavButtons extends Component {
  render() {
    const { me } = this.props;

    if (me) {
      return <div>{me.name}</div>;
    } else {
      return <TwitterLoginButton />;
    }
  }
}

const mapStateToProps = (state) => {
  const { me } = state.users;
  return { me };
};

export default connect(mapStateToProps)(NavButtons);
