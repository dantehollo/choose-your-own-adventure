import React, { Component } from 'react'
import { Stories } from './scriptObject.js'

export default class Stage extends Component {
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
                    <img className='portrait' src=''/>
                </div>
                <div id='two' className='stage-place'>
                    <img className='portrait' src=''/>
                </div>
                <div id='three' className='stage-place'>
                    <img className='portrait' src=''/>
                </div>
                <div id='four' className='stage-place'>
                    <img className='portrait' src=''/>
                </div>
            </div>
        )
    }
}