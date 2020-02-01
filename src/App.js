import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Person from './components/Person';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Driver"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      type: event.target.name
    });
  }

  render() {
    return (
      <div>
        <Title type={this.state.type} action={this.handleClick} />
        <Person type={this.state.type} />
      </div>
    );
  };
}

export default App;