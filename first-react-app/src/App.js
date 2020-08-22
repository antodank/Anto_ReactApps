import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import ClassCompo from './ClassCompo';
import TodoApp from './TodoApp';
import CounterApp from './counter-app';
import Togglebutton from './Togglebutton';


function App() {

  return (
    <>
      <div className="App">
         <header className="App-header">
          <p>
            Add components in <code>src/App.js</code> and then save to reload page.
          </p>
          {/* Registering first component */}
          <div>
            <FirstComponent name="Ankit">
            </FirstComponent>
          </div>
          <div>
            <ClassCompo name="Viraj">
            </ClassCompo>
          </div>

          {/* UseState demo */}
          <div>
            <CounterApp>
            </CounterApp>
          </div>
           {/* nested component demo */}
          <div>
            <TodoApp>
            </TodoApp>
          </div>

          <div>
            <Togglebutton></Togglebutton>
          </div>
         
         

        </header>
      </div>
    </>
  );
}

export default App;
