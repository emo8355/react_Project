import React, { Component } from "react";
import "./App.css";
import CL from "./component/validation";
import CHARLIST from "./component/Char";

class App extends Component {
  state = {
    userIn: ""
  };

  inputChange = event => {
    this.setState({ userIn: event.target.value });
  };

  deleteChar = index => {
    const text = this.state.userIn.split("");
    text.splice(index, 1);
    const Update = text.join("");
    this.setState({ userIn: Update });
  };

  render() {
    const list = this.state.userIn.split("").map((x, i) => {
      return <CHARLIST ca={x} id={i} click={() => this.deleteChar(i)} />;
    });

    return (
      <div className="App">
        <input
          className="inputSpace"
          type="text"
          onChange={this.inputChange}
          value={this.state.userIn}
        />
        <p>{this.state.userIn}</p>
        <CL text={this.state.userIn.length} />
        {list}
      </div>
    );
  }
}

export default App;
