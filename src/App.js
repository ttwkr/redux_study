import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyled = createGlobalStyle`
div{
  border : 5px solid #764abc;
  margin : 10px;
  color : #764abc;
  padding : 10px;
}
`;

class AddNumber extends Component {
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    );
  }
}

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <GlobalStyled />
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    </>
  );
}

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Dispaly Number</h1>
        <input type="text" value="0" readOnly></input>
      </div>
    );
  }
}

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayNumber Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}

export default App;
