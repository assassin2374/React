import React from 'react'
import { Link } from 'react-router-dom'

class Test extends React.Component {
  render(){
    return(
      <div>
        <div>
        <Link to="/">Home</Link>
        <Link to="/Test">Test</Link>
      </div>
        <h1>Test</h1>
      </div>
    )
  }
}


export default Test;