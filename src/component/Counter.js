import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <p>Clicked: 0 times.</p>
        <p>
          <button>INCREMENT</button>
          <button>DECREMENT</button>
        </p>
      </div>
    );
  }
}

export default Counter;
