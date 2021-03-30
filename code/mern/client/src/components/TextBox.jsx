import React, { Component } from 'react'


export default class TextBox extends Component {
    // displayProps = () => {
    //     console.log(this.props)
    // }
    render() {
        return (
            <div className= 'text-container'>
                <div className='textbox-main' onClick = {this.props.continue}>
                    <h3 className='char-name'>
                        {this.props.characterName}
                    </h3>
                    <p className='dialouge'>
                        {this.props.characterDialogue}
                    </p>
                    <div id='choice-box'>
                        <div className='button-text-container'>
                            <button 
                                className='dialouge-button-agree'
                                onClick={this.props.response} 
                                type='string' 
                                value='1'>
                            </button>
                        </div>
                        <div className='button-text-container'>
                            <button 
                                className='dialouge-button-disagree' 
                                onClick={this.props.response} 
                                type='string' 
                                value='2'>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}