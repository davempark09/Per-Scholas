import React, { Component } from "react"

export default class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            info:'',
            category: '',
            shown:false
        };
    }



    getInfo(){
        fetch(`http://jservice.io/api/random`)
        .then(response => response.json())
        .then(data => {
            this.newQuestion(data)
            });
        };

    scoreIncrease= () => {
        this.setState({
            score: this.state.score + 100
        })
    }

    scoreDecrease= () => {
        this.setState({
            score: this.state.score - 100
        })
    }

    scoreReset= () => {
        this.setState({
            score: 0
        })
    }

    newQuestion= (data) => {
        let newInfo = this.state.info
        newInfo =  data
        this.setState({
            info:newInfo[0],
            category:newInfo[0].category
        })
        console.log(this.state.info)
    }
    
    display() {
            document.getElementById("hidden").style.display = "block"
    } 	
            

    render() {

        return (
            <div className="container">
                <div className="header">
                <h1>Welcome To Jeopardy!</h1>
                <h2>Score: {this.state.score} </h2>
                <div className="buttons">
                    <button className="buttonLook" id="button1" onClick={this.scoreDecrease}>Decrease</button>
                    <button className="buttonLook" id="button2" onClick={this.scoreIncrease}>Increase</button>
                    <button className="buttonLook" id="button3" onClick={this.scoreReset}>Reset</button>
                </div>
                <h2>Let's Play!</h2> 
                <div className="buttons">
                <button className="buttonLook" id="button4" onClick={() => this.getInfo()}>Get Question</button>
                </div>
                </div>
                <h2 className="text">Category:{this.state.category.title}</h2>
                <h2 className="text">Points:{this.state.info.value}</h2>
                <h2 className="text">Answer:{this.state.info.answer}</h2>
                <button onClick={() => this.display()} id="otherButton" className="header">Click To Reveal Question</button>
                <h2 id="hidden" className="text">Question:{this.state.info.question}</h2>
</div>
    )}
}