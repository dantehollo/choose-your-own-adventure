import React, { Component } from 'react'
import { emotionPortraits } from './images/portraits.js'

export default class Character extends Component {

    render() {
        return(
            <div className={'stage-place'}>
                <img className={'character-image'}
                id={this.props.name} 
                src={emotionPortraits[this.props.name][this.props.emotion]} 
                alt={this.props.name}/>
            </div>
                )
     }
}
