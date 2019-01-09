import React, { Component } from "react";
import "./App.css";

import Register from "./Register";
import TodoApp from "./TodoApp";

class App extends Component {
  render() {
    return (
      <div>
        <Register />
        <TodoApp title="This is Todo (this title made by props)" />
      </div>
    );
  }
}

export default App;
