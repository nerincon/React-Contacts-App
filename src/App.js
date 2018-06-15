import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red700} from 'material-ui/styles/colors'
import {InitialList, Form} from './Form.js'

const theme = getMuiTheme({
  palette: {primary1Color: red700}
})

class App extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <Form />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={theme}>
          <InitialList />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
