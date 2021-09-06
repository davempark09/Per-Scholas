import React from "react"

export class Mult1 extends React.Component{
    render() {
        return <h2>What a nice day {this.props.fname} {this.props.lname}</h2>
    }
}
export class Mult2 extends React.Component{
    render() {
        return <h2>Let's go for a {this.props.activity}</h2>
    }
}