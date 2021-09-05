import React from 'react'
import './../App.css'

export class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false,

            experience: {
            },
            experiences: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            // id: this.state.task.id,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { opened } = this.state
        this.setState({
            opened: !opened,
        })
    }
    render() {
        const { title } = this.state
        const { company } = this.state
        const { date } = this.state
        const { task } = this.state
        const { task2 } = this.state
        const { opened } = this.state

        return (
            <>
                <form className={opened ? 'none' : null}>
                    <input
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.experience.title}
                        type="text"
                        placeholder='Job Title'
                    />
                    <input
                        name='company'
                        onChange={this.handleChange}
                        value={this.state.experience.company}
                        type="text"
                        placeholder='Company Name'
                    />
                    <input
                        name='date'
                        onChange={this.handleChange}
                        value={this.state.experience.date}
                        type="text"
                        placeholder='From/To'
                    />
                    <textarea
                        name='task'
                        onChange={this.handleChange}
                        value={this.state.experience.task}
                        type="text"
                        placeholder='Job Description ie task'
                    />
                    <textarea
                        name='task2'
                        onChange={this.handleChange}
                        value={this.state.experience.task2}
                        type="text"
                        placeholder='Job Description ie task'
                    />
                </form>
                <h2>EXPERIENCE</h2>


                <h3>{title} </h3>
                <b> {company} </b> / {date}
                <ul>
                    <li>
                        {task}
                    </li>
                    <li>
                        {task2}
                    </li>
                </ul>
                <button
                    onClick={this.handleSubmit}
                >{opened === false ? 'Submit' : 'Edit'}</button>
            </>


        )
    }
}