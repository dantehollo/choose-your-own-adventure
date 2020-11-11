import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class TextBox extends Component {
    state = {
        paths: {},
        newPath: {
            newPathNumber: '',
            newPathDialouge: []
        }
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

    createNewPath = () => {
        const newPath = {
            pathNumber: this.state.newPath.newPathNumber,
            pathDialouge: this.state.newPath.newPathDialouge
        }

        axios.post('api/script', newPath)
        .then(() => {
            this.refreshTextBox
        })
    }

    onNewPathChange = (event) => {
        const newPath = {...this.state.newPath}
        newPath[event.target.name] = event.target.value
        this.setState({newPath: newPath})
    }

    handleSubmit = (event) => {
        this.setState({newPath: {
            newPathNumber: '',
            newPathDialouge: {}
        }})
        event.preventDefualt()
    }

    // clear form
    // clearForm = () => {
    //     const pathForm = document.getElementById('test-form')
    //     console.log(pathForm)
    //     pathForm.reset()
    // }

    render() {
        
    }
}