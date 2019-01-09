import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: ""
    };
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <form>
        <h3>Register Hire :</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={this.state.value}
          onChange={this.handleEmailInput}
        />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default Register;
