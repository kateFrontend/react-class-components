/* React Function Component 

function Likes() {
    return(<div></div>)
} */

// React Class Component
import { Component } from "react";

export class Likes extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.likes} LIKES</h1>
        <button>LIKE</button>
      </div>
    );
  }
}
