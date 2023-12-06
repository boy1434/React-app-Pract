import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.name}</h1>
       {this.props.name}
      </header>
    );
  }
}

function Sub() {
  
    return(
      <ul>
      <li><a href="1.html">HTML</a></li>
      <li><a href="1.html">CSS</a></li>
      <li><a href="1.html">JavaScript</a></li>
      </ul>
    );
}

function Content(props) {
  return (
    <header>
    <h2>
      {props.title}
    </h2>
    {props.sub}
    </header>
    
  )
}

class App extends Component {
    render() {
      return (
        <div className="App">
        <Subject name="WEBBBB"/>
        <Subject name="World Wide Web!"/>
        <Sub/>
        <Content title="Welcome React" sub="hihihi" />
        <Content title="bye" sub="holy" />
      </div>
    );
  }
}

export default App;
