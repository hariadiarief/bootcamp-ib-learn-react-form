import React, { Component } from "react";
import "./App.css";

import Register from "./Register";
import TodoApp from "./TodoApp";

class App extends Component {
  render() {
    return (
      <div>
        <Register />
        <TodoApp />
      </div>
    );
  }
}

export default App;
