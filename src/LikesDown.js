// React Class Component
import { Component } from "react";

export class LikesDown extends Component {
  constructor() {
    super();

    this.state = {
      likes: 300,
    };
  }

  updateLikes() {
    this.setState({ likes: this.state.likes - 1 });
  }

  render() {
    return (
      <div className="item">
        <h1>{this.state.likes} LIKES</h1>
        <button onClick={() => this.updateLikes()}>DISLIKE</button>
      </div>
    );
  }
}
