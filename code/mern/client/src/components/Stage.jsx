import React, { Component } from 'react'
import Character from './Character'
// import { emotionPortraits } from './images/portraits.js'

export default class Stage extends Component {

    render() {
        return (
            <div id='stage'>
                <div id={3} className='stage-place'>
                    {/* <Character
                        name = 'Tehara'
                        emotion = {this.props.teharaEmotion}
                        /> */}
                </div>
                <div id={1} className='stage-place'>
                    {/* <Character
                        name = 'Usain'
                        emotion = {this.props.usainEmotion}
                        /> */}
                </div>
                <div id={2} className='stage-place'>
                    {/* <Character
                        name = 'Imhotep'
                        emotion = {this.props.imhotepEmotion}
                        /> */}
                </div>
                <div id={4} className='stage-place'>
                    {/* <Character
                        name = 'Vadim'
                        emotion = {this.props.vadimEmotion}
                        /> */}
                </div>
            </div>
        )
    }
}