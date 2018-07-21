import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import LocalStorage from './LocalStorage'

const storage = new LocalStorage()

ReactDOM.render(<App storage={storage} />, document.getElementById('root'))
