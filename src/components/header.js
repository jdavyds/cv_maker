import React from 'react'
import './../App.css'

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '',
         opened: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
         header: e.target.value
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
        const { header } = this.state
        const {opened} = this.state
        return (
            <>
            <form className={opened ? 'none' : null}>
          <input
             onChange={this.handleChange}
             value={this.state.header} 
             type="text" 
             placeholder='Full Name'
             />
        </form>
        
             <h1>{header}</h1>
             <button 
            onClick={this.handleSubmit}
            >{opened === false ? 'Submit' : 'Edit'}</button>
            </>
        )
    }
}