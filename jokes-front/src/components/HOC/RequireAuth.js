import React, { Component } from 'react';
import Jokes from '../Jokes';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) this.props.history.push('/signin');
    }

    render() {
      return (
        <div>
          {this.props.authenticated && <Jokes />}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuth);
};