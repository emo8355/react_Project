import React, { Component } from "react";
import IN from "./js/Userinput";
import OUT from "./js/Useroutput";
import "./App.css";

class App extends Component {
  state = {
    condition: [
      {
        type: "REACT"
      },
      {
        type: "C++"
      }
    ]
  };

  clickTOswitch = newname => {
    this.setState({
      condition: [
        {
          type: "REACT"
        },
        {
          type: newname
        }
      ]
    });
  };

  SwitchName = event => {
    this.setState({
      condition: [
        {
          type: event.target.value
        },
        {
          type: "C++"
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="project_title">This is my first React Project</h1>
        <OUT type={this.state.condition[0].type}>This is the child</OUT>
        <OUT
          type={this.state.condition[1].type}
          click={this.clickTOswitch.bind(this, "RUBY")}
        />
        <IN name={this.state.condition[0].type} changed={this.SwitchName} />
      </div>
    );
  }
}

export default App;
