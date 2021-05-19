import React, { Component } from 'react'


export default class TextBox extends Component {
    render() {
        return (
            <div className= 'text-container'>
                <div className='textbox-main'>
                    <h3 className='char-name'>
                        {this.props.characterName}
                    </h3>
                    <p className='dialouge'>
                        {this.props.characterDialogue}
                    </p>
                </div>
                <div className = 'progress-box'>
                    <div className = 'container-buttons-back' onClick = {this.props.previousLine}/>
                    <div className = 'container-buttons-forward' onClick = {this.props.continue}/>
                </div>
                <div id='choice-box'>
                    <div className='button-text-container'>
                        <button 
                            id='dialouge-button-agree'
                            onClick={this.props.response} 
                            type='string' 
                            value='1'>
                        </button>
                    </div>
                    <div className='button-text-container'>
                        <button 
                            id='dialouge-button-disagree' 
                            onClick={this.props.response} 
                            type='string' 
                            value='2'>
                        </button>
                    </div>
                </div>   
            </div>
        )
    }
}