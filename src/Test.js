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

function Add(props) {
  return (
    <button onClick={props.onClick}>
    </button>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  inText(){
    return(
      <input type='Text' name='textAdd'></input>
    )
  }

  addBotton(){
    return(
      <Add text={this.name}/>
    )
  }

  outText(){
    return(
      <p>{this.props.text}</p>
    )
  }

  render() {
    return (
      <div>
        {/* input */}
          {this.inText}
        {/* botton */}
        <div>
          {this.addBotton}
        </div>
        {/* output */}
        <div>
          {this.outText}
        </div>
      </div>
    )
  }
}