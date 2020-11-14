import React, { Component } from 'react'
import axios from 'axios'
import { Stories } from './scriptObject.js'
// import { Link } from 'react-router-dom'

export default class TextBox extends Component {
    state = {
        dialogueNumber: 15,
        pathNumber: 0,
        choice: false
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
        
        this.detectEndOfPath()

    }

    detectEndOfPath = () => {
        if(this.state.dialogueNumber >= (Stories.moralityProblem[0].length) - 2) {
            this.setState({choice: true}, this.toggleChoiceBox)
        }
    }

    toggleChoiceBox = () => {
        const choiceBox = document.getElementById("choice-box")
        
        if(this.state.choice !== false) {
            console.log("show choices")
            choiceBox.style.display = 'block'
            this.setState({choice: false})
        } else {
            console.log('hide choices')
            choiceBox.style.display = 'none'
        }
    }

    agree = () => {
        let pathNumber = this.state.pathNumber
        let temp = pathNumber
        let newPath = temp + 1

        this.setState({pathNumber: newPath, dialogueNumber: 0})
        this.toggleChoiceBox()
    }

    disagree = () => {
        let pathNumber = this.state.pathNumber
        let temp = pathNumber
        let newPath = temp + 2

        this.setState({pathNumber: newPath, dialogueNumber: 0})
        this.toggleChoiceBox()
    }

    switchPath = () => {
        
        // console.log("switch worked")
    }

    render() {
        return (
            <div className= 'text-container'>
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
                <div id='choice-box'>
                    <button onClick = {this.agree}>Agree</button>
                    <button onClick = {this.disagree}>Disagree</button>
                </div>
            </div>
        )
    }
}