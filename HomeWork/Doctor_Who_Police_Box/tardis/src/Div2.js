import React, { Component } from "react"
import Div3 from "./Div3";

export default class Div2 extends Component {
    render() {
        return (
            <div>
                <Div3 name={this.props.name} change={this.props.change} />
                <Div3 name={this.props.name} change={this.props.change} />
            </div>
        )
    }
}