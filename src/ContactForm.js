import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './ContactForm.css'
import {CardTitle} from 'material-ui/Card'
import {addContact} from './contact-func'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      showMe: false
    }
  }

  updateProperty (fieldId, evt) {
    const newValue = evt.currentTarget.value
    this.setState(function (prevState) {
      let newObj = {}
      newObj[fieldId] = newValue
      return newObj
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    console.log(newItem)
    addContact(newItem)
    this.setState({showMe: true})
    this.resetFormFields()
  }

  resetFormFields () {
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

  render () {
    const nameChangeFn = this.updateProperty.bind(this, 'name')
    const emailChangeFn = this.updateProperty.bind(this, 'email')
    const phoneChangeFn = this.updateProperty.bind(this, 'phone')
    const addressChangeFn = this.updateProperty.bind(this, 'address')
    const cityChangeFn = this.updateProperty.bind(this, 'city')
    const stateChangeFn = this.updateProperty.bind(this, 'state')
    const zipChangeFn = this.updateProperty.bind(this, 'zip')

    const handleSubmit = this.handleSubmit.bind(this)
    return (
      <div>
        <div className='form-square'>
          <CardTitle title='Add Contact' />
          <TextField floatingLabelText='Name' defaultValue={this.state.name} onChange={nameChangeFn} />
          <TextField floatingLabelText='Email'defaultValue={this.state.email}onChange={emailChangeFn} /><br />
          <TextField floatingLabelText='Phone Number' defaultValue={this.state.phone} onChange={phoneChangeFn} />
          <TextField floatingLabelText='Address' defaultValue={this.state.address} onChange={addressChangeFn} /><br />
          <TextField floatingLabelText='City' defaultValue={this.state.city} onChange={cityChangeFn} />
          <TextField floatingLabelText='State' defaultValue={this.state.state} onChange={stateChangeFn} /><br />
          <TextField floatingLabelText='Zip Code' defaultValue={this.state.zip} onChange={zipChangeFn} /><br /><br />
          <RaisedButton label='Submit' primary onClick={handleSubmit} />
        </div>
      </div>
    )
  }
}

export default ContactForm
