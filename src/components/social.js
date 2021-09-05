import React from 'react'
import './../App.css'

export class Socials extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         opened: false,
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
      };
    handleSubmit = (e)  => {
        e.preventDefault();
        const { opened } = this.state
        this.setState({
            opened:  !opened,
        })
    }
    render() {
        const { linkedIn } = this.state
        const { twitter } = this.state
        const { github } = this.state
        const {opened} = this.state

        return (
            <>
            <form className={opened ? 'none' : null}>
            <input
            name='linkedIn'
            onChange={this.handleChange}
            value={this.state.linkedIn} 
            type="text" 
            placeholder='LinkedIn Username'
            />
            <input
            name='twitter'
            onChange={this.handleChange}
            value={this.state.twitter} 
            type='text' 
            placeholder='Twitter Username'
            />
            <input
            name='github'
            onChange={this.handleChange}
            value={this.state.github} 
            type="text" 
            placeholder='Github Username'
            />
            </form>
            <h2>SOCIALS</h2>
            <p> <b> LinkedIn:</b> www.linkedin.com/{ linkedIn }</p>
            <p> <b> Twitter:</b> www.twitter.com/{ twitter }</p> 
            <p> <b>Github:</b>  www.github.com/{ github }</p>
            <button 
            onClick={this.handleSubmit}
            >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
} 