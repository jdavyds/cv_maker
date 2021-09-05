import React from 'react'
import './../App.css'

export class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false,
            education: {
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
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
        const { institution } = this.state
        const { degree } = this.state
        const { date } = this.state
        const { opened } = this.state
        return (
            <>
                <form className={opened ? 'none' : null}>
                    <input
                        name='institution'
                        onChange={this.handleChange}
                        value={this.state.education.institution}
                        type="text"
                        placeholder='Institution Name'
                    />
                    <input
                        name='degree'
                        onChange={this.handleChange}
                        value={this.state.education.degree}
                        type="text"
                        placeholder='Degree - Course'
                    />
                    <input
                        name='date'
                        onChange={this.handleChange}
                        value={this.state.education.date}
                        type="text"
                        placeholder='From - To'
                    />
                </form>
                <h2>EDUCATION</h2>
                <b>{institution}</b> -- {degree}
                <br />
                <i> {date} </i>
                <button
                    onClick={this.handleSubmit}
                >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
}