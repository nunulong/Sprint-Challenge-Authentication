import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return <li key={i}>{joke.setup}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
};

export default connect(mapStateToProps, { getJokes })(Jokes);