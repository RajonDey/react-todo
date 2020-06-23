import React, { Component } from "react";

class AddFrom extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="d-flex input-form">
        <input
          className="flex-grow-1 title"
          type="text"
          name="title"
          placeholder="Add your task..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          className="btn sm-btn btn-secondary"
        ></input>
      </form>
    );
  }
}

export default AddFrom;
