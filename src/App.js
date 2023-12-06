import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';
import Subject from './components/TOC';
import Sub from './components/Sub';
import Content from './components/Content';





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
