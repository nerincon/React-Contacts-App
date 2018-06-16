import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {green600} from 'material-ui/styles/colors'
import ContactForm from './ContactForm.js'
import NavBar from './NavBar.js';
import ContactsPage from './ContactDisplay.js'
import Homepage from './HomePage.js'

const theme = getMuiTheme({
  palette: {primary1Color: green600}
})

class App extends Component {
  constructor () {
    super()
    this.state = {
      route: '/home'
    }
    window.onhashchange = () => { this.hashChange() }
  }
  componentDidMount () {
    this.hashChange()
  }
  hashChange () {
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


  render () {
    let pageComponent = <Homepage />
    if (this.state.route === '/add') {
      pageComponent = <ContactForm />
    } else if (this.state.route === '/show') {
      pageComponent = <ContactsPage />
    }

    return (
      <div>
        <div>
          <NavBar />
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
