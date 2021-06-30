import createReactClass from "create-react-class";

let Cell = createReactClass({
  getInitialState: function () {
    return { selected: false };
  },
  render: function () {
    return (
      <div
        className={this.state.selected ? "cell active" : "cell"}
        id={this.props.id}
      ></div>
    );
  },
});

export default Cell