import React, { Component } from 'react'
import './Die.css'

class Die extends Component {    
    render() {
        return (
            <div>
                <i className={`wobble-bottom Die fas fa-dice-${this.props.num} ${this.props.rolling && 'rolling'}`}></i>
            </div>            
        )
    }
}

export default Die