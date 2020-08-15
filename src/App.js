import React from 'react'
import AppBar from './components/AppBar'
import AboutUs from './components/AboutUs'
import ColoredContainer from './components/ColoredContainer'
import AudienceAnalysis from './components/AudienceAnalysis'

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <div className="container">
        <ColoredContainer />
        <AboutUs />
        <AudienceAnalysis />
      </div>
    </div>
  )
}

export default App
