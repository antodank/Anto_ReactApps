import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { switchCase } from '@babel/types';

import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootreducer } from './reducers/index.js'



// ACTION
// const increment = () =>
// {
//   return {
//     type: "INCREMENT"
//   };
// };

// const decrement = () =>
// {
//   return {
//     type: "DECREMENT"
//   };
// };

// Reducers

// const countReducers = (state =0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// Create STORE
let store = createStore(rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Display it in the console
store.subscribe(() => console.log(store.getState()));


// Dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
