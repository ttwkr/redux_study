import AddNumber from "../component/addNumber/addnumber";
import { connect } from "react-redux";

const mapReduxDispatchToReactProps = dispatch => {
  return {
    onClick: size => dispatch({ type: "INCREMENT", size: size })
  };
};

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={size => {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       ></AddNumber>
//     );
//   }
// }
