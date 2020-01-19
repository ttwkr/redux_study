import React, { Component } from "react";
import AddNumberRoot from "./component/addNumber/addnumberRoot";
import DisplayNumberRoot from "./component/displayNumber/displaynumberRoot";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";

class App extends Component {
  state = {
    number: 0
  };
  render() {
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
}
export default App;

const GlobalStyled = createGlobalStyle`
div{
  border : 5px solid #764abc;
  margin : 10px;
  color : #764abc;
  padding : 10px;
}
`;
