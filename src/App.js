import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navigation from './components/Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
