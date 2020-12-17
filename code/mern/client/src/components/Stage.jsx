import React, { Component } from 'react'
// import { Stories } from './scriptObject.js'

export default class Stage extends Component {
    // consider using a statless component
    state = {

    }

    // swap portraits

    // place portrait

    // remove portrait

    // highlight speaker

    render() {
        return (
            <div id='stage'>
                <div id='one' className='stage-place'>
                    <img className='portrait' src={this.props.characterPortraitThree} alt=''/>
                </div>
                <div id='two' className='stage-place'>
                    <img className='portrait' src={this.props.characterPortraitTwo} alt=''/>
                </div>
                <div id='three' className='stage-place'>
                    <img className='portrait' src={this.props.characterPortraitOne} alt=''/>
                </div>
                <div id='four' className='stage-place'>
                    <img className='portrait' src={this.props.characterPortraitFour} alt=''/>
                </div>
            </div>
        )
    }
}