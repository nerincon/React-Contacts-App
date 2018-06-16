import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {getContacts, setContacts} from './contact-func'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()



function fetchFailed () {
    console.error('Uh-oh - fetching initial inventory.json failed!')
  }


if (!getContacts()) {
    window.fetch('data/contacts.json')
      .then(function (response) { return response.json() })
      .then(setContacts)
      .then(startRendering)
      .catch(fetchFailed)
  } else {
    startRendering()
  }

function startRendering () {
    ReactDOM.render(<App />, document.getElementById('root'))
}

registerServiceWorker()