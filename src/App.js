import React, { Component } from "react";
import AddNumberRoot from "./component/addNumber/addnumberRoot";
import DisplayNumberRoot from "./component/displayNumber/displaynumberRoot";
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
          <AddNumberRoot
            onClick={size => {
              this.setState({
                number: this.state.number + size
              });
            }}
          ></AddNumberRoot>
          <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
        </div>
      </>
    );
  }
}
export default App;
