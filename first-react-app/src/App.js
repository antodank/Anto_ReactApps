import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import ClassCompo from './ClassCompo';
import CounterApp from './CounterApp';
import TogglebuttonClass from './ToggleButtonClass';
import TogglebuttonFunc from './ToggleButtonFunc';
import Cityweather from './Cityweather'
import GetQuotes from './GetQuotes'
import ParentComponent from './ParentComponent'



function App() {

  return (
    <>
      <div className="App">
         <header className="App-header">
          <p>
            Add components in <code>src/App.js</code> and then save to reload page.
          </p>
          {/* Registering first component */}
          <div className="flex-grid-thirds">
            <div className="col">
              <FirstComponent name="Ankit">
              </FirstComponent>
            </div>
            <div className="col">
              <ClassCompo name="Viraj">
              </ClassCompo>
            </div>

             {/* UseState demo */}
            <div className="col">
              <ParentComponent></ParentComponent>
            </div>

            
          </div>
         
          <div className="flex-grid">

          <div className="col">
              <TogglebuttonFunc></TogglebuttonFunc>
            </div>

             <div className="col">
              <CounterApp>
              </CounterApp>
            </div>
          </div>

           {/* nested component demo */}
        
         

          <div>
          <Cityweather></Cityweather>
          </div>

          <div>
            <GetQuotes></GetQuotes>
          </div>
         
         

        </header>
      </div>
    </>
  );
}

export default App;
