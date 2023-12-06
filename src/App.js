import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
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

class App extends Component {
    render() {
      return (
        <div className="App">
        <Subject/>
        <Sub/>
      </div>
    );
  }
}

export default App;
