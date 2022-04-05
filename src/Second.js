import React, { PureComponent } from "react";

export class Second extends PureComponent {
  render() {
    console.log("Pure");

    return <div>Pure Component - {this.props.counter}</div>;
  }
}

export default Second;
