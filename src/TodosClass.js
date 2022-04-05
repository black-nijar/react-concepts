import React, { PureComponent } from "react";

class TodosClass extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.todos == nextProps.todos) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  render() {
    console.log("Class Pure Todos");
    return (
      <div>
        <h2>My Todos Pure Comp</h2>
        {this.props.todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={this.props.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodosClass;
