import React, { Component } from "react";
import "./App.css"

export default class App extends Component {
    constructor(props) {
        super(props);
        const beef = {item:"Beef", unit:"lbs", quantity:"1", isPurchased: false};
        const potatoes = {item:"Potatoes", unit:"lbs", quantity:"4", isPurchased: true};
        const onions = {item:"Onions", unit:"lbs", quantity:"2", isPurchased: true};
        
        this.state = {
            item: '',
            unit: '',
            quantity: 0,
            isPurchased: false,
            groceries: [
                beef, potatoes, onions
            ],
        };
        // console.log(this.state.groceries)
    }
    

addItem = e => {
    e.preventDefault()
    let newItem = {
        item: this.state.item,
        unit: this.state.unit,
        quantity: this.state.quantity,
        isPurchased: false
    }
    // console.log(newItem)
    this.setState((prevState) => {
        return {
            groceries: prevState.groceries.concat(newItem)
        };
    });
    // console.log(this.state.groceries)
}

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
}

    buttonClick = (index) => {
        let newArray = this.state.groceries.slice()
        newArray[index].isPurchased = !newArray[index].isPurchased
    this.setState({
        groceries:newArray
    })
            console.log(index);
        }


render() {
    return (
        <div className="main">
            <div className="headerDiv">
                <h1>Shopping List</h1>
            </div>

            <div className="formDiv">
                <form onSubmit={this.addItem}>
                    <input type="text" value={this.state.item} onChange={this.handleChange} placeholder="Item" id="item" required />
                    <input type="text" value={this.state.unit} onChange={this.handleChange} placeholder="Unit" id="unit" required />
                    <input type="number" value={this.state.quantity} onChange={this.handleChange} placeholder="Quantity" id="quantity" required />
                    <button>Add Item</button>
                </form>
            </div>


                {this.state.groceries.map((item,index) => (
                    
                    
                    <div key={index} className="container">
                    {item.isPurchased ? (
                        <ul  className="itemList">
                        <li>{item.item} {item.quantity} {item.unit} <span className="purch">Purchased</span>
                        <button type="button" onClick={() => this.buttonClick(index)}>Purchase</button>
                        </li>
                        </ul>
                    ) : (
                        <ul className="itemList2">
                        <li>{item.item} {item.quantity} {item.unit} <span className="purch">Not Purchased</span>
                        <button type="button" onClick={() => this.buttonClick(index)}>Purchase</button>
                        </li>
                        </ul>
                    )}
                    </div>
                    ))
                }
        </div>
    )}}
