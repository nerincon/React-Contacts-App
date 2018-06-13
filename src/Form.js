import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './form.css'
// import MapsMyLocation from 'material-ui/SvgIcon'

const defaultList = [{name: 'Nelson', email: 'nerincon1@gmail.com'}, {name: 'Rincon', email: 'rincon1@gmail.com'}]

function OriginalList () {
  const listItems = defaultList.map(TemplateList)

  return <ul>{listItems}</ul>
}

function TemplateList (props) {
  return (
    <div>
      <li>{props.name}</li>
      <li>{props.email}</li>
    </div>
  )
}

class Form extends Component {
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event, key) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('pressed click!')
    this.setState({showMe: true})
  }

  render () {
    return (
      <div>
        <div>
          <AppBar title='Contacts App' />
        </div>
        <div>
          <Card className='md-card'>
            <CardTitle title='My Contacts' subtitle='' />
            <CardText>
              <TextField floatingLabelText='Name'
                defaultValue={this.state.name}
                onChange={event => this.handleChange(event, 'name')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='Email'
                defaultValue={this.state.email}
                onChange={event => this.handleChange(event, 'email')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='Phone Number'
                defaultValue={this.state.phone}
                onChange={event => this.handleChange(event, 'phone')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='Address'
                defaultValue={this.state.address}
                onChange={event => this.handleChange(event, 'address')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='City'
                defaultValue={this.state.city}
                onChange={event => this.handleChange(event, 'city')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='State'
                defaultValue={this.state.state}
                onChange={event => this.handleChange(event, 'state')} />
            </CardText>
            <CardText>
              <TextField floatingLabelText='Zip Code'
                defaultValue={this.state.zip}
                onChange={event => this.handleChange(event, 'zip')} />
            </CardText>
            <CardActions>
              <RaisedButton label='Submit' primary onClick={this.handleSubmit} />
            </CardActions>
          </Card>
        </div>
        <div>
          {this.state.showMe
            ? <div id='formdata'>
              <ul>
                <li>{this.state.name}</li>
                <li>{this.state.email}</li>
                <li>{this.state.phone}</li>
                <li>{this.state.address}</li>
                <li>{this.state.city}</li>
                <li>{this.state.state}</li>
                <li>{this.state.zip}</li>
              </ul>
            </div>
            : <OriginalList />}
        </div>
      </div>
    )
  }
}

export default Form
