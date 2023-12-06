import { Component } from "react";


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

export default Subject;