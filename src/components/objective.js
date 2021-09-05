import React from 'react'
import './../App.css'

export class Objective extends React.Component {
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
         objective: e.target.value
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
        const { objective } = this.state
        const {opened} = this.state

        return(
            <>
            <form className={opened ? 'none' : null}>
            <textarea 
            name="objectives" 
            cols="30"
            rows="10"
            onChange={this.handleChange}
            value={this.state.objective} 
            type="text" 
            placeholder='Job Objectives'
            ></textarea>
            </form>
            <h2>OBJECTIVE</h2>
            <p className='trial'>{objective}</p>
            <button 
            onClick={this.handleSubmit}
            >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
}