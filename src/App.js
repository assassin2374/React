import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './Test';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Test' component={Test}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;