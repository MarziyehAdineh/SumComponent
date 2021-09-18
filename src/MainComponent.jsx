import React, { Component } from "react";
import SubComponent from "./SubComponent";

export default class MainComponent extends Component {
  state = { sumArray: [] };
  applyTedad = (tedad, inConstuctor) => {
    const tmp1 = [];
    const tmp = [];
    for (let i = 0; i < tedad; i++) {
      tmp.push(0);
    }
    for (let i = 0; i < tedad; i++) {
        tmp1.push(<SubComponent key={tedad+"_"+i} id={i} onSumChange={this.onSumChange} />);
      }
    let newState = { compArray: tmp1, sumArray: tmp };
    if (inConstuctor) this.state = newState;
    else this.setState(newState);
  };
  constructor(props) {
    super(props);
    this.applyTedad(this.props.Tedad, true);
  }
  shouldComponentUpdate(newProps, newState) {
    if (newProps.Tedad !== this.props.Tedad) {
      this.applyTedad(newProps.Tedad, false);
    }
    return true;
  }
  onSumChange = (key, sum) => {
      console.log('inkjaaaaa');
      console.log(key, sum);
    console.log(this.state.sumArray);
    var tmp = [...this.state.sumArray];
    tmp[key] = sum;
    this.setState({ sumArray: tmp });
    console.log(tmp);
  };
  render() {
    var sum = 0;
    for (let i = 0; i < this.state.sumArray.length; i++) {
      sum += this.state.sumArray[i];
    //    console.log(this.state.sumArray[i]);
    }
    return (
      <div>
        {this.state.compArray}
        <hr/>
        <label>
          {sum}
          <hr />
          {this.state.sumArray.join("-")}
        </label>
      </div>
    );
  }
}
