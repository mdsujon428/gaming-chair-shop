import { NotFound } from 'http-errors';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Explore from './components/Pages/Explore/Explore';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Loging/Loging/Login';
import PrivateRoute from './components/Pages/Loging/PrivateRoute/PrivateRoute'
import Register from './components/Pages/Loging/Register/Register';
import Purchase from './components/Pages/Purchase/Purchase';
import Navigation from './components/Pages/Shared/Navigation/Navigation';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/explore'>
              <Explore />
            </Route>
            <PrivateRoute exact path='/explore/purchase/:id'>
              <Purchase />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registration'>
              <Register />
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
