import React from 'react';
import Person from './Person';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }


  render() {
    return (
      <div>
        <div> Welcome!</div>
        <div type="date">
          {/* {this.state.date.toLocaleString({ weekday: 'long' })} */}
          {this.state.date.toLocaleDateString()}
        </div>

        <button name="Driver" onClick={this.props.action}>Driver</button>
        <button name="Passenger" onClick={this.props.action}>Passenger</button>

        <div> {this.props.type}</div>
      </div>
    );
  }
}