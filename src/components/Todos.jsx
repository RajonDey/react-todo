import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todoList.map((singleToDo) => (
      <TodoItem
        key={singleToDo.id}
        singleToDo={singleToDo}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

export default Todos;
