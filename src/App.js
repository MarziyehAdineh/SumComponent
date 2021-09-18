import React, { Component } from "react";
import MainComponent from "./MainComponent";

const maxValue = 10;
export default class App extends Component {
  state = { tedad: 3, errorMessage: "", MainComponent: [] };
  handleChange = (e) => {
    let t = parseInt(e.target.value);
    if (e.target.value === "" || isNaN(e.target.value)) {
      this.setState({ tedad: 0, errorMessage: "عدد باید وارد بشود." });
      return;
    }
    if (t > maxValue || t < 0) {
      this.setState({
        tedad: 0,
        errorMessage: ` عدد باید بین صفر و ${maxValue} باشد. `,
      });
      return;
    }
    this.setState({ tedad: t, errorMessage: "" });
  };
  render() {
    return (
      <div
        style={{
          width: "500px",
          margin: "0px outo",
          border: "2px solid black",
          backgroundColor: "rgb(219,112,147)",
        }}
      >
        <input
          style={{
            width: "fit-content",
            textAlign: "center",
            borderWidth: 1,
            margin: 10,
            backgroundColor: "rgb(255,218,185)",
          }}
          defaultValue="3"
          placeholder="تعداد رو وارد کنید."
          onChange={this.handleChange}
        />
        <label>{"تعداد را وارد کنید."}</label>
        <br />
        <label style={{color:"gold"}}>{this.state.errorMessage}</label>
        <MainComponent Tedad={this.state.tedad} />
      </div>
    );
  }
}
