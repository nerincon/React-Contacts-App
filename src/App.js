import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {green600} from 'material-ui/styles/colors'
import ContactForm from './ContactForm.js'
import NavBar from './NavBar.js'
import ContactsPage from './ContactDisplay.js'
import Homepage from './HomePage.js'
import {getContacts, setContacts} from './contact-func'


const theme = getMuiTheme({
    palette: {primary1Color: green600}
});

class App extends Component {
    state = {
        route: '/home',
        contacts: [],
    };

    async componentDidMount() {
        this.hashChange();
        if (!getContacts() || !getContacts().length) {
            await window.fetch('data/contacts.json')
                .then(function (response) {
                    return response.json()
                })
                .then(contacts => {
                    this.setState({contacts}, () => {
                        setContacts(this.state.contacts)
                    })
                })
                .catch(() => console.error('Uh-oh - fetching initial inventory.json failed!'));
        } else {
            this.setState({contacts: getContacts()})
        }
        window.onhashchange = () => this.hashChange();
    }

    hashChange() {
        const validRoutes = ['/home', '/add', '/show']
        const defaultRoute = '/home/'
        const newRoute = window.location.hash.replace(/^#/, '').trim()
        const isValidRoute = validRoutes.includes(newRoute)

        if (isValidRoute) {
            this.setState({route: newRoute})
        } else {
            window.location.hash = defaultRoute
        }
    }

    addContact = (contact) => {
        this.setState({contacts: [...this.state.contacts, contact]}, () => {
            setContacts(this.state.contacts)
        })
    };

    deleteContact = (index) => {
        const contacts = [...this.state.contacts.slice(0, index), ...this.state.contacts.slice(index + 1)];
        this.setState({contacts}, () => {
            setContacts(this.state.contacts)
        })
    };

    updateContact = (contactsArray) => {
        if(contactsArray.length > 0){
            var contacts = []
            for(var i=0; i < contactsArray.length; i++){
                contacts.push(contactsArray[i])
                console.log(contacts)
                }
        } else {return}
        this.setState({contacts}, () => {
            setContacts(contacts)
        })
    };

    render() {
        let pageComponent = <Homepage/>
        if (this.state.route === '/add') {
            pageComponent = <ContactForm addContact={this.addContact}/>
        } else if (this.state.route === '/show') {
            pageComponent = <ContactsPage updateContact={this.updateContact} deleteContact={this.deleteContact} contacts={this.state.contacts}/>
        }

        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <MuiThemeProvider muiTheme={theme}>
                        {pageComponent}
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default App
