import React, { Component } from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux';
import store from './store';
import GameBoard from './components/gameboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GameBoard />
        </div>
      </Provider>
    );
  }
}

export default App;