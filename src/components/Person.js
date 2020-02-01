import React from 'react';

function Condition(props) {

  const type = props.type;
  if (type === "Driver") {
    return (
      <div classname="Driver">
        <form onSubmit={props.submit}>
          <input type="Driver" placeholder="Name" onChange={props.change} />
          <input type="Driver" placeholder="Time" onChange={props.change} />
          <input type="Driver" placeholder="Spots" onChange={props.change} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  } else {
    return (
      <div classname="Passenger">
        <form onSubmit={props.submit}>
          <input type="Passenger" placeholder="Name" onChange={props.change} />
          <input type="Passenger" placeholder="Time" onChange={props.change} />
          <input type="Passenger" placeholder="Place" onChange={props.change} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      spots: "",
      place: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onComponentChange() {
    this.setState = {
      name: "",
      time: "",
      spots: "",
      place: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      time: event.target.value,
      spots: event.target.value,
      place: event.target.value
    });
  }

  render() {
    return (
      <Condition type={this.props.type} submit={this.handleSubmit} change={this.handleChange} />
    );
  }
}