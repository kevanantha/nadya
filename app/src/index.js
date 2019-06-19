import React from 'react'
import Navbar from './components/Navbar'

import { render } from 'react-dom'
import { Router } from '@reach/router'
import { Add, Edit, Pick, Shell } from './fragments'

import * as serviceWorker from './serviceWorker'
import './App.css'

render(
  <>
    <Navbar />
    <Router>
      <Shell path='/' />
      <Pick path='/pick' />
      <Add path='/pick/:service_id' />
      <Edit path='/edit/:id' />
    </Router>
  </>,
  document.getElementById('app')
)

serviceWorker.unregister()
