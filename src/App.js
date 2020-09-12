import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.conponent';
import ShopPage from './pages/shop/shop.componets.jsx'
import SignInAndSignUpPages from './pages/sign-in-sign-up/sign-in-sign-up.componet';

import Header from './components/header/header.componet.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInAndSignUpPages}/>
      </Switch>
    </div>
  );
}

export default App;
