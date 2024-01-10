import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/todoReducer';
import { TodoState } from './types/types';

// Create Redux store with the root reducer
const store = createStore(rootReducer, { todos: [] as TodoState['todos'] });

// Render the application with Redux provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
