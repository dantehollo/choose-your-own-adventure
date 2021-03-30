import React, { Component } from 'react'
import Character from './Character'
// import ReactDOM from 'react-dom'
// import { Stories } from './scriptObject'
// import { emotionPortraits } from './images/portraits.js'

export default class Stage extends Component {
    render() {
        return (
            <div id='stage'>
                <div id={3} className='stage-place'>
                    <Character
                        name = 'Tehara'
                        emotion = {this.props.TeharaEmotion}
                        />
                </div>
                <div id={1} className='stage-place'>
                    <Character
                        name = 'Usain'
                        emotion = {this.props.UsainEmotion}
                        />
                </div>
                <div id={2} className='stage-place'>
                    <Character
                        name = 'Imhotep'
                        emotion = {this.props.ImhotepEmotion}
                        />
                </div>
                <div id={4} className='stage-place'>
                    <Character
                        name = 'Vadim'
                        emotion = {this.props.VadimEmotion}
                        />
                </div>
            </div>
        )
    }
}

// export const characterEmotions = {
//     UsainEmotion: this.props.UsainEmotion,
//     ImhotepEmotion: this.props.ImhotepEmotion,
//     TeharaEmotion: this.props.TeharaEmotion,
//     VadimEmotion: this.props.VadimEmotion   
// }