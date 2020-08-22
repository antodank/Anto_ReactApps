import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//const element = <h1>Hello, world</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

const baseElement = <React.StrictMode>
                    <App />
                    </React.StrictMode>;

ReactDOM.render(
  baseElement,
  document.getElementById('root')
);





