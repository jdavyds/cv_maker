import React from 'react'
import './../App.css'
export class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         email: '',
         phone: '',
         address: '',
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
        const { email } = this.state
        const { phone } = this.state
        const { address } = this.state
        const {opened} = this.state

        return (
            <>
            <form className={opened ? 'none' : null}>
            <input
            name='email'
            onChange={this.handleChange}
            value={this.state.email} 
            type="text" 
            placeholder='Email address'
            />
            <input
            name='phone'
            onChange={this.handleChange}
            value={this.state.phone} 
            type='number' 
            placeholder='Phone Number'
            />
            <input
            name='address'
            onChange={this.handleChange}
            value={this.state.address} 
            type="text" 
            placeholder='Home Address'
            />
            </form>
            <h2>CONTACT</h2>
            <p> <b> Email:</b> {email}</p>
            <p> <b> Phone:</b> {phone}</p> 
            <p> <b>Address:</b> {address}</p>
            <button 
            onClick={this.handleSubmit}
            >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
} 