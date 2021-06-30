import createReactClass from "create-react-class";
import Cell from './Cell';



let items = [];

let Box = createReactClass({
  getInitialState: function () {
    // build an array to hold all the cells
    //
    let c = [];
    for (let i = 1; i <= this.props.matrix; i++) {
      c.push(<Cell key={i} id={i} cells={c} />);
      items.push(i);
    }
    return { cells: c };
  },
  render: function () {
    return <div> {this.state.cells} </div>;
  },
});
export default Box