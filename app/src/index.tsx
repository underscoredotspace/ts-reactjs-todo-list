import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import LocalStorage from './LocalStorage'

const localStorage = new LocalStorage()

ReactDOM.render(<App storage={localStorage} />, document.getElementById('root'))
