import React from "react";

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Testing"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <p>
          {this.state.input.length > 5
            ? "Too Many Letters!"
            : "You are in the clear!"}
        </p>
      </div>
    );
  }
}

export default Lists;
