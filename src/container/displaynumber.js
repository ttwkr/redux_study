import { connect } from "react-redux";
import DisplayNumber from "../component/displayNumber/displaynumber";

const mapReduxStateToReactProps = state => {
  return {
    number: state.number
  };
};

export default connect(mapReduxStateToReactProps)(DisplayNumber);
// connect 함수의 리턴값이 함수이다. 그래서 connect()<- connect 함수를 실행(리턴값이 함수)한다. ()<-리턴된 함수를 실행 를 붙이는 것이다.
//connect 함수는 어떤 과정을 거처 밑에 함수를 리턴하게 된다.
// export default class extends Component {
//   state = {
//     number: store.getState().number
//   };
//   constructor(props) {
//     super(props);
//     store.subscribe(() => {
//       this.setState({
//         number: store.getState().number
//       });
//     });
//   }
//   render() {
//     return <DisplayNumber number={this.state.number}></DisplayNumber>;
//   }
// }
