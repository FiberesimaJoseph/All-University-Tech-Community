import React from 'react'

const ColoredContainer = () => {
  return (
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
  )
}

export default ColoredContainer
