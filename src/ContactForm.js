import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './ContactForm.css'
import {CardTitle} from 'material-ui/Card'

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    }

    updateProperty(fieldId, evt) {
        const newValue = evt.currentTarget.value
        this.setState(function (prevState) {
            let newObj = {}
            newObj[fieldId] = newValue
            return newObj
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        };
        this.props.addContact(newItem);
        this.resetFormFields()
    }

    resetFormFields() {
        this.setState({
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    render() {
        return (
            <div>
                <div className='form-square'>
                    <CardTitle title='Add Contact'/>
                    <TextField name='name' floatingLabelText='Name' value={this.state.name} onChange={this.handleChange}/>
                    <TextField name='email' floatingLabelText='Email' value={this.state.email} onChange={this.handleChange}/><br/>
                    <TextField name='phone' floatingLabelText='Phone Number' value={this.state.phone}
                               onChange={this.handleChange}/>
                    <TextField name='address' floatingLabelText='Address' value={this.state.address}
                               onChange={this.handleChange}/><br/>
                    <TextField name='city' floatingLabelText='City' value={this.state.city} onChange={this.handleChange}/>
                    <TextField name='state' floatingLabelText='State' value={this.state.state} onChange={this.handleChange}/><br/>
                    <TextField name='zip' floatingLabelText='Zip Code' value={this.state.zip}
                               onChange={this.handleChange}/><br/><br/>
                    <RaisedButton label='Submit' primary onClick={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default ContactForm
