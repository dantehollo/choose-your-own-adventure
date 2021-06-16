import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Theater from './components/Theater';
import LaunchPage from './components/LaunchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LaunchPage}/>
          <Route exact path="/stories/:id" component={Theater}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
