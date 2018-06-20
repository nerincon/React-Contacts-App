import React, { Component } from 'react'
import {getContacts, deleteContact} from './contact-func.js'
import ContactsTable from './ContactDetailsPage'
import './ContactDisplay.css'

function NoContactsFound () {
  return (
    <p className='no-items'>No contacts found.</p>
  )
}

function SearchInput (props) {
  return (
    <input className='search'
      type='text'
      value={props.searchTxt}
      onChange={props.updateSearchTxt}
      placeholder='Search Contacts …' />
  )
}

class ContactsPage extends Component {
  constructor () {
    super()
    this.state = {
      contacts: getContacts(),
      searchTxt: '',
      editIdx: -1
    }
  }

  updateSearchTxt (evt) {
    const newText = evt.currentTarget.value
    this.setState({searchTxt: newText})
  }

  isMatch (searchTxt, item) {
    const nameString = item.name.toLowerCase()
    const lcSearchTxt = searchTxt.toLowerCase()
    const phoneNumber = item.phone.toLowerCase()

    return nameString.includes(lcSearchTxt) ||
           phoneNumber.includes(lcSearchTxt)
  }

  startEditing = (idx) => {
    this.setState({editIdx: idx});
  }
  stopEditing = () => {
    this.setState({editIdx: -1});
  }

  handleChange = (e, prop, idx) => {
    const {value} = e.target
    console.log(value)
    this.setState(state => ({
      contacts: state.contacts.map(
        (row, j) => (j === idx ? {...row, [prop]: value }: row)
      )
    }));
  }

  render () {
    const updateSearchTxt = this.updateSearchTxt.bind(this)
    const matchFn = this.isMatch.bind(null, this.state.searchTxt)
    const filteredItems = this.state.contacts && this.state.contacts.filter(matchFn)
    let bodyComponent = <ContactsTable 
    startEditing={this.startEditing} 
    editIdx={this.state.editIdx}
    handleChange={this.handleChange}
    stopEditing={this.stopEditing} 
    deleteContact={deleteContact}
    items={filteredItems} />
    if (filteredItems.length === 0) {
      bodyComponent = <NoContactsFound />
    }
    return (
      <section>
        <SearchInput searchTxt={this.state.searchTxt} updateSearchTxt={updateSearchTxt} />
        <div>
          {bodyComponent}
        </div>
      </section>
    )
  }
}

export default ContactsPage
