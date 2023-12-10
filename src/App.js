import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';
import Subject from './components/TOC';
import Sub from './components/Sub';
import Content from './components/Content';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'WWWWworld wide web'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interact'},
      ]
    }
  }
    render() {
      return (
        <div className="App">
        <Subject 
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        />
        <Sub data={this.state.contents}/>
        <Content title="Welcome React" sub="hihihi" />
        <Content title="bye" sub="holy" />
      </div>
    );
  }
}

export default App;
