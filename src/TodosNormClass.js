import React, { Component } from "react";

class TodosNormClass extends Component {
  render() {
    console.log("Norm class todos");
    return (
      <div>
        <h2>My Todos Class Norm</h2>
        {this.props.todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={this.props.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodosNormClass;
