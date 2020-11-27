import React, { Component } from 'react'
// import axios from 'axios'
import { Stories } from './scriptObject.js'
// import { Link } from 'react-router-dom'

export default class TextBox extends Component {
    state = {
        
        // holds player decisions
        calculationsBox: {
            playerChoices: '0',
            choice: true,
        },
        
        // determines where in the story the player is
        storyBox: {
            dialogueNumber: 17,
            pathNumber: 0
        }
    }

    // componentDidMount() {
    //     this.refreshTextBox()
    // }

    // refreshTextBox = () => {
    //     axios.get('api/script')
    //     .then((response) => {
    //         this.setState({paths: response.data})
    //     })
    // }

    // moves player to next line of dialogue
    nextLine = () => {
        let dialogueNumber = this.state.storyBox.dialogueNumber
        let temp = dialogueNumber + 1

        const copyStoryBox = {...this.state.storyBox}
        copyStoryBox.dialogueNumber = temp

        this.setState({storyBox: copyStoryBox}, this.detectEndOfPath)        
    }

    //seeing the async of setState is screwing me over
    waitForState(functionName) {
        setTimeout(functionName(), 1000)
        console.log("wait for state")
    } 

    // finds end of path to trigger either choice or set piece
    detectEndOfPath = () => {
        const pathNumber = this.state.storyBox.pathNumber
        
        if(this.state.storyBox.dialogueNumber === (Stories.moralityProblem[pathNumber].length) - 1) {
            console.log("end of path")
            this.detectSetPiece()
            // this.toggleChoiceBox()
            // this.startSetPiece()
        }
    }

    // finds if the current path is a set piece or a responce
    detectSetPiece = () => {
        const copyCalcBox = {...this.state.calculationsBox}
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        
        if(choiceArray[choiceArray.length - 1] === "0" || playerChoices === "0"){
            console.log("this is a set piece of the story")
            this.toggleChoiceBox()
        } else {
            console.log('this is a response')
            choiceArray.push("0")
            const choiceString = choiceArray.join('')
            copyCalcBox.playerChoices = choiceString
            this.setState({calculationsBox: copyCalcBox},this.moralitySwitchBox)
        }
    }

    // turns the choice options on and off
    toggleChoiceBox = () => {
        const choiceBox = document.getElementById("choice-box")
        const copyCalcBox = {...this.state.calculationsBox}
        copyCalcBox.choice = !copyCalcBox.choice
        this.setState({calculationsBox: copyCalcBox})

        // console.log(`The choice in the state is ${this.state.calculationsBox.choice}`)
        // console.log(`The choice in the copy is ${copyCalcBox.choice}`)
        
        if(this.state.calculationsBox.choice === true) {
            choiceBox.style.display = 'block'
            console.log("first triggered")
        } else {
            choiceBox.style.display = 'none'
            console.log("second triggered")
        }
        
    }

    // agrees with speaker, pushes "1" into player choice array and advances story down new path
    agree = () => {
        const copyCalcBox = {...this.state.calculationsBox}
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        choiceArray.push("1")
        const choiceString = choiceArray.join('')
        copyCalcBox.playerChoices = choiceString

        this.setState({calculationsBox: copyCalcBox}, this.toggleChoiceBox)
    }

    // disagrees with speaker, pushes "2" into player choice array and advances story down new path
    disagree = () => {
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        choiceArray.push("2")

        this.toggleChoiceBox()
    }

    moralitySwitchBox = () => {
        const copyStoryBox = { ...this.state.storyBox }

        switch (this.state.calculationsBox.playerChoices) {
            // Tehara
            case "010":
            case "020":
                copyStoryBox.pathNumber = 10
                copyStoryBox.dialogueNumber = 0
                this.setState({ storyBox: copyStoryBox })
                break
            // Vadim
            case "01010":
            case "01020":
            case "02010":
            case "02020":
                copyStoryBox.pathNumber = 100
                copyStoryBox.dialogueNumber = 0
                this.setState({ storyBox: copyStoryBox })
                break
        }
        console.log('switch tripped')
    }

    render() {
        return (
            <div className= 'text-container'>
                <div className='textbox-main' onClick = {this.nextLine}>
                    <div className='name-box'>
                        {Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].speaker}
                    </div>
                    <div className='message-box'>
                        <p>
                            {Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].dialogue}
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