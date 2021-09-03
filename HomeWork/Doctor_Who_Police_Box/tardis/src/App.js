import React, { Component } from "react";
import Div1 from "./Div1";
import "./App.css"

export default class App extends Component {
    render() {
      return (
        <div>
          <Div1 name={this.props.name} change={this.props.change} />
        </div>
      );
    }
}