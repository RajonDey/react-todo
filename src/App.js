import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    todoList: [
      {
        id: uuid(),
        title: "This one is a dummy todo title!",
        completed: false,
      },
      {
        id: uuid(),
        title: "This is the second dummy todo title!",
        completed: false,
      },
      {
        id: uuid(),
        title: "This is the last dummy title!",
        completed: false,
      },
    ],
  };

  // Task Complete Method
  markComplete = (id) => {
    this.setState({
      todoList: this.state.todoList.map((singleToDo) => {
        if (singleToDo.id === id) {
          singleToDo.completed = !singleToDo.completed;
        }
        return singleToDo;
      }),
    });
  };

  // Task Delete Method
  deleteItem = (id) => {
    this.setState({
      todoList: [
        ...this.state.todoList.filter((singleToDo) => singleToDo.id !== id),
      ],
    });
  };

  // Task Add Item Method
  addItem = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-left p-4 bg-light">
            <Header></Header>
            <AddForm addItem={this.addItem} />
            <Todos
              todoList={this.state.todoList}
              markComplete={this.markComplete}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
