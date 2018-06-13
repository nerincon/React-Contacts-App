import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red700} from 'material-ui/styles/colors'
import Form from './Form.js'

const theme = getMuiTheme({
  palette: {primary1Color: red700}
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Form />
      </MuiThemeProvider>
    )
  }
}

export default App
