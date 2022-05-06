import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,checkLogin } from './action'


function App() {

  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
          Learn React-Redux
          <div>
            <div>Counter - {counter}</div>
            <div>
              <div><button onClick={ () => { dispatch(increment()) } } >+</button></div>
              <div><button onClick={ () => { dispatch(decrement()) } }>-</button></div>
            </div>
            { islogged ? <div> Hello Ankit <button onClick={ () => { dispatch(checkLogin()) } }>SignOff</button></div>:
            <div> Hello <button onClick={ () => { dispatch(checkLogin()) } }>SignOn</button></div> }
          </div>
    </div>
  );
}

export default App;
