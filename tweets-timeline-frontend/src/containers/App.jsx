import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import TweetApp from './TweetApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {
    render() {
        return (
          <div>
            <Provider store={store}>
              <TweetApp />
            </Provider>
          </div>
        );
      }
  }
  
  export default App;