import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export default class LaunchPage extends Component {
    state = {
        storyList: []
    }

    componentDidMount() {
        this.refreshTitleList()
    }

    refreshTitleList = () => {
        axios.get('api/stories')
            .then((response) => {
                console.log(response.data)
                this.setState({storyList: response.data})
            })
    }

    render() {
        const availableStories = this.state.storyList.map((story) => {
            return <section key={story._id}>
                <ul>
                    <li>
                        <Link to={`/stories/${story._id}`}>
                            <h2>{story.title}</h2>
                        </Link>
                    </li>
                </ul>
            </section>
        })
        
        return(
            <div>
                { availableStories}
            </div>
        )
    }
}