import React, { Component } from 'react'
import { Stories } from './scriptObject'
import TextBox from './TextBox'
import Character from './Character'
import MenuBar from './MenuBar'

export default class Theater extends Component {
    state = {
        
        // holds player decisions and if choice buttons should be displayed
        calculationsBox: {
            playerChoices: '0',
            choice: true
        },
        
        // determines where in the story the player is
        storyBox: {
            dialogueNumber: 0,
            pathNumber: 0
        },

        // holds the emotional state of each character
        emotionBox: {

            }
    }

    /* ***TEXTBOX*** */ 

    // moves player to next line of dialogue
    nextLine = () => {
        let dialogueNumber = this.state.storyBox.dialogueNumber
        let temp = dialogueNumber + 1
        
        const copyStoryBox = {...this.state.storyBox}

        copyStoryBox.dialogueNumber = temp
        this.setState({storyBox: copyStoryBox}, this.onClickTiggers)
    }

    // list of functions to execute on each click
    onClickTiggers = () => {
        const speaker = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].speaker
        // console.log(`speaker is ${speaker}`)
        
        this.detectEndOfPath()
        this.portraitSwap(speaker)
        this.focusSpeaker()
    }
    
    // finds end of path to trigger either choice or set piece
    detectEndOfPath = () => {
        const dialogueNumber = this.state.storyBox.dialogueNumber
        const pathNumber = this.state.storyBox.pathNumber
        
        
        if(dialogueNumber >= (Stories.moralityProblem[pathNumber].length) - 1) {
            this.detectSetPiece()
        }
    }

    // finds if the current path is a set piece or a Response
    detectSetPiece = () => {
        const copyCalcBox = {...this.state.calculationsBox}
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        
        if(choiceArray[choiceArray.length - 1] === "0" || playerChoices === "0"){
            this.toggleChoiceBox()
        } else {
            
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
        
        if(copyCalcBox.choice === false){
            choiceBox.style.animationName = 'dialouge-fade-in'
            choiceBox.style.visibility = 'visible'
            
        } else {
            choiceBox.style.animationName = 'dialouge-fade-out'
            choiceBox.style.visibility = 'hidden'
        }
    }

    // answers speaker, pushes value into player choice array and advances story down new path
    playerResponse = (event) => {
        const copyCalcBox = { ...this.state.calculationsBox }
        const copyStoryBox = { ...this.state.storyBox }
        
        const playerChoices = this.state.calculationsBox.playerChoices
        const choiceArray = playerChoices.split('')
        // console.log(choiceArray)
        choiceArray.push(event.target.value)
        const choiceString = choiceArray.join('')
        copyCalcBox.playerChoices = choiceString

        // returns path to interger value, without the zeros
        const newPath = this.stripZero(choiceString)
        copyStoryBox.pathNumber = newPath

        // console.log(playerChoices)
        // console.log(choiceArray)
        // console.log(choiceString)
        // console.log(newPath)
        // console.log(choiceString)
        // console.log(choiceString)
        // console.log(choiceString)
        
        // const speaker = Stories.moralityProblem[newPath][0].speaker
        
        this.setState({calculationsBox: copyCalcBox}, this.toggleChoiceBox)
        this.setState({storyBox: {pathNumber: newPath, dialogueNumber: 0}})
    }

    // determines which set piece player moves to
    moralitySwitchBox = () => {
        const copyStoryBox = { ...this.state.storyBox }
        // const copyEmoteBox = { ...this.state.emotionBox }
        // const storyPlace = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber]

        // console.log('MSB triggered')
        switch (this.state.calculationsBox.playerChoices) {
            case "0":
                break
            
            // Tehara
            case "010":
            case "020":
                
                copyStoryBox.pathNumber = 10
                copyStoryBox.dialogueNumber = 0
                
                this.setState({ storyBox: copyStoryBox }, this.onClickTiggers)
                break
            
            // Vadim
            case "01010":
            case "01020":
            case "02010":
            case "02020":
                
                copyStoryBox.pathNumber = 100
                copyStoryBox.dialogueNumber = 0
                
                this.setState({ storyBox: copyStoryBox }, this.onClickTiggers)
                break
            
            default:
                alert(`Congratulations! You have reached ending number ${this.stripZero(this.state.calculationsBox.playerChoices)}`)
                // <div className='end-box'>
                //     <h1>
                //         You have reached the end of the story. <br/>
                //         Would you like to play again?
                //     </h1>
                //     <button>
                //         {/* run reset function on click */}
                //         Yes
                //     </button>
                //     <button>
                //         {/* return to title card */}
                //         No
                //     </button>
                // </div>
                break
        }
        
    }

    // endCard function

    // reset function
    reset = () => {
        console.log('reset triggered')
        this.setState({
            calculationsBox: {
                playerChoices: '0',
                choice: true
            },
            
            storyBox: {
                dialogueNumber: 0,
                pathNumber: 0
            },
            
            emotionBox: {
                
            }
        })
        console.log('game reset')
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
            
            if(this.state.calculationsBox.choice === false ){
                return
            }
            //Why is this console.log so important, why does its presence prevent the program from breaking, and how can I get rid of it? 
            console.log(Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber + 1].speaker)
            this.nextLine()
        }
        catch (err) {
            this.moralitySwitchBox()
        }
    }

    // test function, it's in the name
    testFunction = () => {
        // testing promises
        const stage = document.getElementById('stage')

        console.log(stage.childNodes)
        stage.removeChild(stage.childNodes[1])
        console.log(stage.childNodes)
    }
    
    /* ***CHARACTER*** */ 

    // swap portraits
    portraitSwap = (speaker) => {
        const copyEmoteBox = {...this.state.emotionBox}
        const characterEmotion = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].emotion
        const storyPlace = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber]

        if(speaker === undefined){
            return
        }

        if(storyPlace.command === 'exit'){
            this.characterExits(copyEmoteBox)
            return
        }
        
        copyEmoteBox[speaker] = characterEmotion
        this.setState({emotionBox: copyEmoteBox})
        // console.log(`${speaker} is ${characterEmotion} in portraitSwap`)
    }

    // place portrait
    characterEnters = (copyEmotionBox) => {
        const speakerEmotion = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].emotion
        const speakerName = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].speaker

        copyEmotionBox[speakerName] = speakerEmotion
        this.setState({emotionBox: copyEmotionBox})
        console.log(`${speakerName} has entered`)
    }

    // remove portrait
    characterExits = (copyEmotionBox) => {
        const speakerName = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber-1].speaker
        // const stagePlace = document.getElementById(storyPlace.position)

        delete copyEmotionBox[speakerName]
        this.setState({emotionBox: copyEmotionBox})
    }

    // highlight speaker
    focusSpeaker = () => {
        // change speaker portrait to brighten if speaking and dim if not speaking
        const storyPlace = Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber]
        const portraitArray = document.getElementsByClassName('character-image')
        
        for(let i = 0; i <= portraitArray.length - 1; i++){
            // portraitArray[i].style.backgroundColor = 'white'
            portraitArray[i].classList.add('is-active')
            portraitArray[i].classList.remove('is-inactive')
            if(portraitArray[i].id !== storyPlace.speaker){
                portraitArray[i].classList.add('is-inactive')
            portraitArray[i].classList.remove('is-active')
                // portraitArray[i].style.backgroundColor = 'blue'
                // console.log(portraitArray[i].style)
            }
        }
    }

    /* ***MENUBAR*** */
    revealCredits = () => {
        const credits = document.getElementById('credits-pop-up')

        credits.style.display = 'block'
    }

    hideCredits = () => {
        const credits = document.getElementById('credits-pop-up')

        credits.style.display = 'none'
    }

    render() {
        const copyEmotionBox = {...this.state.emotionBox}
        const EmoBoxArray = Object.entries(copyEmotionBox)
        // console.log(EmoBoxArray)
        
        const stagePlaces = EmoBoxArray.map((characterProperties, index) => {
            // console.log(characterProperties)
            return <Character
                key = {index}
                id = {index}
                name = {characterProperties[0]}
                emotion = {characterProperties[1]}
                />
            }
        )
        return(
            <div id='theater'>
                <MenuBar
                    resetGame = {this.reset}
                    openCredits = {this.revealCredits}
                    closeCredits = {this.hideCredits}
                    />
                <div id='stage'>
                    { stagePlaces }
                </div>
                <TextBox
                    characterName = {Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].speaker}
                    characterDialogue = {Stories.moralityProblem[this.state.storyBox.pathNumber][this.state.storyBox.dialogueNumber].dialogue}
                    continue = {this.nextLineError}
                    response = {this.playerResponse}
                    resetGame = {this.reset}
                    testButton = {this.focusSpeaker}
                    buttonStyle = {this.state.calculationsBox.button}
                />
            </div>
        )
    }
}