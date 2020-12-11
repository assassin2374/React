import React from 'react'
import { Link } from 'react-router-dom'

class Test extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Test">Test</Link>
        </div>
        <h1>Test</h1>
        <List ></List>
      </React.Fragment>
    )
  }
}

export default Test;

class List extends React.Component {
  render() {
    return (
      <input type="Text" name="name">
      </input>
    );
  }
}