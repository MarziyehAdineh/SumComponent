import React, { Component } from "react";
import MainComponent from "./MainComponent";
function NormalizeNum(Number) {
  return Number.replace("۰", "0")
    .replace("۱", "1")
    .replace("۲", "2")
    .replace("۳", "3")
    .replace("۴", "4")
    .replace("۵", "5")
    .replace("۶", "6")
    .replace("۷", "7")
    .replace("۸", "8")
    .replace("۹", "9");
}
const maxValue = 10;
export default class App extends Component {
  state = { tedad: 3, errorMessage: "", MainComponent: [] };
  handleChange = (e) => {
    let n1 = e.target.value;
    let result = NormalizeNum(n1);
    let n2 = parseInt(result);
    if (n2 === "" || isNaN(n2)) {
      if (n1 === "" || isNaN(n1)) {
        this.setState({ tedad: 0, errorMessage: "عدد باید وارد بشود." });
        return;
      }
    }

    if (n2 > maxValue || n2 < 0) {
      this.setState({
        tedad: 0,
        errorMessage: ` عدد باید بین صفر و ${maxValue} باشد. `,
      });
      return;
    }

    this.setState({ tedad: n2, errorMessage: "" });
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
        <label style={{ color: "gold" }}>{this.state.errorMessage}</label>
        <MainComponent Tedad={this.state.tedad} />
      </div>
    );
  }
}
