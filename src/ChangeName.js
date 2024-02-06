import { render } from "@testing-library/react";
import { Component } from "react";

export class ChangeName extends Component {
  constructor() {
    super();

    this.state = {
      name: "NANCY",
      age: 20,
    };
  }

  updateName() {
    this.setState({ name: "KATE" });
    this.setState({ age: 30 });
  }

  render() {
    return (
      <div className="item">
        <h3>My name is {this.state.name}</h3>
        <h3>I'm {this.state.age} years old</h3>
        <button onClick={() => this.updateName()}>Click me</button>
      </div>
    );
  }
}
