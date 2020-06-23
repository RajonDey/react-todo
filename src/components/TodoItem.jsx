import React, { Component } from "react";

class TodoItem extends Component {
  getSingleItemStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px solid #eee",
      textDecoration: this.props.singleToDo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.getSingleItemStyle()}>
        <h4>
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            onChange={this.props.markComplete.bind(
              this,
              this.props.singleToDo.id
            )}
          ></input>
          {this.props.singleToDo.title}
          <button
            onClick={this.props.deleteItem.bind(this, this.props.singleToDo.id)}
            className="btn sm-btn btn-danger float-right"
          >
            Trush
          </button>
        </h4>
      </div>
    );
  }
}

export default TodoItem;
