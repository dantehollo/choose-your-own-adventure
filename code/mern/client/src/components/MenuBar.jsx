import React, { Component} from 'react'

export default class MenuBar extends Component {

    componentWillUnmount() {
        // console.log(`${this.props.name} left the stage`)
    }

    render() {
        return(
            <nav className='nav'>
                <div className='dropdown-content'>
                    <button  
                        onClick={this.props.openCredits}>
                        Credits
                    </button>
                    <button 
                        onClick={this.props.resetGame} >
                        Reset
                    </button>
                </div>
                <button className='dropdown-menu'></button>
                <div className='left-box'>
                    {/* logo image/home link goes here */}
                    Legends from Al-Yehn
                </div>
                <div className='right-box'>
                        <button  
                            onClick={this.props.openCredits}>
                            Credits
                        </button>
                        <button 
                            onClick={this.props.resetGame} >
                            Reset
                        </button>
                </div>
                <div id='credits-pop-up'>
                    <button 
                        onClick={this.props.closeCredits}>
                        x
                    </button>
                    <table>
                        <tr>
                            <th>Creator:</th>
                        </tr>
                        <tr>
                            <td>Matthew Caravaggio</td>
                            <td>Programming and Story</td>
                            <td>
                                <a href='https://msc-portfolio.herokuapp.com/'>Portfolio</a>
                            </td>
                            <td>
                                <a href="https://github.com/dantehollo">Github</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Assets Used:</th>
                        </tr>
                        <tr>
                            <td>Erda Enos</td>
                            <td>Character Art</td>
                            <td>
                                <a href='https://www.patreon.com/erdaenos'>Patreon</a>
                            </td>
                            <td>
                                <a href='https://erdaenos.itch.io/'>itch.io</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Konnet</td>
                            <td>Background Art</td>
                            <td>
                                <a href='https://twitter.com/cosmickonett'>Twitter</a>
                            </td>
                            <td>
                                <a href='https://konett.itch.io/'>itch.io</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ilonitta</td>
                            <td>Text Box Art</td>
                            <td>
                                <a href='https://ilonitta.com'>Ilonitta.com</a>
                            </td>
                            <td>
                                <a href="https://www.freepik.com/vectors/floral">Freepik</a>
                            </td>
                        </tr>
                    </table>
                    <h1 className='and-you'>
                        And a special thanks to <br/><span id='credits-you'>YOU!</span>
                    </h1>
                    <p className='credits-end'>
                        Message From The Creator:<br/>
                        Thank you for taking the time to check out this visual novel of mine. It was six months of a lot of hard work,
                        but well worth the effort. This project was made in an effort to break into the tech world and land a Front-End Dev job
                        so I can finally pay off those sweet student loans from General Assembly (Atlanta, Software Engineering Immersive Cohort 24). 
                        The characters are part of a larger story I have been working on for the last five years and I am excited to see them 
                        someplace besides my head. I plan to add more features like a backend, title screens and of course, more stories! So when 
                        you get a free moment, check and see what's new.
                    </p>                
                </div>
            </nav>
            )
     }
}