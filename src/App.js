import React from 'react'
import AppBar from './components/AppBar'
import AboutUs from './components/AboutUs'
import ColoredContainer from './components/ColoredContainer'

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <div className="container">
        <ColoredContainer />
        <AboutUs />
      </div>
    </div>
  )
}

export default App
