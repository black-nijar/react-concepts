import React, { Component } from "react";

export class First extends Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    console.log("Normal");
    return <div>Normal Component - {this.props.counter}</div>;
  }
}

export default First;
