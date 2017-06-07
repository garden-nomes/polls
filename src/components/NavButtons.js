import React, { Component } from 'react';
import { connect } from 'react-redux';
import TwitterLoginButton from './TwitterLoginButton';
import NewPollButton from './NewPollButton';
import UserDropdown from './UserDropdown';

class NavButtons extends Component {
  render() {
    const { me, showCreate } = this.props;

    if (me && !me.loading && !me.error) {
      return (
        <div className="nav-buttons">
          <UserDropdown me={me} />
        </div>
      );
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
