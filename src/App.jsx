import React from 'react';
import Home from './pages/ Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainHome from './pages/MainHome';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/home" component={ MainHome } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/details/:id" component={ ProductDetails } />
      <Route exact path="/orders" component={ Orders } />
      <Route exact path="/contact" component={ Contact } />
    </Switch>
  );
}

export default App;
