import React from 'react'
import './../App.css'

export class Skills extends React.Component {
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
        const { skill1 } = this.state
        const { skill2 } = this.state
        const { skill3 } = this.state
        const { skill4 } = this.state
        const {opened} = this.state
        return (
            <>
            <form className={opened ? 'none' : null}>
            <input
            name='skill1'
            onChange={this.handleChange}
            value={this.state.skill1} 
            type="text" 
            placeholder='Skill 1'
            />
            <input
            name='skill2'
            onChange={this.handleChange}
            value={this.state.skill2} 
            type='text' 
            placeholder='Skill 2'
            />
            <input
            name='skill3'
            onChange={this.handleChange}
            value={this.state.skill3} 
            type="text" 
            placeholder='Skill 3'
            />
            <input
            name='skill4'
            onChange={this.handleChange}
            value={this.state.skill4} 
            type="text" 
            placeholder='Skill 4'
            />
        </form>
            <h2>SKILLS</h2>
            <ul>
            <li> { skill1 }</li>
            <li> { skill2 }</li> 
            <li> { skill3 }</li>
            <li> { skill4 }</li>
            </ul>
            <button 
            onClick={this.handleSubmit}
            >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
} 