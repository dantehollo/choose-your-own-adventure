import React, { Component } from 'react'
import Theater from'./Theater'

export default class TextBox extends Component {
    // displayProps = () => {
    //     console.log(this.props)
    // }
    render() {
        return (
            <div className= 'text-container'>
                <div className='textbox-main' onClick = {this.props.continue}>
                    <div className='name-box'>
                        <h3 className='char-name'>
                            {this.props.characterName}
                        </h3>
                    </div>
                    <div className='message-box'>
                        <p>
                        {this.props.characterDialogue}
                        </p>
                    </div>
                </div>
                <div id='choice-box'>
                    <button 
                        onClick = {this.props.responce} 
                        type = 'string' 
                        value = '1'>
                            Agree
                    </button>
                    <button 
                        onClick = {this.props.responce} 
                        type = 'string' 
                        value = '2'>
                            Disagree
                    </button>
                </div>
                <button onClick = {this.props.resetGame}>Reset</button>
            </div>
        )
    }
}