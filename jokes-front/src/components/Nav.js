import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {

  getLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/signup">Sign Up</Link>
      </li>,
      <li key={2}>
        <Link to="/signin">Sign In</Link>
      </li>
    ];
  }

  render() {
    return (
      <div>
        <Link to="/">Back Home</Link>
        {this.getLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
};

export default connect(mapStateToProps)(Nav);