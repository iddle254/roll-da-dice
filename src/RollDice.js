import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {    
    static defaultProps = {
        sides: ["one","two","three","four","five","six"]
    };

    state = {
        die1: "one", die2: "two", rolling: false
    };

    roll = () => {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({die1:newDie1,die2:newDie2,rolling:true});

    setTimeout(() => {
        this.setState({rolling:false})
    },1000);
    }

    render() {        
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                <Die num={this.state.die1} rolling={this.state.rolling}/>
                <Die num={this.state.die2} rolling={this.state.rolling}/>
                </div>            
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling? "Rolling...":"Roll"}</button>
            </div>            
        )
    }
}

export default RollDice