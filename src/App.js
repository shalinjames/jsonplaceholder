import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comments from "./Comments/Comments";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("Render");
    // Comments.get().then(response => {
    //   console.info(response);
    // });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
