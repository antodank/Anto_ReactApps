import React from 'react';
import Nav from './components/Nav';
import Home1 from './components/Home1';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home1} />
          <Route path="/Shop" component={Shop} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
