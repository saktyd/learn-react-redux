import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './component/Counter';

// 1. REDUCER
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// 2. STORE FROM REDUX
// PUT REDUCER INTO STORE
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
