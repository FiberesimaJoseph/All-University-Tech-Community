import React from 'react'
import AppBar from './components/AppBar'

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <div className="container">
        <div className="colored-content-container">
          <div className="content content-blue">Keynote</div>
          <div className="content content-green">Product Pitches</div>
          <div className="content content-orange">Hackathon</div>
          <div className="content content-red">Speaker Sessions</div>
          <div className="content content-red">Product Launch</div>
          <div className="content content-blue codelab">Codelab Sessions</div>
          <div className="content content-green technology">
            Technology Entepreneurship
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
