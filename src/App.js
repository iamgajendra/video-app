import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './Upload';

function App() {
  

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/upload'>
            <Upload />
          </Route>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
