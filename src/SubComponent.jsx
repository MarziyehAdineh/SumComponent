import React, { Component } from 'react'
import './styleComponent.css'
export default class SubComponent extends Component {
    constructor(props){
        super(props)
        this.state = {Num1:0, Num2:0,Sum:0}
    }
    handleChange1=(e)=>{
        let tmp=parseInt(e.target.value);
        this.setState({Num1: tmp})
        this.props.onSumChange(this.props.id,tmp+this.state.Num2)
    }
    handleChange2 =(e)=>{
        let tmp=parseInt(e.target.value);
        this.setState({Num2: tmp});
        this.props.onSumChange(this.props.id,tmp+this.state.Num1)

    }
    render() {
        return (
            <div className="mainContainer">
                <input className="inputStyle"
                style={{borderWidth:1, margin: 10}}
                placeholder='Num1'
                onChange={this.handleChange1}
                />
                <br />
                <input className="inputStyle"
                style={{borderWidth:1, margin: 10}}
                placeholder='Num2'
                onChange={this.handleChange2}
                />
                <br />
                <label className="outStyle" >sum: {this.state.Num1+this.state.Num2}</label>
            </div>
        )
    }
}
