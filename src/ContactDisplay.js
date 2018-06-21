import React, { Component } from 'react'
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
    // console.log(this.state.contacts)
    this.props.updateContact(this.state.contacts)
  }

  handleChange = (e, prop, idx) => {
    const {value} = e.target;
    const {contacts} = this.props;
    this.setState(() => ({
      contacts : contacts.map(
        (row, j) => (j === idx ? {...row, [prop]: value }: row)
      )
    }));
  }

  render () {
    const updateSearchTxt = this.updateSearchTxt.bind(this)
    const matchFn = this.isMatch.bind(null, this.state.searchTxt)
    const filteredItems = this.props.contacts && this.props.contacts.filter(matchFn)
    let bodyComponent = <ContactsTable 
    startEditing={this.startEditing} 
    editIdx={this.state.editIdx}
    handleChange={this.handleChange}
    stopEditing={this.stopEditing} 
    deleteContact={this.props.deleteContact}
    updateContact={this.props.updateContact}
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
