import React from 'react';
import './App.scss';

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home/Home"
import Basket from "./containers/Basket/Basket"
import ShopProduct  from "./containers/ShopProduct/ShopProduct"
import About from './containers/About/About';
import Header from './components/Header/Header'

//Layouts
import MainLayout from './Layouts/MainLayout'
import HomepageLayout from './Layouts/HomepageLayout'

//
import Homepage from './Pages/Homepage/Homepage.js'
import Registration from './Pages/Registration/Registration'

function App() {
  
  const routes = (
    <Switch>
      <Route exact path="/" render={ ()=> (
        <HomepageLayout>
          <Homepage></Homepage>
        </HomepageLayout>
      )} />
      <Route exact path="/Registration" render={()=> (
        <MainLayout>
          <Registration></Registration>
        </MainLayout>
      )} />

      {/* <Route exact path="/About" component={About} /> */}
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
