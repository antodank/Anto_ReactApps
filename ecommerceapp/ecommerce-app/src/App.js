import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import signup from './pages/Signup';
import HomePage from './pages/HomePage';

function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className = "header">
          <div>
          <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
          <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}> x </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={signup} ></Route>
            <Route path="/" exact={true} component={HomePage} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
