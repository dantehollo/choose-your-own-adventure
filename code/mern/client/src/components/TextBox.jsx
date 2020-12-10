import React, { Component } from 'react'
import { Stories } from './scriptObject.js'

export default class TextBox extends Component {
    state = {
        
        // holds player decisions and if choice buttons should be displayed
        calculationsBox: {
            playerChoices: '0',
            choice: true,
        },
        
        // determines where in the story the player is
        storyBox: {
            dialogueNumber: 0,
            pathNumber: 0
        }
    }

    // moves player to next line of dialogue
    nextLine = () => {
        let dialogueNumber = this.state.storyBox.dialogueNumber
        let temp = dialogueNumber + 1

        const copyStoryBox = {...this.state.storyBox}
        copyStoryBox.dialogueNumber = temp

        this.setState({storyBox: copyStoryBox}, this.detectEndOfPath)        
    }

    // finds end of path to trigger either choice or set piece
    detectEndOfPath = () => {
        const dialogueNumber = this.state.storyBox.dialogueNumber
        const pathNumber = this.state.storyBox.pathNumber
        
        if(dialogueNumber >= (Stories.moralityProblem[pathNumber].length) - 1) {
            console.log("end of path")
            try {
                this.detectSetPiece()
            } 
            catch(err) {
                this.moralitySwitchBox()
            }
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
           
            this.setState({calculationsBox: copyCalcBox})
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
            // console.log("first triggered")
        } else {
            choiceBox.style.display = 'none'
            // console.log("second triggered")
        }
        
    }

    // answers speaker, pushes value into player choice array and advances story down new path
    response = (event) => {
        const copyCalcBox = {...this.state.calculationsBox}
        const copyStoryBox = {...this.state.storyBox}
        
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        choiceArray.push(event.target.value)
        const choiceString = choiceArray.join('')
        copyCalcBox.playerChoices = choiceString

        const newPath = this.stripZero(choiceString)
        copyStoryBox.pathNumber = newPath

        this.setState({calculationsBox: copyCalcBox}, this.toggleChoiceBox)
        this.setState({storyBox: {pathNumber: newPath, dialogueNumber: 0}})
    }

    // determines which set piece player moves to
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
            default:
                break
        }
        
        console.log('switch tripped')
    }

    // takes 0's out of calcBox.playerchoices
    stripZero = (str) => {
        const path = str.replace(/0/g, '')
        const pathToInt = parseInt(path)
        
        return pathToInt
    }

    // checks if nextLine will create an error
    nextLineError = () => {
        try {
            console.log(Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber + 1].speaker)
            this.nextLine()
        }
        catch (err) {
            this.moralitySwitchBox()
        }
    }
    
    // test function
    testCatch = () => {
        try {
            console.log(Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber + 1].speaker)
            this.nextLine()
        }
        catch (err) {
            this.moralitySwitchBox()
        }
    }

    render() {
        return (
            <div className= 'text-container'>
                <div className='textbox-main' onClick = {this.nextLineError}>
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
                    <button 
                        onClick = {this.response} 
                        type = 'string' 
                        value = '1'>
                            Agree
                    </button>
                    <button 
                        onClick = {this.response} 
                        type = 'string' 
                        value = '2'>
                            Disagree
                    </button>
                </div>
                {/* <button onClick = {this.testCatch}>Test</button> */}
            </div>
        )
    }
}