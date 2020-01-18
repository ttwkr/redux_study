import React, { Component } from "react";
import store from "../../store";
class DisplayNumber extends Component {
  state = { number: store.getState().number }; // 스토어에 있는 값을 갖고와서 저장한다.
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        number: store.getState().number
      });
    });
  }
  // 가지고 온것만으로는 리액트가 알수 없으니 setState를 통해서 저장
  render() {
    return (
      <div>
        <h1>Dispaly Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}

export default DisplayNumber;
