import React from "react";
import ReactDOM from "react-dom";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "The App State username",
      inputName: "Try typing something!"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputName: event.target.value
    });
  }

  handleClick() {
    this.setState({
      username: "You changed the username!"
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.handleChange}
          inputName={this.state.inputName}
        />
        <UserOutput username={this.state.username} onClick={this.handleClick} />
        <button onClick={this.handleClick}>Try This!</button>

        <UserOutput username="Cal" onClick={this.handleClick} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
