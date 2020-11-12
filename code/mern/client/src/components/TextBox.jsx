import React, { Component } from 'react'
import axios from 'axios'
import { Stories } from './scriptObject.js'
import { Link } from 'react-router-dom'

export default class TextBox extends Component {
    state = {
        dialogueNumber: 0,
        pathNumber: 0
    }

    componentDidMount() {
        this.refreshTextBox()
    }

    refreshTextBox = () => {
        axios.get('api/script')
        .then((response) => {
            this.setState({paths: response.data})
        })
    }

    nextLine = () => {
        let dialogueNumber = this.state.dialogueNumber
        let temp = dialogueNumber + 1
        this.setState({dialogueNumber: temp})

        let pathNumber = this.state.pathNumber
        // console.log(Stories.moralityProblem[pathNumber][dialogueNumber + 1].dialogue)
    }

    render() {
        return (
            <div className='textbox-main' onClick = {this.nextLine}>
                <div className='name-box'>
                    {Stories.moralityProblem[this.state.pathNumber][this.state.dialogueNumber].speaker}
                </div>
                <div className='message-box'>
                    <p>
                        {Stories.moralityProblem[this.state.pathNumber][this.state.dialogueNumber].dialogue}
                    </p>
                </div>
            </div>
        )
    }
}