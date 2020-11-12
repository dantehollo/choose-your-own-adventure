import React, { Component } from 'react'
import axios from 'axios'
import { Stories } from './scriptObject.js'
import { Link } from 'react-router-dom'

export default class TextBox extends Component {

    // import scriptObject and place it in the props of the componenet 

    componentDidMount() {
        this.refreshTextBox()
    }

    refreshTextBox = () => {
        axios.get('api/script')
        .then((response) => {
            this.setState({paths: response.data})
        })
    }

    render() {
        return (
            <div className='textbox-main'>
                <div className='name-box'>
                    Name Here
                    {/* {this.state.paths} */}
                </div>
                <div className='message-box'>
                    Dialouge Here
                    {Stories.moralityProblem[0].Usain}
                </div>
            </div>
        )
    }
}