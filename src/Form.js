import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import './form.css'
// import MapsMyLocation from 'material-ui/SvgIcon'

// var show = false

// 1) convert template list to class based component because it needs state

// 2) in the constructor initialize your state: details showing true or false

// 3) In the render func of that component it needs to toggle state.

const defaultList = [
  {name: 'Nelson', city: 'Houston', state: 'TX', email: 'nelson@gmail.com', phone: '7862417822', address: 'test address1', zip: '77007'},
  {name: 'Eduardo', city: 'Dallas', state: 'TX', email: 'eduardo@gmail.com', phone: '7862417822', address: 'test address2', zip: '77007'},
  {name: 'Rincon', city: 'Austin', state: 'TX', email: 'rincon@gmail.com', phone: '7862417822', address: 'test address3', zip: '77007'},
  {name: 'Contreras', city: 'San Antonio', state: 'TX', email: 'contreras@gmail.com', phone: '7862417822', address: 'test address4', zip: '77007'}
]

function OriginalList (props) {
  const listItems = props.contacts.map(ContactInfo)

  return <div>{listItems}</div>
}

function ContactInfo (props, index) {
  console.log('props in tL', props)
  return (
    <ul key={index}>
      <li>Name: {props.name}</li>
      <li>City: {props.city}</li>
      <li>State: {props.state}</li>
      {/* <RaisedButton label='Details' secondary onClick={props.onClick} /> */}
    </ul>
  )
}

// function OriginalDetails () {
//   const listItems = defaultList.map(showDetails)
//   return <div>{listItems}</div>
// }

// function ShowDetails (props) {
//   console.log('inside if func: ' + show)
//   if (props.show) {
//     console.log('getting to showDetails func')
//     return (
//       <ul>
//         <li>Email: {props.email}</li>
//         <li>Phone: {props.phone}</li>
//         <li>Address: {props.address}</li>
//         <li>Zip: {props.zip}</li>
//       </ul>
//     )
//   }
//   console.log('NO SHOW')
// }

// function handleSubmitDetails (event) {
//   event.preventDefault()
//   console.log('pressed click for details!')
//   show = true
//   console.log(show)
//   ShowDetails()
// }

class InitialList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showMore: false
    }
  }

  toggleMore () {
    console.log('toggle')
    this.setState(function (currentState) {
      return {showMore: !currentState.showMore}
    })
  }

  render () {
    const extra = this.state.showMore ? <div>Test!</div> : null
    const clickFn = this.toggleMore.bind(this)
    return (
      <div>
        <div><OriginalList onClick={clickFn} contacts={defaultList} /></div>
        {extra}
        <RaisedButton label='Details' secondary onClick={clickFn} />
      </div>
    )
  }
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
            : ''}
        </div>
      </div>
    )
  }
}

export {InitialList, Form}
