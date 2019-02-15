import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <p>Clicked: {this.props.counter} times.</p>
        <p>
          <button>INCREMENT</button>
          <button>DECREMENT</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Counter);
