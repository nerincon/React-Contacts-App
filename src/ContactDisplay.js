import React, { Component } from 'react'
import {getContacts} from './contact-func.js'
import ContactsTable from './ContactDetailsPage'



class ContactsPage extends Component {
    constructor () {
        super()
        this.state = {
        contacts: getContacts(),
        searchTxt: ''
        }
}
  
    render () {
        let bodyComponent = <ContactsTable items={this.state.contacts}/>
        return (
            <section>
              <div>
                {bodyComponent}
              </div>
            </section>
          )
    }
}

export default ContactsPage