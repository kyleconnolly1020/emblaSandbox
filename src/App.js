import React, { Component } from 'react';
import Home from "./components/Home";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = "Embla Sandbox";

  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
