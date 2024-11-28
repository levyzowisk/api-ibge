import { useState } from 'react'
import { BrowserRouter as Router}   from 'react-router-dom'
import AppRoute from './Route/route'
function App() {

  return (
    <>
      <Router>
        <AppRoute/>
      </Router>
    </>
  )
}

export default App
