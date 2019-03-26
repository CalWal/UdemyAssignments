import React from "react";
import Char from "../components/Char";

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

  deleteLetters(index) {
    const text = this.state.input.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      input: updatedText
    });
  }

  render() {
    const charList = this.state.input.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteLetters(index)}
        />
      );
    });

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
        {charList}
      </div>
    );
  }
}

export default Lists;
