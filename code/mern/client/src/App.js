import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TextBox from './components/TextBox'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route/>
        </Switch>
        <TextBox/>
      </Router>
    </div>
  );
}

export default App;
