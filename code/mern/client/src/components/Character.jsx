import React, { Component } from 'react'
import { emotionPortraits } from './images/portraits.js'

export default class Character extends Component {
    
    componentWillUnmount() {
        // console.log(`${this.props.name} left the stage`)
    }

    render() {
        return(
            <div className={'stage-place'}>
                {/* <p className={'characterName'}>{this.props.name}</p> */}
                <img className={'character-image'}
                id={this.props.name} 
                src={emotionPortraits[this.props.name][this.props.emotion]} 
                alt={this.props.name}/>
            </div>
                )
     }
}
