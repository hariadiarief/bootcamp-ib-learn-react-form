import React, { Component } from "react";

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Eat Lunch"
        },
        {
          id: 1,
          text: "coding for fun"
        }
      ]
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    console.log("TODO SUBMITED!", this.state.input);

    const newTodo = {
      id: this.state.todos.length,
      text: this.state.input
    };

    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <h1>This is Todo</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="Input your todo hire"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input type="submit" value="Add Todo" />
        </form>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.id}:{todo.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
