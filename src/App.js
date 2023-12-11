import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'world wide web'},
      welcome:{title:'Welcome', desc:'Hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interact'},
      ]
    }
  }
    render() {
      console.log('App render');
      var _title, _desc = null;
      if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
      } else if(this.state.mode === 'read'){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }
      return (
        <div className="App">
          <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'welcome'})
          }.bind(this)}
          />
          <TOC data={this.state.contents}/>
          <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
